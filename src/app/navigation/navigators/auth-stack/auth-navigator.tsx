import { createStackNavigator } from '@react-navigation/stack'
import { authStackOption } from './config'
import {
  AuthPasswordScreen,
  AuthPhoneScreen,
  AuthSetPinCodeScreen,
  AuthPinCodeScreen,
  AuthSuccessScreen,
  AuthOtpScreen,
  AuthWelcomeScreen,
} from './screens'
import { SkipConnector } from '@features/pin-code/atoms/skip/skip-connector'
import { AuthStackScreenParams } from './types'

const AuthStack = createStackNavigator<AuthStackScreenParams>()

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='authWelcome'
      screenOptions={authStackOption}>
      <AuthStack.Screen
        name='authWelcome'
        component={AuthWelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='authPhone'
        component={AuthPhoneScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='authPassword'
        component={AuthPasswordScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='authSetPinCode'
        component={AuthSetPinCodeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='authPinCode'
        component={AuthPinCodeScreen}
        options={({ route, navigation }) => ({
          title: 'Код',
          headerLeft: () => (
            <SkipConnector
              navigation={navigation}
              variant={route.params.variant}
            />
          ),
        })}
      />
      <AuthStack.Screen
        name='authSuccess'
        component={AuthSuccessScreen}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name='authOtp'
        component={AuthOtpScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}
