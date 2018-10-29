import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

Vue.use(Vuex);

export interface AppBar {
  clipped: boolean;
  title: string;
  tabs: Array<object | null>;
}

export interface State {
  appBar: AppBar;
  colors: string[];
}

const initState: State = {
  appBar: {
    clipped: false,
    title: 'PyTeam',
    tabs: [
      { name: 'about', path: '/' },
      { name: 'team', path: '/team' },
      { name: 'services', path: '/services' },
      { name: 'portfolio', path: '/portfolio' },
      { name: 'blog', path: '/blog' },
      { name: 'contact', path: '/contact' },
    ],
  },
  colors: [
    'hsla(270, 50%, 40%, 1)',
    'hsla(35, 100%, 67%, 1)',
    'hsla(48, 86%, 72%, 1)',
    'hsla(11, 100%, 87%, 1)',
    'hsla(176, 100%, 44%, 1)',
    'hsla(171, 44%, 69%, 1)',
  ],
};

export default new Vuex.Store({
  getters,
  state: initState,
});
