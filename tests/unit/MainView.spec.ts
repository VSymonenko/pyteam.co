import MainView from '@/components/MainView.vue';
import { shallowMount } from '@vue/test-utils';
import './common';

test('renders correctly', () => {
  const wrapper = shallowMount(MainView);

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});
