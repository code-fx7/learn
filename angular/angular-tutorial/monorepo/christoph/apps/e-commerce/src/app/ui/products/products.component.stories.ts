import { Meta } from '@storybook/angular';
import { ProductsComponent } from './products.component';

export default {
  title: 'ProductsComponent',
  component: ProductsComponent,
} as Meta<ProductsComponent>;

export const Primary = {
  render: (args: ProductsComponent) => ({
    props: args,
  }),
  args: {},
};
