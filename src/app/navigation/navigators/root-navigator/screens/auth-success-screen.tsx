import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '..'
import { AuthSuccessConnector } from '@features/auth'

type Props = StackScreenProps<RootStackParamsList, 'authSuccess'>

export const AuthSuccessScreen = ({ navigation }: Props) => {
  const goToHome = () => {
    navigation.replace(
     'HomeTabs', {
        BankMain:undefined,
        HomeMain:undefined,
        PaymentMain: undefined,
        ProfileMain: undefined
     }
    )
  }

  return <AuthSuccessConnector goToHome={goToHome} />
}
