import { Meta } from '@storybook/angular';
import { FriendboxComponent } from './friendbox.component';

export default {
  title: 'ui/Friendbox',
  component: FriendboxComponent,
} as Meta<FriendboxComponent>;

export const Primary = {
  render: (args: FriendboxComponent) => ({
    props: args,
  }),
  args: {
    myFriends: [
    { name: 'Marius', text: '2 Jahre alt', image: 'assets/img/hamster5.jpg' },
    { name: 'Franziska', text: 'Gräbt gerne Löcher', image: 'assets/img/hamster6.jpg' },
    { name: 'Josephine', text: 'Spielt gerne', image: 'assets/img/hamster7.jpg' },
    { name: 'Patrick', text: 'Hamsterrad Freak', image: 'assets/img/hamster8.jpg' },
    ],
  },
};

export const One = {
  render: (args: FriendboxComponent) => ({
    props: args,
  }),
  args: {
    myFriends: [
    { name: 'Marius', text: '2 Jahre alt', image: 'assets/img/hamster5.jpg' },
    ],
  },
};

export const Empty = {
  render: (args: FriendboxComponent) => ({
    props: args,
  }),
  args: {
    myFriends: [],
  },
};
