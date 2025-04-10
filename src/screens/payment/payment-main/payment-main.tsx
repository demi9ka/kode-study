import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { Icon1Internet, Icon1JKH, Icon1Mobile } from '@shared/ui/icons'
import { darkTheme } from '@shared/ui/theme'
// import { HomeTabsParamsList } from '@routing/home-tabs-navigation'
// import { KeyboardView } from '@shared/ui/templates'
// import { darkTheme } from '@shared/ui/theme'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'

export type PaymentMainProps = StackScreenProps<RootStackParamsList, 'HomeTabs'>

export const PaymentMain = ({ navigation }: PaymentMainProps) => {
  const openServices = () => {
    navigation.navigate('paymentServices')
  }
  const openCreate = (serviceId: string, title: string) => {
    navigation.navigate('paymentCreate', { serviceId, title })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: darkTheme.palette.text.primary,
            fontSize: 34,
            fontWeight: 700,
          }}>
          Платежи
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={openServices}>
        <View style={styles.icon_wrapper}>
          <Icon1Mobile size={23} color={darkTheme.palette.button.primary} />
        </View>
        <Text style={{ fontSize: 15, color: darkTheme.palette.text.primary }}>
          Мобильная связь
        </Text>
      </TouchableOpacity>
      <ItemSeparatorComponent />
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon_wrapper}>
          <Icon1JKH size={23} color={darkTheme.palette.button.primary} />
        </View>
        <Text style={{ fontSize: 15, color: darkTheme.palette.text.primary }}>
          ЖКХ
        </Text>
      </TouchableOpacity>
      <ItemSeparatorComponent />
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon_wrapper}>
          <Icon1Internet size={23} color={darkTheme.palette.button.primary} />
        </View>
        <Text style={{ fontSize: 15, color: darkTheme.palette.text.primary }}>
          Интернет
        </Text>
      </TouchableOpacity>
      <ItemSeparatorComponent />
    </View>
  )
}

const ItemSeparatorComponent = () => <View style={styles.divider} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.palette.background.secondary,
  },
  header: {
    justifyContent: 'flex-end',
    backgroundColor: darkTheme.palette.background.primary,
    padding: 16,
    height: 100,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    padding: 14,
  },
  icon_wrapper: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkTheme.palette.content.secondary,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: darkTheme.palette.content.secondary,
  },
})
