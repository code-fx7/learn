import { Meta, moduleMetadata } from '@storybook/angular';
import { ZoobuchComponent } from './zoobuch.component';
import { FormsModule } from '@angular/forms';
import { AnimalFormComponent } from '../../ui/animal-form/animal-form.component';
import { AnimalListComponent } from '../../ui/animal-list/animal-list.component';
import { HeaderComponent } from '../../ui/header/header.component';

export default {
  title: 'pages/Zoobuch',
  component: ZoobuchComponent,
  decorators: [
    moduleMetadata ({
      declarations: [
        AnimalFormComponent, 
        AnimalListComponent, 
        HeaderComponent
      ],
      imports: [FormsModule]
    })
  ]
} as Meta<ZoobuchComponent>;

export const Primary = {
  render: (args: ZoobuchComponent) => ({
    props: args,
  }),
  args: {},
};
