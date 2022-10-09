import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';

import { allowedRewardsAmountState } from '../../../store/Rewards/rewardsSelectors';
import { useCreateRewardAction } from '../../../store/Rewards/rewardsActions';
import { InputComponent } from '../../../components/Input/InputComponent';
import { RewardsCreateView } from '../views/Create/RewardsCreateView';

type State = {
  value: string;
  error: null | string;
};

const initialState: State = { value: '', error: null };

const receiverRegExp = new RegExp(/^[a-zA-Z\s]*$/);

export const RewardsCreateContainer = () => {
  const { goBack } = useNavigation();

  const [receiver, setReceiver] = useState(initialState);
  const [amount, setAmount] = useState(initialState);
  const [message, setMessage] = useState(initialState);

  const allowedAmount = useRecoilValue(allowedRewardsAmountState);

  const createReward = useCreateRewardAction();

  const disabled = useMemo(() => {
    return Boolean(
      !receiver.value || !amount.value || !message.value || receiver.error || amount.error || message.error
    );
  }, [receiver, amount, message]);

  const handleReceiverChange = useCallback((value: string) => {
    const error = value.length && !receiverRegExp.test(value) ? 'Invalid receiver name' : null;

    setReceiver({ value, error });
  }, []);

  const handleAmountChange = useCallback(
    (value: string) => {
      const replacedValue = value.replace(/[,.]/, '');
      const error =
        replacedValue.length && allowedAmount < Number(replacedValue)
          ? `Max allowed amount is $${allowedAmount}`
          : null;

      setAmount({ value: replacedValue, error });
    },
    [allowedAmount]
  );

  const handleMessageChange = useCallback((value: string) => {
    const error = value.length > 150 ? `Message is too long (${value.length} / 150)` : null;

    setMessage({ value, error });
  }, []);

  const handleCreatePress = useCallback(() => {
    if (disabled) return;

    createReward({ receiver: receiver.value, amount: amount.value, message: message.value });
    goBack();
  }, [disabled, receiver.value, amount.value, message.value]);

  return (
    <RewardsCreateView disabled={disabled} handleCreatePress={handleCreatePress}>
      <InputComponent
        label="To"
        placeholder="Enter employee name"
        value={receiver.value}
        error={receiver.error}
        handleTextChange={handleReceiverChange}
      />

      <InputComponent
        label="Amount"
        placeholder="Enter amount"
        value={amount.value}
        error={amount.error}
        keyboardType="number-pad"
        handleTextChange={handleAmountChange}
      />

      <InputComponent
        label="Message"
        placeholder="Enter message"
        value={message.value}
        error={message.error}
        multiline
        numberOfLines={4}
        handleTextChange={handleMessageChange}
      />
    </RewardsCreateView>
  );
};
