import Footer from '@/components/Footer.vue';
import { shallowMount } from '@vue/test-utils';
import './common';

test('renders correctly', () => {
  const wrapper = shallowMount(Footer);

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

describe('Footer', () => {
  it('renders AppBar.language when passed', () => {
    const language = 'new message';
    const wrapper = shallowMount(Footer, {
      propsData: { language },
    });
    expect(wrapper.props().language).toContain(language);
  });

  it('renders a for each button in Footer', () => {
    const languages = ['1', '2'];
    const wrapper = shallowMount(Footer, {
      propsData: { languages },
    });
    expect(wrapper.props().languages).toMatchObject(languages);
  });
});
