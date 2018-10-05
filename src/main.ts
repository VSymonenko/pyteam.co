import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.use(VueI18n);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

// Hot updates for localization
if (module.hot) {
  module.hot.accept(['./locales/en'], () => {
    i18n.setLocaleMessage('en', require('./locales/en').default);
  });
}
