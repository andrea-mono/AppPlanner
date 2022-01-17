export interface FormState {
  id: number;
  pillsName: string;
  quantity: string;
  howLong: string;
  when: string;
  notificationTime: Date;
}

export interface FormAction {
  type:
    | 'SET_PILLS_NAME'
    | 'SET_PILLS_QTY'
    | 'SET_PILLS_HOW_LONG'
    | 'SET_PILLS_TIME'
    | 'SET_PILLS_NOTIFICATION_TIME'
    | 'RESET';
  payload?: any;
}
