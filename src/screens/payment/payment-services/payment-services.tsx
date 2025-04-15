import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamsList } from '@routing/app-navigation/types'
import { KeyboardView } from '@shared/ui/templates'
import { useTheme } from '@shared/ui/theme'
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
import { styled } from '@shared/ui/theme'
import { Input } from '@shared/ui/atoms'
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
const ListItemImage = styled(Image)`
  width: ${({ theme }) => theme.spacing(5)}px;
  height: ${({ theme }) => theme.spacing(5)}px;
`

export const PaymentServices = ({ navigation }: PaymentServicesProps) => {
  const isLoading = false
  const [search, setSearch] = useState('')
  const theme = useTheme()
  const openCreate = (serviceId: string, title: string) => {
    navigation.navigate('paymentCreate', { serviceId, title })
  }

  const renderItem: ListRenderItem<TServiceItem> = ({
    item: { serviceId, serviceIcon, serviceName },
  }) => {
    return (
      <ListItem
        content={serviceName}
        leftSection={<ListItemImage source={serviceIcon} />}
        onPress={() => openCreate(serviceId, serviceName)}
        hasLine
      />
    )
  }

  if (isLoading) {
    return <ActivityIndicator />
  }
  const services_data = services.filter(({ serviceName }) =>
    serviceName.toUpperCase().includes(search.toUpperCase()),
  )

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
          data={services_data}
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
                    color={theme.palette.content.tertiary}
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
