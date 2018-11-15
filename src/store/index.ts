import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export interface AppBar {
  clipped: boolean;
  title: string;
  tabs: Array<object | null>;
}

export interface State {
  aboutWorks: object[];
  language: string;
  languages: string[];
  appBar: AppBar;
  colors: string[];
}

const initState: State = {
  aboutWorks: [
    {
      img: 'https://img1.wsimg.com/isteam/stock/Y8G53l9/:/rs=w:807,h:403.5,cg:true,m/cr=w:807,h:403.5',
      title: 'Web and mobile development',
      /* tslint:disable-next-line:max-line-length */
      description: 'We provide the whole cycle of web and mobile development from gathering the requirements to deployment of the project and the following maintenance.',
    },
    {
      img: 'https://img1.wsimg.com/isteam/stock/y6d9jgp/:/rs=w:807,h:403.5,cg:true,m/cr=w:807,h:403.5',
      title: 'Our technologies',
      /* tslint:disable-next-line:max-line-length */
      description: 'Our team consists of highly qualified specialists with different set of skills. The main our technologies we use are python, nodejs, javascript, objecite-c, swift, java.',
    },
    {
      img: 'https://img1.wsimg.com/isteam/stock/11621/:/rs=w:807,h:403.5,cg:true,m/cr=w:807,h:403.5',
      title: 'Satisfaction Guaranteed',
      /* tslint:disable-next-line:max-line-length */
      description: 'The world of technology can be fast-paced and scary. That\'s why our goal is to provide an experience that is tailored to your company\s needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work.',
    },
  ],
  language: 'en',
  languages: ['en', 'ua'],
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
  strict: true,
  actions,
  getters,
  mutations,
  state: initState,
});
