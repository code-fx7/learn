import { Meta } from '@storybook/angular';
import { ShoppingCardComponent } from './shopping-card.component';

export default {
  title: 'ShoppingCardComponent',
  component: ShoppingCardComponent,
} as Meta<ShoppingCardComponent>;

export const Primary = {
  render: (args: ShoppingCardComponent) => ({
    props: args,
  }),
  args: {},
};
