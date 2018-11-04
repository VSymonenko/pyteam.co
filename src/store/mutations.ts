import * as types from './mutations-types';
import { State } from './index';
import { MutationTree } from 'vuex';

const mutations: MutationTree<State> = {
  [types.SET_LANGUAGE](state: State, value: string): void {
    state.language = value;
  },
};

export default mutations;
