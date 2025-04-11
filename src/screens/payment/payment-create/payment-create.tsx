import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { IconChevronDown, IconClose } from '@shared/ui/icons'
import { Images } from '@shared/ui/images'
import { darkTheme } from '@shared/ui/theme'
import { useEffect, useState } from 'react'
import CurrencyInput from 'react-native-currency-input'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
  ListRenderItem,
  Pressable,
} from 'react-native'
import { services } from '../payment-services/constants'
import { values } from './constansts'
import { KeyboardView } from '@shared/ui/templates'

export type TPaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>

export const PaymentCreate = ({ navigation, route }: TPaymentCreateProps) => {
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState(0)
  const balance = 457334.23
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    setDisable(value == 0 || phone.length !== 11)
  }, [value, phone])
  const continueTransaction = () => {
    if (disable) return
    navigation.navigate('paymentSuccess', {
      amount: value,
      phone,
      serviceId: route.params.serviceId,
      title: route.params.title,
    })
  }

  const renderItem: ListRenderItem<{ id: string; value: number }> = ({
    item,
  }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : '#f9c2ff',
          },
          styles.valuePlus,
        ]}
        onPress={() => setValue(vl => vl + item.value)}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Увеличиваем зону клика
      >
        <Text style={{ color: darkTheme.palette.text.secondary, fontSize: 13 }}>
          {item.value}
          {' ₽'}
        </Text>
      </Pressable>
    )
  }
  return (
    <View style={styles.container}>
      <KeyboardView>
        <View style={styles.cardWrapper}>
          <Text
            style={{
              color: darkTheme.palette.text.tertiary,
              fontSize: 15,
              fontWeight: 500,
            }}>
            Карта для оплаты
          </Text>
          <View style={styles.card}>
            <View style={styles.cardBalance}>
              <Image
                source={Images.bankcard}
                style={{ width: 40, height: 28 }}
              />
              <View>
                <Text style={{ color: darkTheme.palette.text.primary }}>
                  Карта зарплатная
                </Text>
                <Text style={{ color: darkTheme.palette.text.primary }}>
                  {balance
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                    .replace('.', ',') + ' ₽'}
                </Text>
              </View>
            </View>
            <IconChevronDown color={darkTheme.palette.content.tertiary} />
          </View>
        </View>
        <View style={styles.phoneNumberWrapper}>
          <View style={styles.phoneNumberContent}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={
                services.find(
                  ({ serviceId }) => serviceId === route.params.serviceId,
                )!.serviceIcon
              }
            />
            {/* <PhoneInput
            ref={phoneInput}
            value={phone}
            defaultValue={''}
            defaultCode='RU'
            layout='first'
            placeholder='Номер телефона'
            onChangeText={setPhone}
            // countryPickerButtonStyle={{
            //   display: 'none',
            // }}
            // containerStyle={{
            //   //   display: 'none',
            //   backgroundColor: darkTheme.palette.content.primary,
            //   flexGrow: 2,
            //   width: 1,
            //   alignItems: 'center',
            // }}
            // textContainerStyle={{
            //   padding: 0,
            //   margin: 0,

            //   backgroundColor: darkTheme.palette.content.primary,
            // }}
            // codeTextStyle={{
            //   height: 24,
            //   padding: 0,
            //   margin: 0,
            // }}
            // textInputStyle={{
            //   height: 24,
            //   backgroundColor: 'green',
            // }}
            containerStyle={styles.phoneInputWrapper}
            textContainerStyle={styles.textContainer}
            textInputStyle={styles.textInput}
            codeTextStyle={styles.codeText}
            flagButtonStyle={styles.flagButton}
          /> */}
            <TextInput
              style={styles.inputPhone}
              value={phone} //TODO форматирование номера
              onChangeText={v => {
                setPhone(v.slice(0, 11))
              }}
              inputMode='tel'
              placeholderTextColor={darkTheme.palette.text.tertiary}
              placeholder='Номер телефона'
            />

            <TouchableOpacity onPress={() => setPhone('')}>
              <IconClose color={darkTheme.palette.content.tertiary} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.valueWrapper}>
          <Text
            style={{
              color: darkTheme.palette.text.tertiary,
              fontSize: 15,
              fontWeight: 500,
            }}>
            Сумма
          </Text>

          <CurrencyInput
            style={styles.valueInput}
            value={value}
            onChangeValue={vl => setValue(vl ? vl : 0)}
            keyboardType='numeric'
            prefix='₽'
            placeholder='0'
          />
          <View style={styles.decimal} />

          <FlatList
            horizontal={true}
            data={values}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            keyboardShouldPersistTaps='handled'
            style={styles.valueList}
          />
        </View>
      </KeyboardView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          disabled={disable}
          style={[styles.continueButton, disable && styles.disableButton]}
          onPress={() => continueTransaction()}>
          <Text style={styles.buttonText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.palette.background.primary,
    gap: 16,
  },
  button: {
    backgroundColor: 'gray',
    padding: 16,
  },
  textButton: {
    padding: 16,
  },
  cardWrapper: {
    gap: 15,
    width: '100%',

    padding: 16,
    backgroundColor: darkTheme.palette.background.secondary,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBalance: {
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  phoneNumberWrapper: {
    padding: 16,
    backgroundColor: darkTheme.palette.background.secondary,
  },
  phoneNumberContent: {
    flexDirection: 'row',
    padding: 8,
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: darkTheme.palette.content.primary,
    borderRadius: 26,
    paddingLeft: 16,
    paddingRight: 14,
  },
  inputPhone: {
    fontSize: 15,

    color: darkTheme.palette.text.primary,
    flexGrow: 2,
  },
  valueWrapper: {
    padding: 16,
    backgroundColor: darkTheme.palette.background.secondary,
  },
  valueInput: {
    fontWeight: 500,
    fontSize: 28,
    color: darkTheme.palette.text.primary,
  },
  decimal: {
    width: '90%',
    marginLeft: '5%',
    height: 1,
    backgroundColor: darkTheme.palette.content.primary,
  },
  valuePlus: {
    paddingHorizontal: 15,
    marginHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 14,

    backgroundColor: darkTheme.palette.content.secondary,
  },
  valueList: {
    paddingTop: 8,
  },
  buttonWrapper: {
    flex: 1,
    flexGrow: 2,
    padding: 24,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  continueButton: {
    backgroundColor: darkTheme.palette.accent.primary,
    padding: 16,
    paddingHorizontal: 0,
    borderRadius: 26,
    width: '100%',
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 600,
    color: darkTheme.palette.text.primary,
    fontSize: 15,
  },
  disableButton: {
    opacity: 0.3,
  },
  //   phoneInputWrapper: {
  //     width: 1,
  //     flexGrow: 2,
  //   },
  //   textContainer: {
  //     paddingVertical: 0,
  //     backgroundColor: darkTheme.palette.content.primary,
  //     // backgroundColor: 'red',
  //     color: darkTheme.palette.text.primary,
  //   },
  //   textInput: {
  //     fontSize: 15,
  //     color: darkTheme.palette.text.primary,
  //     // lineHeight: 16, // Минимизируем высоту текста
  //     margin: 0,
  //   },
  //   codeText: {
  //     color: darkTheme.palette.text.primary,
  //     fontSize: 15,
  //   },
  //   flagButton: {
  //     display: 'none',
  //   },
})
