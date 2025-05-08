import { PinCodeVariantType } from '@features/pin-code/types'
import { Skip } from './skip'
import { RootStackParamsList } from '@app/navigation/navigators/root-navigator'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  variant: PinCodeVariantType
  navigation: StackNavigationProp<RootStackParamsList, 'pinCode', undefined>
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
