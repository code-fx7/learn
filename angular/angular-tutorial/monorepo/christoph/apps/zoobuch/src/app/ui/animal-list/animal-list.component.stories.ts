import { Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AnimalListComponent } from './animal-list.component';

const actionHandlers = { 
  delete: action('delete Animal')
};

export default {
  title: 'ui/AnimalList',
  component: AnimalListComponent,
} as Meta<AnimalListComponent>;

export const Primary = {
  render: (args: AnimalListComponent) => ({
    props: {...args,...actionHandlers}
  }),
  args: {
    animals: [
    { name: 'Charlie', type: 'Affe' },
    { name: 'Schiggi', type: 'Schildkröte' },
    { name: 'Hedwig', type: 'Eule' },
    { name: 'Joanne', type: 'Giraffe' },
    { name: 'Scooby', type: 'Hund' },
    ],
  },
};

export const Empty = {
  render: (args: AnimalListComponent) => ({
    props: {...args,...actionHandlers}
  }),
  args: {
    animals: [],
  },
};

export const One = {
  render: (args: AnimalListComponent) => ({
    props: {...args,...actionHandlers}
  }),
  args: {
    animals: [
      { name: 'Charlie', type: 'Affe'},
    ],
  },
};