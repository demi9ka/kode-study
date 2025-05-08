import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { rootStackOptions } from './config'
import { HomeTabNavigatorConnector } from '../home-tabs-navigator'
import {
  PaymentConfirmScreen,
  PaymentCreateScreen,
  PaymentResultScreen,
  PaymentServicesScreen,
  PaymentOtpScreen,
} from './screens'
import { AuthNavigatorConnector } from '../auth-stack'

const RootStack = createStackNavigator<RootStackParamsList>()

type Props = {
  isAuth: boolean
}

export const RootNavigator = ({ isAuth }: Props) => {
  return (
    <RootStack.Navigator
      initialRouteName={isAuth ? 'HomeTabs' : 'AuthStack'}
      screenOptions={rootStackOptions}>
      {isAuth ? (
        <>
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
            name='paymentOtp'
            component={PaymentOtpScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <RootStack.Screen
          name='AuthStack'
          component={AuthNavigatorConnector}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  )
}
