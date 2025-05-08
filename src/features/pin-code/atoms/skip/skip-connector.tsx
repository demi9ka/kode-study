import { PinCodeVariantType } from '@features/pin-code/types'
import { Skip } from './skip'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackScreenParams } from '@app/navigation/navigators/auth-stack'

type Props = {
  variant: PinCodeVariantType
  navigation: StackNavigationProp<
    AuthStackScreenParams,
    'authPinCode',
    undefined
  >
}

export const SkipConnector = ({ variant, navigation }: Props) => {
  const onSkip = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'authSuccess' }],
    })
  }
  if (variant === 'write') return <></>
  return <Skip onSkip={onSkip} />
}
