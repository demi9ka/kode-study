import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { rootStackOptions } from './config'
import { HomeTabNavigatorConnector } from '../home-tabs-navigator'
import {
  PaymentConfirmScreen,
  PaymentCreateScreen,
  PaymentResultScreen,
  PaymentServicesScreen,
} from './screens'
import { OtpConnector } from '@features/otp'
import { WelcomeScreen } from './screens/welcome-screen'
import { AuthPhoneScreen } from './screens/auth-phone-screen'

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
        name='paymentOtp'
        component={OtpConnector}
        options={{ headerShown: false }}
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
    </RootStack.Navigator>
  )
}
