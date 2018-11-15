import AboutWorks from '@/components/AboutWorks.vue';
import { shallowMount } from '@vue/test-utils';
import './common';

test('renders correctly', () => {
  const wrapper = shallowMount(AboutWorks);

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

describe('AboutWorks', () => {
  it('renders title in AboutWorks', () => {
    const title = 'new title';
    const wrapper = shallowMount(AboutWorks, {
      propsData: { title },
    });
    expect(wrapper.props().title).toContain(title);
  });

  it('renders description in AboutWorks', () => {
    const description = 'new description';
    const wrapper = shallowMount(AboutWorks, {
      propsData: { description },
    });
    expect(wrapper.props().description).toContain(description);
  });

  it('renders img src in AboutWorks', () => {
    const img = 'new img';
    const wrapper = shallowMount(AboutWorks, {
      propsData: { img },
    });
    expect(wrapper.props().img).toContain(img);
  });

  it('renders reverse block in AboutWorks', () => {
    const reverse = true;
    const wrapper = shallowMount(AboutWorks, {
      propsData: { reverse },
    });
    expect(wrapper.props().reverse).toBeTruthy();
  });
});
