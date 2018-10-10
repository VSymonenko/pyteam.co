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
}

const initState: State = {
  appBar: {
    clipped: false,
    title: 'PyTeam',
    tabs: [
      { name: 'About', link: '/' },
      { name: 'Team', link: '/team' },
      { name: 'Services', link: '/services' },
      { name: 'Portfolio', link: '/portfolio' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contact', link: '/contact' },
    ],
  },
};

export default new Vuex.Store({
  getters,
  state: initState,
});
