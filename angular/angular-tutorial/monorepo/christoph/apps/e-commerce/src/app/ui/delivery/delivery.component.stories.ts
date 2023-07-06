import { Meta } from '@storybook/angular';
import { DeliveryComponent } from './delivery.component';

export default {
  title: 'ui/Delivery',
  component: DeliveryComponent,
} as Meta<DeliveryComponent>;

export const Primary = {
  render: (args: DeliveryComponent) => ({
    props: args,
  }),
  args: {},
};
