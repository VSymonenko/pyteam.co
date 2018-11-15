import PageHeader from '@/components/PageHeader.vue';
import { shallowMount } from '@vue/test-utils';
import './common';

test('renders correctly', () => {
  const wrapper = shallowMount(PageHeader);

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

describe('PageHeader', () => {
  it('renders header in PageHeader', () => {
    const header = 'new header';
    const wrapper = shallowMount(PageHeader, {
      propsData: { header },
    });
    expect(wrapper.props().header).toContain(header);
  });

  it('renders a subHeader in PageHeader', () => {
    const subHeader = 'new sub-header';
    const wrapper = shallowMount(PageHeader, {
      propsData: { subHeader },
    });
    expect(wrapper.props().subHeader).toContain(subHeader);
  });
});
