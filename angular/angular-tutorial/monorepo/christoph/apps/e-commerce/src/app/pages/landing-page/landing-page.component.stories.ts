import { Meta, moduleMetadata } from '@storybook/angular';
import { LandingPageComponent } from './landing-page.component';
import { SliderImagesComponent } from '../../ui/slider-images/slider-images.component';
import { AdvantagesComponent } from '../../ui/advantages/advantages.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card';

export default {
  title: 'pages/LandingPage',
  component: LandingPageComponent,
  decorators: [
    moduleMetadata ({
      declarations: [
        SliderImagesComponent,
        AdvantagesComponent
      ],
      imports: [
        MatButtonModule,
        MatCardModule,        
        MatTabsModule,
        MatToolbarModule,

      ]
    })
  ]
} as Meta<LandingPageComponent>;

export const Primary = {
  render: (args: LandingPageComponent) => ({
    props: args,
  }),
  args: {},
};
