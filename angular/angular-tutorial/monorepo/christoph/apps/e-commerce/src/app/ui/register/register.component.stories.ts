import { Meta, moduleMetadata } from '@storybook/angular';
import { RegisterComponent } from './register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


export default {
  title: 'ui/Register',
  component: RegisterComponent,
  decorators: [
    moduleMetadata ({
      declarations: [],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
      ]
    })
  ]
} as Meta<RegisterComponent>;

export const Primary = {
  render: (args: RegisterComponent) => ({
    props: args,
  }),
  args: {},
};
