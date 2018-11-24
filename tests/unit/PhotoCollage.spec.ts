import { PhotoCollage } from '@/components/Services';
import { shallowMount } from '@vue/test-utils';
import './common';

test('renders correctly', () => {
  const photos = ['1', '2'];
  const wrapper = shallowMount(PhotoCollage, {
      propsData: { photos },
    });

  expect(wrapper.isVueInstance()).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

describe('PhotoCollage', () => {
  it('renders a for each photo in PhotoCollage', () => {
    const photos = ['1', '2'];
    const wrapper = shallowMount(PhotoCollage, {
      propsData: { photos },
    });
    expect(wrapper.props().photos).toMatchObject(photos);
  });
});
