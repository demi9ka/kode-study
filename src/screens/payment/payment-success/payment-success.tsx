import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { Images } from '@shared/ui/images'
import { darkTheme } from '@shared/ui/theme'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet, Image } from 'react-native'

export type PaymentSuccessProps = StackScreenProps<
  RootStackParamsList,
  'paymentSuccess'
>

export const PaymentSuccess = ({ navigation, route }: PaymentSuccessProps) => {
  const backToMenu = () => {
    navigation.popToTop()
  }

  return (
    <View style={styles.container}>
      <View style={styles.noteWrapper}>
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={Images.successTransaction}
        />
        <Text
          style={{
            fontSize: 17,
            paddingTop: 16,
            paddingBottom: 8,
            color: darkTheme.palette.text.tertiary,
          }}>
          Оплачено
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: darkTheme.palette.text.primary,
          }}>
          {new Intl.NumberFormat('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(route.params.amount)}
          {' ₽'}
        </Text>
      </View>
      <View
        style={{
          padding: 16,
          paddingBottom: 24,
        }}>
        <TouchableOpacity style={styles.button} onPress={backToMenu}>
          <Text style={styles.buttonText}>Готово</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.palette.background.secondary,
  },
  noteWrapper: {
    alignItems: 'center',
    flexGrow: 2,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    padding: 20,
    paddingHorizontal: 0,

    borderRadius: 26,
    backgroundColor: darkTheme.palette.accent.primary,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 600,
    color: darkTheme.palette.text.primary,
  },
})
