import { Meta } from '@storybook/angular';
import { BlogComponent } from './blog.component';

export default {
  title: 'ui/Blog',
  component: BlogComponent,
} as Meta<BlogComponent>;

export const Primary = {
  render: (args: BlogComponent) => ({
    props: args,
  }),
  args: {},
};
