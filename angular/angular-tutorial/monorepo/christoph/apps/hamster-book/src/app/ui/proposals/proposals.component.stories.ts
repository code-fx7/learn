import { Meta } from '@storybook/angular';
import { ProposalsComponent } from './proposals.component';

export default {
  title: 'ui/Proposals',
  component: ProposalsComponent,
} as Meta<ProposalsComponent>;

export const Primary = {
  render: (args: ProposalsComponent) => ({
    props: { ...args, }
  }),
  args: {
    hamsters: [
    { name: 'Marius', text: '2 Jahre alt', image: 'assets/img/hamster5.jpg' },
    { name: 'Franziska', text: 'Gräbt gerne Löcher', image: 'assets/img/hamster6.jpg' },
    { name: 'Josephine', text: 'Spielt gerne', image: 'assets/img/hamster7.jpg' },
    { name: 'Patrick', text: 'Hamsterrad Freak', image: 'assets/img/hamster8.jpg' },
    ],
  },
};

export const One = {
  render: (args: ProposalsComponent) => ({
    props: { ...args, }
  }),
  args: {
    hamsters: [
    { name: 'Marius', text: '2 Jahre alt', image: 'assets/img/hamster5.jpg' },
    ],
  },
};

export const Empty = {
  render: (args: ProposalsComponent) => ({
    props: { ...args, }
  }),
  args: {
    hamsters: [],
  },
};
