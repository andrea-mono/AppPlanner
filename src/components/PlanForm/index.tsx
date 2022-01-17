import React, { useReducer, useState } from 'react';
import { styles } from './style';
import { Alert, View } from 'react-native';
import AppText from '@components/AppText';
import InputText from '@components/InputText';
import IconButton from '@components/IconButton';
import AppButton from '@components/AppButton';
import TimePicker from '@components/TimePicker';

const initialState: formState = {
  pillsName: '',
  quantity: '1',
  howLong: '30',
  when: '',
  notificationTime: new Date(),
};

type formState = {
  pillsName: string;
  quantity: string;
  howLong: string;
  when: string;
  notificationTime: Date;
};

type formAction = {
  type:
    | 'SET_PILLS_NAME'
    | 'SET_PILLS_QTY'
    | 'SET_PILLS_HOW_LONG'
    | 'SET_PILLS_TIME'
    | 'SET_PILLS_NOTIFICATION_TIME';
  payload: any;
};

const formReducer = (state: formState, action: formAction) => {
  switch (action.type) {
    case 'SET_PILLS_NAME':
      return {
        ...state,
        pillsName: action.payload,
      };
    case 'SET_PILLS_QTY':
      return {
        ...state,
        quantity: action.payload,
      };
    case 'SET_PILLS_HOW_LONG':
      return {
        ...state,
        howLong: action.payload,
      };
    case 'SET_PILLS_TIME':
      return {
        ...state,
        when: action.payload,
      };
    case 'SET_PILLS_NOTIFICATION_TIME': {
      return {
        ...state,
        notificationTime: action.payload,
      };
    }
    default:
      return initialState;
  }
};

const PlanForm = () => {
  const [form, dispatchForm] = useReducer(formReducer, initialState);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const validateForm = () => {
    let isValid = true;
    Object.keys(form).forEach(key => {
      if (!form[key as keyof formState]) {
        isValid = false;
      }
    });
    return isValid;
  };

  const setNotificationTimeHandler = (date: Date) => {
    setShowTimePicker(false);
    dispatchForm({
      type: 'SET_PILLS_NOTIFICATION_TIME',
      payload: date,
    });
  };

  const submitHandler = () => {
    if (!validateForm()) {
      Alert.alert('Error', 'Complete all required fields.', [{ text: 'OK' }]);
      return;
    }
    console.log(form);
  };

  return (
    <View style={styles.form}>
      <View style={styles.field}>
        <AppText style={styles.fieldTitle}>Pills name</AppText>
        <InputText
          icon="pills"
          value={form.pillsName}
          placeholder="Pills name"
          onChangeText={text =>
            dispatchForm({ type: 'SET_PILLS_NAME', payload: text })
          }
        />
      </View>
      <View style={styles.field}>
        <AppText style={styles.fieldTitle}>Amount & How Long?</AppText>
        <View style={styles.flexRow}>
          <InputText
            icon="pills"
            style={styles.flex}
            value={form.quantity}
            onChangeText={text =>
              dispatchForm({ type: 'SET_PILLS_QTY', payload: text })
            }
            keyboardType="numeric"
          />
          <View style={styles.divider} />
          <InputText
            icon="calendar"
            style={styles.flex}
            value={form.howLong}
            onChangeText={text =>
              dispatchForm({ type: 'SET_PILLS_HOW_LONG', payload: text })
            }
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.field}>
        <AppText style={styles.fieldTitle}>Food & Pills</AppText>
        <View style={styles.flexRow}>
          <IconButton
            type="secondary"
            icon="beforeEating"
            fit
            focused={form.when === 'Before Eating'}
            onPress={() =>
              dispatchForm({
                type: 'SET_PILLS_TIME',
                payload: 'Before Eating',
              })
            }
          />
          <View style={styles.divider} />
          <IconButton
            type="secondary"
            icon="duringEating"
            fit
            focused={form.when === 'During Eating'}
            onPress={() =>
              dispatchForm({
                type: 'SET_PILLS_TIME',
                payload: 'During Eating',
              })
            }
          />
          <View style={styles.divider} />
          <IconButton
            type="secondary"
            icon="afterEating"
            fit
            focused={form.when === 'After Eating'}
            onPress={() =>
              dispatchForm({
                type: 'SET_PILLS_TIME',
                payload: 'After Eating',
              })
            }
          />
        </View>
      </View>
      <View style={styles.field}>
        <AppText style={styles.fieldTitle}>Notification</AppText>
        <TimePicker
          show={showTimePicker}
          value={form.notificationTime}
          onChange={date => setNotificationTimeHandler(date)}
          onCancel={() => setShowTimePicker(false)}
          onFocus={() => setShowTimePicker(true)}
        />
      </View>
      <AppButton type="primary" title="Done" onPress={submitHandler} />
    </View>
  );
};
export default PlanForm;
