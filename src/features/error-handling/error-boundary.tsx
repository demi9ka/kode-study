import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',

    padding: 4,
  },

  text: {
    color: '#ffffff',
  },
});

export class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean; purged: boolean }
> {
  state = {
    hasError: false,
    purged: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log('error', error);
    this.setState({ hasError: true });
    if (!this.state.purged) {
      setTimeout(() => this.setState({ hasError: false, purged: true }), 1000);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.root}>
          <Text style={styles.text}>
            Что-то пошло не так! Перезагрузите приложение!
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}
