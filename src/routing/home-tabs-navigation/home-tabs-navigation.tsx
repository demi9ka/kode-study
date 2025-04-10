import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { homeTabsOptions } from './config'
import { HomeTabsParamsList } from './types'

import { HomeMain } from '@screens/home'
import { BankMain } from '@screens/bank'
import { ProfileMain } from '@screens/profile'
import {
  IconBank,
  IconCamera1,
  IconMainProduct,
  IconPayment,
} from '@shared/ui/icons'
import { PaymentMain } from '@screens/payment/payment-main'
import { StatusBar } from 'react-native'
import { darkTheme } from '@shared/ui/theme'

const HomeTabs = createBottomTabNavigator<HomeTabsParamsList>()

export const HomeTabsNavigation = () => {
  return (
    <>
      <StatusBar
        backgroundColor={darkTheme.palette.background.primary}
        barStyle='light-content'
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
          component={HomeMain}
        />
        <HomeTabs.Screen
          options={{
            headerShown: false,
            title: 'Платежи',
            tabBarIcon: IconPayment,
          }}
          name='PaymentMain'
          component={PaymentMain}
        />
        <HomeTabs.Screen
          options={{
            title: 'Банкоматы',
            tabBarIcon: IconBank,
          }}
          name='BankMain'
          component={BankMain}
        />
        <HomeTabs.Screen
          options={{
            title: 'Профиль',
            tabBarIcon: IconCamera1,
          }}
          name='ProfileMain'
          component={ProfileMain}
        />
      </HomeTabs.Navigator>
    </>
  )
}
