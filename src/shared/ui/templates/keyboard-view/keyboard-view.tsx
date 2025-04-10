import { useHeaderHeight } from '@react-navigation/elements'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'

type TKeyboardViewProps = {
  children: React.ReactNode
}

export const KeyboardView = ({ children }: TKeyboardViewProps) => {
  const headerHeight = useHeaderHeight()

  return (
    <KeyboardAvoidingView
      style={styles.root}
      contentContainerStyle={styles.root}
      enabled={Platform.OS == 'ios'}
      behavior='padding'
      keyboardVerticalOffset={headerHeight || 0}>
      {children}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
