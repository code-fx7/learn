import { Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AnimalFormComponent } from './animal-form.component';
import { FormsModule } from '@angular/forms';

const actionHandlers = { 
  addAnimal: action('add Animal')
};

export default {
  title: 'ui/AnimalForm',
  component: AnimalFormComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    })
  ]
} as Meta<AnimalFormComponent>;

export const Primary = {
  render: (args: AnimalFormComponent) => ({
    props: { ...args, ...actionHandlers}
  }),
  args: {},
};
