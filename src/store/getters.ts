import { GetterTree, Getter } from 'vuex';
import { State } from './index';

const appBar: Getter<State, any> = (state: State) => state.appBar;

const getterTree: GetterTree<State, any> = {
  appBar,
};

export default getterTree;
