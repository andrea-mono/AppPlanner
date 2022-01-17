import React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Card from '@components/Card';
import InputText from '@components/InputText';
import { formatDate } from '@lib/utils';

type Props = {
  show: boolean;
  value: Date;
  onChange: (event: Event, date?: Date) => void;
  onFocus: () => void;
  onTouchCancel: () => void;
};

const TimePicker: React.FC<Props> = props => {
  const time = formatDate(props.value, 'ampm')?.toUpperCase();

  return (
    <Card>
      <InputText icon="bell" value={time} onFocus={props.onFocus} />
      {props.show && (
        <RNDateTimePicker
          mode="time"
          value={props.value}
          onChange={props.onChange}
          onTouchCancel={props.onTouchCancel}
        />
      )}
    </Card>
  );
};

export default TimePicker;
