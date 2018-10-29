import { GetterTree, Getter } from 'vuex';
import { State } from './index';

const appBar: Getter<State, any> = (state: State) => state.appBar;
const colors: Getter<State, any> = (state: State) => state.colors;

const getterTree: GetterTree<State, any> = {
  appBar,
  colors,
};

export default getterTree;
