import AppBar from '@/components/AppBar.vue';
import { shallowMount } from '@vue/test-utils';
import './common';

test('renders correctly', () => {
  const wrapper = shallowMount(AppBar);

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

describe('AppBar', () => {
  it('renders AppBar.title when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(AppBar, {
      propsData: { title },
    });
    expect(wrapper.props().title).toContain(title);
  });

  it('renders AppBar.clipped when passed', () => {
    const clipped = true;
    const wrapper = shallowMount(AppBar, {
      propsData: { clipped },
    });
    expect(wrapper.props().clipped).toBe(clipped);
  });

  it('renders a for each item in tabs', () => {
    const menu = ['1', '2'];
    const wrapper = shallowMount(AppBar, {
      propsData: { menu },
    });
    expect(wrapper.props().menu).toHaveLength(menu.length);
  });
});
