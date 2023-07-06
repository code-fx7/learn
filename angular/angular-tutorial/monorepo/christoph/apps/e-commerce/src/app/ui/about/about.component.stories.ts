import { Meta } from '@storybook/angular';
import { AboutComponent } from './about.component';

export default {
  title: 'ui/About',
  component: AboutComponent,
} as Meta<AboutComponent>;

export const Primary = {
  render: (args: AboutComponent) => ({
    props: args,
  }),
  args: {},
};
