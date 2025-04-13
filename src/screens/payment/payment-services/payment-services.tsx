import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { KeyboardView } from '@shared/ui/templates'
import { darkTheme } from '@shared/ui/theme'
import {
  View,
  Image,
  FlatList,
  ListRenderItem,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'
import { services } from './constants'
import { TServiceItem } from './types'
import { useState } from 'react'
import { IconSearch } from '@shared/ui/icons'
import { ListItem } from '@shared/ui/molecules/list-item'
import styled from 'styled-components'
import { Input } from '@shared/ui/molecules'
import { Line } from '@shared/ui/atoms'

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`
const Header = styled(View)`
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-top: 0;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

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
      <ListItem
        content={serviceName}
        leftSection={
          <Image style={{ width: 40, height: 40 }} source={serviceIcon} />
        }
        onPress={() => openCreate(serviceId, serviceName)}
        useLine={true}
      />
    )
  }

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <KeyboardView>
      <Wrapper>
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
          ItemSeparatorComponent={separatorLine}
          keyExtractor={keyExtractor}
          initialNumToRender={25}
          keyboardShouldPersistTaps='handled'
          ListHeaderComponent={
            <Header>
              <Input
                value={search}
                onChangeText={setSearch}
                leftSection={
                  <IconSearch
                    size={24}
                    color={darkTheme.palette.content.tertiary}
                  />
                }
                placeholder='Поиск'
              />
            </Header>
          }
        />
      </Wrapper>
    </KeyboardView>
  )
}

const keyExtractor = (item: TServiceItem) => item.serviceId

const separatorLine = () => <Line marginHorizontal={9} />
