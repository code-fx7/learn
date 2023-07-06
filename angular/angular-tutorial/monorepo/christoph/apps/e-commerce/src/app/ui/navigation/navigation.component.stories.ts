import { Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NavigationComponent } from './navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const actionHandlers = {
 sidenav : action('open sidenav')
};

export default {
  title: 'ui/Navigation',
  component: NavigationComponent,
  decorators: [
    moduleMetadata ({
      declarations: [

      ],
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
      ]
    })
  ]
} as Meta<NavigationComponent>;

export const Primary = {
  render: (args: NavigationComponent) => ({
    props: {...args, ...actionHandlers}
  }),
  args: {},
};
