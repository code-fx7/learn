import { Meta, moduleMetadata } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


export default {
  title: 'ui/Login',
  component: LoginComponent,
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
} as Meta<LoginComponent>;

export const Primary = {
  render: (args: LoginComponent) => ({
    props: args,
  }),
  args: {},
};
