import React, { useRef } from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Card from '@components/Card';
import InputText from '@components/InputText';
import { formatDate } from '@lib/utils';
import { TextInput } from 'react-native';

type Props = {
  show: boolean;
  value: Date;
  onChange: (date: Date) => void;
  onCancel: () => void;
  onFocus: () => void;
};

const TimePicker: React.FC<Props> = props => {
  const inputRef = useRef<TextInput | null>(null);
  const time = formatDate(props.value, 'ampm')?.toUpperCase();

  const setTimeHandler = ({ nativeEvent, type }: any) => {
    switch (type) {
      case 'set': {
        props.onChange(nativeEvent.timestamp);
        inputRef.current?.blur();
        return;
      }
      case 'dismissed': {
        props.onCancel();
        inputRef.current?.blur();
        return;
      }
    }
  };

  return (
    <Card>
      <InputText
        ref={inputRef}
        icon="bell"
        value={time}
        onFocus={props.onFocus}
      />
      {props.show && (
        <RNDateTimePicker
          mode="time"
          value={props.value}
          onChange={setTimeHandler}
        />
      )}
    </Card>
  );
};

export default TimePicker;
