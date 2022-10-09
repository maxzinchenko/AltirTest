import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rewardsHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  rewardsHeaderAvatar: {
    marginRight: 16,
    width: 48,
    height: 48,
    borderRadius: 24
  },

  rewardsHeaderContent: {
    flex: 1
  },

  rewardsHeaderName: {
    fontSize: 16
  },

  rewardsHeaderStats: {
    marginTop: 4,
    fontSize: 14
  }
});
