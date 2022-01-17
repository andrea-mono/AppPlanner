import { initStore } from './index';
import { FormState } from '@interfaces/plan-form';

const initialState: { plans: FormState[] } = {
  plans: [
    {
      id: 1,
      pillsName: 'Oxycodone',
      quantity: '2',
      howLong: '30',
      when: 'Before eating',
      notificationTime: new Date(),
    },
  ],
};

const configureStore = () => {
  const actions = {
    ADD_PLAN: (state: any, plan: FormState) => {
      const newPlan = {
        ...plan,
        id: state.plans.length + 1,
      };

      const updatedPlans = [...state.plans];
      updatedPlans.push(newPlan);

      return {
        plans: updatedPlans,
      };
    },
    REMOVE_PLAN: () => {},
  };

  initStore<typeof actions, typeof initialState>(actions, initialState);
};

export default configureStore;
