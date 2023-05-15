import { Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TestcomponentComponent } from './testcomponent.component';

export default {
  title: 'TestcomponentComponent',
  component: TestcomponentComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatButtonModule,
        MatSlideToggleModule,
        MatIconModule,
      ]
    })
  ]
} as Meta<TestcomponentComponent>;

const actionHandlers = {
  myClick: action('Clicked')
};

export const Primary = {
  render: (args: TestcomponentComponent) => ({
    props: {
      ...args,
      myClick: actionHandlers.myClick
    },
  }),
  args: {
    caption: 'Click me!'
  },
};

export const LangeCaption = {
  render: (args: TestcomponentComponent) => ({
    props: {
      ...args,
      myClick: actionHandlers.myClick
    },
  }),
  args: {
    caption: 'Dies ist ein Button mit einer sehr sehr langen Caption!'
  },
};
