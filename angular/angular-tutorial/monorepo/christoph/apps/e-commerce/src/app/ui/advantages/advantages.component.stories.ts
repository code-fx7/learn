import { Meta, moduleMetadata } from '@storybook/angular';
import { AdvantagesComponent } from './advantages.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'

export default {
  title: 'ui/Advantages',
  component: AdvantagesComponent,
  decorators: [
    moduleMetadata ({
      declarations: [],
      imports: [
        MatIconModule,
        MatToolbarModule
      ]
    })
  ]
} as Meta<AdvantagesComponent>;

export const Primary = {
  render: (args: AdvantagesComponent) => ({
    props: args,
  }),
  args: {},
};
