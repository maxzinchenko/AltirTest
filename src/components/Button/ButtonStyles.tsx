import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#000'
  },

  buttonDisabled: {
    opacity: 0.35
  },

  buttonText: {
    fontSize: 16,
    color: '#FFF'
  }
});
