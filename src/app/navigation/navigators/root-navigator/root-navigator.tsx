import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { rootStackOptions } from './config'
import { HomeTabNavigatorConnector } from '../home-tabs-navigator'
import {
  AuthPasswordScreen,
  AuthPhoneScreen,
  AuthSetPinCodeScreen,
  OtpScreen,
  PaymentConfirmScreen,
  PaymentCreateScreen,
  PaymentResultScreen,
  PaymentServicesScreen,
  WelcomeScreen,
} from './screens'
import { PinCode } from '@features/pin-code/pin-code'
import { PinCodeScreen } from './screens/pin-code-screen'
import { AuthSuccessScreen } from './screens/auth-success-screen'

const RootStack = createStackNavigator<RootStackParamsList>()

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName='welcome'
      screenOptions={rootStackOptions}>
      <RootStack.Screen
        name='welcome'
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='HomeTabs'
        component={HomeTabNavigatorConnector}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='paymentServices'
        component={PaymentServicesScreen}
        options={{ headerTitle: 'Мобильная связь' }}
      />
      <RootStack.Screen
        name='paymentCreate'
        component={PaymentCreateScreen}
        options={({ route }) => ({ headerTitle: route.params.name })}
      />
      <RootStack.Screen
        name='paymentConfirm'
        component={PaymentConfirmScreen}
        options={{ headerTitle: 'Подтверждение' }}
      />
      <RootStack.Screen
        name='paymentResult'
        component={PaymentResultScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='authPhone'
        component={AuthPhoneScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='authPassword'
        component={AuthPasswordScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='authSetPinCode'
        component={AuthSetPinCodeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='pinCode'
        component={PinCodeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='authSuccess'
        component={AuthSuccessScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='otp'
        component={OtpScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}
