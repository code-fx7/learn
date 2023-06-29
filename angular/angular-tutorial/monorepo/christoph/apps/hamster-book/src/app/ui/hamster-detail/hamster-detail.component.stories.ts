import { Meta } from '@storybook/angular';
import { HamsterDetailComponent } from './hamster-detail.component';

export default {
  title: 'ui/HamsterDetail',
  component: HamsterDetailComponent,
} as Meta<HamsterDetailComponent>;

export const Primary = {
  render: (args: HamsterDetailComponent) => ({
    props: args,
  }),
  args: {},
};
