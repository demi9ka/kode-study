import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { View } from 'react-native'
import { darkTheme } from '@shared/ui/theme'
import { IconBack } from '@shared/ui/icons'

export const rootStackOptions: StackNavigationOptions = {
  headerTitleStyle: {
    fontFamily: darkTheme.typography.subtitle.fontFamily,
    fontSize: parseInt(darkTheme.typography.subtitle.size),
    lineHeight: parseInt(darkTheme.typography.subtitle.lineHeight),
    letterSpacing: parseInt(darkTheme.typography.subtitle.letterSpacing),
    color: darkTheme.palette.text.primary,
  },
  headerBackImage: () => (
    <View
      style={{
        paddingLeft: darkTheme.spacing(2),
        paddingVertical: darkTheme.spacing(1),
      }}>
      <IconBack color={darkTheme.palette.text.primary} />
    </View>
  ),
  headerBackButtonDisplayMode: 'minimal',
  headerStyle: { backgroundColor: darkTheme.palette.background.primary },
  headerTitleAlign: 'center',
  headerMode: 'screen',
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}
