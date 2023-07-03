import { Meta } from '@storybook/angular';
import { LandingPageComponent } from './landing-page.component';

export default {
  title: 'LandingPageComponent',
  component: LandingPageComponent,
} as Meta<LandingPageComponent>;

export const Primary = {
  render: (args: LandingPageComponent) => ({
    props: args,
  }),
  args: {},
};
