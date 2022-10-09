import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  floatingActionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 16,
    bottom: 32,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#000'
  },

  floatingActionButtonTitle: {
    fontSize: 32,
    color: '#FFF'
  }
});
