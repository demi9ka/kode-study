import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { PaymentCreate, PaymentServices } from '@screens/payment'
import { rootStackOptions } from './config'
import { HomeTabsNavigation } from '@routing/home-tabs-navigation'

const RootStack = createStackNavigator<RootStackParamsList>()

export const AppNavigation = () => {
  const isAuth = true

  return (
    <RootStack.Navigator
      initialRouteName='HomeTabs'
      screenOptions={rootStackOptions}>
      <RootStack.Screen
        name='HomeTabs'
        component={HomeTabsNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='paymentServices'
        component={PaymentServices}
        options={{ headerTitle: 'Мобильная связь' }}
      />
      <RootStack.Screen
        name='paymentCreate'
        component={PaymentCreate}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </RootStack.Navigator>
  )
}
