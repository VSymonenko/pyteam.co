import AwesomeSwiper from '@/components/AwesomeSwiper.vue';
import { shallowMount } from '@vue/test-utils';
import './common';

const colors = [
  'hsla(270, 50%, 40%, 1)',
  'hsla(35, 100%, 67%, 1)',
];

const child = {
  template: `<div></div>`,
};

test('renders correctly', () => {
  const wrapper = shallowMount(AwesomeSwiper, {
    propsData: { colors },
    slots: {
      default: child,
    },
  });

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

describe('AwesomeSwiper', () => {
  it('renders a for each item in tabs', () => {
    const tabRoutes = ['1', '2'];
    const wrapper = shallowMount(AwesomeSwiper, {
      propsData: { tabRoutes },
      slots: {
        default: child,
      },
    });
    expect(wrapper.props().tabRoutes).toHaveLength(tabRoutes.length);
  });

  it('renders a for each item in colors', () => {
    const wrapper = shallowMount(AwesomeSwiper, {
      propsData: { colors },
      slots: {
        default: child,
      },
    });
    expect(wrapper.props().colors).toHaveLength(colors.length);
  });
});
