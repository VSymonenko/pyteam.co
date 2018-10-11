import App from '@/App.vue';
import { shallowMount } from '@vue/test-utils';
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ned add to all views for mock store                      */
import './common';
import { createLocalVue, mount } from '@vue/test-utils';
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
