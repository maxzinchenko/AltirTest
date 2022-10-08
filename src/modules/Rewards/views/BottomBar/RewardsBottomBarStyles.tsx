import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  floatingActionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 16,
    bottom: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#000'
  },

  floatingActionButtonTitle: {
    fontSize: 24,
    color: '#FFF'
  }
});
