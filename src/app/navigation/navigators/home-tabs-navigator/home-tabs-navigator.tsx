import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { homeTabsOptions } from './config'
import { HomeTabsParamsList } from './types'
import {
  IconBank,
  IconCamera1,
  IconMainProduct,
  IconPayment,
} from '@shared/ui/icons'
import { StatusBar } from 'react-native'
import { useTheme } from '@shared/ui/theme'
import { HomeScreen, PaymentScreen, ProfileScreen } from './screens'
import { BankConnector } from '@screens/bank'

const HomeTabs = createBottomTabNavigator<HomeTabsParamsList>()

export const HomeTabsNavigator = () => {
  const theme = useTheme()
  return (
    <>
      <StatusBar
        backgroundColor={theme.palette.background.primary}
        barStyle='dark-content'
      />
      <HomeTabs.Navigator
        initialRouteName='HomeMain'
        screenOptions={homeTabsOptions()}>
        <HomeTabs.Screen
          options={{
            title: 'Главная',
            tabBarIcon: IconMainProduct,
          }}
          name='HomeMain'
          component={HomeScreen}
        />
        <HomeTabs.Screen
          options={{
            headerShown: false,
            title: 'Платежи',
            tabBarIcon: IconPayment,
          }}
          name='PaymentMain'
          component={PaymentScreen}
        />
        <HomeTabs.Screen
          options={{
            title: 'Банкоматы',
            tabBarIcon: IconBank,
          }}
          name='BankMain'
          component={BankConnector}
        />
        <HomeTabs.Screen
          options={{
            title: 'Профиль',
            tabBarIcon: IconCamera1,
          }}
          name='ProfileMain'
          component={ProfileScreen}
        />
      </HomeTabs.Navigator>
    </>
  )
}
