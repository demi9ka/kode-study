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
import { IconSearch } from '@shared/ui/icons'
import { ListItem } from '@shared/ui/molecules/list-item'
import { styled } from '@shared/ui/theme'
import { Input } from '@shared/ui/atoms'
import { Line } from '@shared/ui/atoms'
import { TPaymentService } from './types'

type Props = {
  servicesData: TPaymentService[]
  search: string
  setSearch: (v: string) => void
  openCreate: (id: string) => void
  isLoading: boolean
  onRefresh: VoidFunction
}
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

export const PaymentServices = ({
  isLoading,
  openCreate,
  search,
  servicesData,
  setSearch,
  onRefresh,
}: Props) => {
  const theme = useTheme()

  const renderItem: ListRenderItem<TPaymentService> = ({
    item: { icon, id, name },
  }) => {
    return (
      <ListItem
        content={name}
        leftSection={<ListItemImage src={icon} />}
        onPress={() => openCreate(id)}
      />
    )
  }

  if (isLoading) {
    return (
      <Wrapper>
        <ActivityIndicator />
      </Wrapper>
    )
  }

  return (
    <KeyboardView>
      <Wrapper>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={onRefresh}
              tintColor='white'
            />
          }
          data={servicesData}
          renderItem={renderItem}
          ItemSeparatorComponent={separatorLine}
          keyExtractor={keyExtractor}
          initialNumToRender={25}
          keyboardShouldPersistTaps='handled'
          ListHeaderComponent={
            <Header>
              <Input
                value={search}
                onChange={setSearch}
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

const keyExtractor = (item: TPaymentService) => item.id

const separatorLine = () => <Line marginHorizontal={9} />
