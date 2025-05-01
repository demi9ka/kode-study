import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator/types'
import { OtpConnector } from '@features/otp'

type Props = StackScreenProps<RootStackParamsList, 'otp'>

export const OtpScreen = ({ route, navigation }: Props) => {
  const goToTop = () => {
    navigation.popToTop()
  }
  return <OtpConnector goToTop={goToTop} {...route.params} />
}
