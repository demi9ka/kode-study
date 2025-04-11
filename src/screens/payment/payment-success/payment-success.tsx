import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { darkTheme } from '@shared/ui/theme'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { StyleSheet } from 'react-native'
import { services } from '../payment-services/constants'

export type PaymentSuccessProps = StackScreenProps<
  RootStackParamsList,
  'paymentSuccess'
>

export const PaymentSuccess = ({ navigation, route }: PaymentSuccessProps) => {
  const confirmTransaction = () => {}
  const openLink = () => {
    Linking.openURL('https://career.kode.ru/training/') // Замените на ваш URL
      .catch(err => console.error('Failed to open URL:', err))
  }
  return (
    <View style={styles.container}>
      <View style={styles.elem}>
        <Text style={styles.title}>Карта для оплаты</Text>
        <Text style={styles.value}>Карта зарплатная</Text>
      </View>
      <View style={styles.elem}>
        <Text style={styles.title}>Телефон получателя</Text>
        <Text style={styles.value}>{route.params.phone}</Text>
      </View>
      <View style={styles.elem}>
        <Text style={styles.title}>Мобильный оператор</Text>
        <Text style={styles.value}>
          {
            services.find(
              ({ serviceId }) => serviceId === route.params.serviceId,
            )!.serviceName
          }
        </Text>
      </View>
      <View style={styles.elem}>
        <Text style={styles.title}>Имя получателя</Text>
        <Text style={styles.value}>Денис Гладкий</Text>
      </View>
      <View style={styles.elem}>
        <Text style={styles.title}>Сумма платежа</Text>
        <Text style={styles.value}>{route.params.amount} ₽</Text>
      </View>
      <View style={styles.elem}>
        <Text style={styles.title}>Кешбек</Text>
        <Text style={styles.value}>
          {(route.params.amount * 0.1).toFixed(2)} ₽
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={confirmTransaction}>
          <Text style={styles.button_text}>Продолжить</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkWrapper} onPress={openLink}>
          <Text style={styles.link}>
            Нажимая «Подтвердить», вы соглашаетесь с условиями проведения
            операции
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ItemSeparatorComponent = () => <View style={styles.divider} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.palette.background.secondary,
  },
  divider: {
    width: '90%',
    backgroundColor: darkTheme.palette.content.primary,
    marginLeft: '5%',
    height: 1,
  },
  elem: {
    padding: 8,
    paddingHorizontal: 0,
    marginHorizontal: 16,
    marginVertical: 9,
    borderBottomWidth: 1,
    borderColor: darkTheme.palette.content.secondary, // Цвет границы
    borderStyle: 'dashed', // Стиль границы - пунктирная
  },
  title: {
    fontSize: 13,
    color: darkTheme.palette.text.tertiary,
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    color: darkTheme.palette.text.primary,
  },
  footer: {
    flexGrow: 2,
    padding: 16,
    justifyContent: 'flex-end',
    gap: 24,
  },
  button: {
    width: '100%',
    padding: 20,
    paddingHorizontal: 0,
    borderRadius: 26,
    backgroundColor: darkTheme.palette.accent.primary,
  },
  button_text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 600,
    color: darkTheme.palette.text.primary,
  },
  linkWrapper: {},
  link: {
    width: '100%',
    textAlign: 'center',
    color: darkTheme.palette.text.secondary,
    textDecorationLine: 'underline',
  },
})
