import { Meta } from '@storybook/angular';
import { AddHamsterComponent } from './add-hamster.component';

export default {
  title: 'pages/AddHamster',
  component: AddHamsterComponent,
} as Meta<AddHamsterComponent>;

export const Primary = {
  render: (args: AddHamsterComponent) => ({
    props: args,
  }),
  args: {},
};
