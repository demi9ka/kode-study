import { Icon1Internet, Icon1JKH, Icon1Mobile } from '@shared/ui/icons'
import { ListItem } from '@shared/ui/molecules/list-item'
import { useTheme } from '@shared/ui/theme'
import { View } from 'react-native'
import { styled } from '@shared/ui/theme'

const IconWrapper = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.content.secondary};
`

type Props = {
  onPressMobile: VoidFunction
  onPressJKH: VoidFunction
  onPressInternet: VoidFunction
}

export const List = ({ onPressInternet, onPressJKH, onPressMobile }: Props) => {
  const theme = useTheme()
  return (
    <View>
      <ListItem
        content={'Мобильная связь'}
        leftSection={
          <IconWrapper>
            <Icon1Mobile size={23} color={theme.palette.button.primary} />
          </IconWrapper>
        }
        hasLine
        onPress={onPressMobile}
      />
      <ListItem
        content={'ЖКХ'}
        onPress={onPressJKH}
        leftSection={
          <IconWrapper>
            <Icon1JKH size={23} color={theme.palette.button.primary} />
          </IconWrapper>
        }
        hasLine={true}
      />
      <ListItem
        content={'Интернет'}
        onPress={onPressInternet}
        leftSection={
          <IconWrapper>
            <Icon1Internet size={23} color={theme.palette.button.primary} />
          </IconWrapper>
        }
      />
    </View>
  )
}
