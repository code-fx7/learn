import { Meta } from '@storybook/angular';
import { SliderImagesComponent } from './slider-images.component';

export default {
  title: 'ui/SliderImages',
  component: SliderImagesComponent,
} as Meta<SliderImagesComponent>;

export const Primary = {
  render: (args: SliderImagesComponent) => ({
    props: args,
  }),
  args: {},
};
