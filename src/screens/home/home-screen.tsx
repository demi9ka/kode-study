import { Typography } from '@shared/ui/atoms'
import { useTheme } from '@shared/ui/theme'
import { View } from 'react-native'

export const HomeScreen = () => {
  const theme = useTheme()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.primary,
      }}>
      <Typography variant='largeTitle'>Home</Typography>
    </View>
  )
}
