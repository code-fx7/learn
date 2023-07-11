import { Meta, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar'

export default {
  title: 'ui/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata ({
      declarations: [],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule
      ]
    })
  ]
} as Meta<HeaderComponent>;

export const Primary = {
  render: (args: HeaderComponent) => ({
    props: args,
  }),
  args: {},
};
