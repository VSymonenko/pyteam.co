import App from '@/App.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ned add to all views for mock store                      */
import './common';
import Vuex from 'vuex';
import store from '@/store';
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

test('renders correctly', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = shallowMount(App, {localVue, store });

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});
