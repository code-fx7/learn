import { Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { HamsterFormComponent } from './hamster-form.component';
import { FormsModule } from '@angular/forms';

const actionHandlers = {
  addHamster: action('add Hamster')
};

export default {
  title: 'ui/HamsterForm',
  component: HamsterFormComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    })
  ]
} as Meta<HamsterFormComponent>;

export const Primary = {
  render: (args: HamsterFormComponent) => ({
    props: { ...args, ...actionHandlers}
  }),
  args: {},
};
