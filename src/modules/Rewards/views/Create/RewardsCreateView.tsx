import React, { FC, ReactNode } from 'react';
import { ScrollView, View } from 'react-native';

import { ButtonComponent } from '../../../../components/Button/ButtonComponent';

import { styles } from './RewardsCreateStyles';

type Props = {
  disabled: boolean;
  children: ReactNode | ReactNode[];
  handleCreatePress: () => void;
};

export const RewardsCreateView: FC<Props> = ({
  children,
  disabled,
  handleCreatePress
}) => (
  <ScrollView>
    {children}

    <View style={styles.createButtonWrapper}>
      <ButtonComponent
        disabled={disabled}
        onPress={handleCreatePress}
        onLongPress={handleCreatePress}
      >
        Add
      </ButtonComponent>
    </View>
  </ScrollView>
);
