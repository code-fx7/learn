import { Meta } from '@storybook/angular';
import { WishlistComponent } from './wishlist.component';

export default {
  title: 'ui/Wishlist',
  component: WishlistComponent,
} as Meta<WishlistComponent>;

export const Primary = {
  render: (args: WishlistComponent) => ({
    props: args,
  }),
  args: {},
};
