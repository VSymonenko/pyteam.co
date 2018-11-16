import Teammate from '@/components/Teammate.vue';
import { shallowMount } from '@vue/test-utils';
import './common';

test('renders correctly', () => {
  const wrapper = shallowMount(Teammate);

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

describe('Teammate', () => {
  it('renders fullName in Teammate', () => {
    const fullName = 'new fullName';
    const wrapper = shallowMount(Teammate, {
      propsData: { fullName },
    });
    expect(wrapper.props().fullName).toContain(fullName);
  });

  it('renders a subHeader in Teammate', () => {
    const photo = 'new sub-header';
    const wrapper = shallowMount(Teammate, {
      propsData: { photo },
    });
    expect(wrapper.props().photo).toContain(photo);
  });

  it('renders a description in Teammate', () => {
    const description = 'new sub-header';
    const wrapper = shallowMount(Teammate, {
      propsData: { description },
    });
    expect(wrapper.props().description).toContain(description);
  });
});
