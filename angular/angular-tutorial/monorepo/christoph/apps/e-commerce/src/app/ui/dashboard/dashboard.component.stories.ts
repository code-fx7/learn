import { Meta } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';

export default {
  title: 'ui/Dashboard',
  component: DashboardComponent,
} as Meta<DashboardComponent>;

export const Primary = {
  render: (args: DashboardComponent) => ({
    props: args,
  }),
  args: {},
};
