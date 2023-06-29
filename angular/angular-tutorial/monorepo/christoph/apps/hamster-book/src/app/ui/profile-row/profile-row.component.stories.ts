import { Meta } from '@storybook/angular';
import { ProfileRowComponent } from './profile-row.component';

export default {
  title: 'ui/ProfileRow',
  component: ProfileRowComponent,
} as Meta<ProfileRowComponent>;

export const Primary = {
  render: (args: ProfileRowComponent) => ({
    props: args,
  }),
  args: {
    hamster: {
      name: 'Frederick',
      image: '/assets/img/hamster4.jpg',
      text: '3 Jahre alt',
    },
    canFollow: true,
  },
};
