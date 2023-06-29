import { Meta, moduleMetadata } from '@storybook/angular';
import { HamsterCardComponent } from './hamster-card.component';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'ui/HamsterCard',
  component: HamsterCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule]
    })
  ]
} as Meta<HamsterCardComponent>;

export const Primary = {
  render: (args: HamsterCardComponent) => ({
    props: args,
  }),
  args: {
    text: '',
    img: '',
  },
};
