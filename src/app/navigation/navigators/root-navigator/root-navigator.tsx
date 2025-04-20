import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { rootStackOptions } from './config'
import { HomeTabNavigatorConnector } from '../home-tabs-navigator'
import {
  PaymentConfirmScreen,
  PaymentCreateScreen,
  PaymentServicesScreen,
  PaymentSuccessScreen,
} from './screens'

const RootStack = createStackNavigator<RootStackParamsList>()

export const RootNavigator = () => {
  const isAuth = true

  return (
    <RootStack.Navigator
      initialRouteName='HomeTabs'
      screenOptions={rootStackOptions}>
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
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
      <RootStack.Screen
        name='paymentConfirm'
        component={PaymentConfirmScreen}
        options={{ headerTitle: 'Подтверждение' }}
      />
      <RootStack.Screen
        name='paymentSuccess'
        component={PaymentSuccessScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}
