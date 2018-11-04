import { Action, ActionTree } from 'vuex';
import { State } from './index';

const setLanguage: Action<State, any> =  (store: any, value: string) => {
  store.commit('SET_LANGUAGE', value);
};

const actions: ActionTree<State, any> = {
  setLanguage,
};

export default actions;
