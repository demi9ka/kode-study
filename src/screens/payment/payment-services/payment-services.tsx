import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { KeyboardView } from '@shared/ui/templates'
import { darkTheme } from '@shared/ui/theme'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ListRenderItem,
  RefreshControl,
  ActivityIndicator,
  TextInput,
} from 'react-native'
import { services } from './constants'
import { TServiceItem } from './types'
import { useState } from 'react'
import { IconSearch } from '@shared/ui/icons'

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>

export const PaymentServices = ({ navigation }: PaymentServicesProps) => {
  const isLoading = false
  const [search, setSearch] = useState('')

  const openCreate = (serviceId: string, title: string) => {
    navigation.navigate('paymentCreate', { serviceId, title })
  }

  const renderItem: ListRenderItem<TServiceItem> = ({
    item: { serviceId, serviceIcon, serviceName },
  }) => {
    return (
      <TouchableOpacity
        style={styles.serviceWrapper}
        onPress={() => openCreate(serviceId, serviceName)}>
        <Image style={{ width: 40, height: 40 }} source={serviceIcon} />
        <Text style={{ color: darkTheme.palette.text.primary, fontSize: 15 }}>
          {serviceName}
        </Text>
      </TouchableOpacity>
    )
  }

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <KeyboardView>
      <View style={styles.wrapper}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {}}
              tintColor='white'
            />
          }
          data={services.filter(({ serviceName }) =>
            serviceName.toUpperCase().includes(search.toUpperCase()),
          )}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyExtractor={keyExtractor}
          initialNumToRender={25}
          keyboardShouldPersistTaps='handled'
          ListHeaderComponent={
            <View style={styles.inputWrapper}>
              <IconSearch
                size={24}
                color={darkTheme.palette.content.tertiary}
              />
              <TextInput
                placeholder='Поиск'
                placeholderTextColor={darkTheme.palette.text.tertiary}
                style={styles.input}
                value={search}
                onChangeText={setSearch}
                keyboardAppearance='dark'
              />
            </View>
          }
          ListHeaderComponentStyle={styles.header}
        />
      </View>
    </KeyboardView>
  )
}

const keyExtractor = (item: TServiceItem) => item.serviceId

const ItemSeparatorComponent = () => (
  <View
    style={{
      width: '100%',
      paddingLeft: '5%',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
    <View style={styles.divider} />
  </View>
)

const styles = StyleSheet.create({
  header: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: darkTheme.palette.background.primary,
  },
  input: {
    color: 'white',
    fontSize: 15,
    flexGrow: 2,
  },

  inputWrapper: {
    flexDirection: 'row',
    padding: 6,
    paddingLeft: 8,
    alignItems: 'center',
    paddingRight: 8,
    backgroundColor: darkTheme.palette.content.secondary,
    borderRadius: 8,
    gap: 4,
  },
  wrapper: { flex: 1, backgroundColor: darkTheme.palette.background.secondary },
  serviceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    paddingTop: 14,
    paddingBottom: 14,
  },
  divider: {
    width: '95%',
    backgroundColor: darkTheme.palette.content.secondary,
    height: 1,
  },
})
