import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  reward: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  rewardAvatar: {
    marginRight: 16
  },

  rewardContent: {
    flex: 1
  },

  rewardMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    color: '#000'
  },

  rewardAction: {
    marginTop: 4,
    color: '#AEAEAE',
    fontSize: 12
  },

  rewardDate: {
    color: '#AEAEAE',
    fontSize: 12
  }
});
