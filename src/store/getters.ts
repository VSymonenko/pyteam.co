import { GetterTree, Getter } from 'vuex';
import { State } from './index';

const appBar: Getter<State, any> = (state: State) => state.appBar;
const colors: Getter<State, any> = (state: State) => state.colors;
const language: Getter<State, any> = (state: State) => state.language;
const languages: Getter<State, any> = (state: State) => state.languages;
const aboutWorks: Getter<State, any> = (state: State) => state.aboutWorks;

const getterTree: GetterTree<State, any> = {
  appBar,
  colors,
  language,
  languages,
  aboutWorks,
};

export default getterTree;
