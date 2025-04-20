import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { darkTheme } from '@shared/ui/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const homeTabsOptions = (): BottomTabNavigationOptions => {
  const insets = useSafeAreaInsets();

  return {
    tabBarInactiveTintColor: darkTheme.palette.text.secondary,
    tabBarLabelStyle: {
      fontFamily: darkTheme.typography.caption2.fontFamily,
      fontSize: parseInt(darkTheme.typography.caption2.size),
      lineHeight: parseInt(darkTheme.typography.caption2.lineHeight),
      letterSpacing: parseInt(darkTheme.typography.caption2.letterSpacing),
    },
    tabBarStyle: {
      paddingTop: 11,
      paddingBottom: 6 + insets.bottom,
      height: darkTheme.spacing(7) + insets.bottom,
    },
  };
};
