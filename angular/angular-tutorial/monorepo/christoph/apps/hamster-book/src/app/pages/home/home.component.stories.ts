import { Meta, moduleMetadata } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../ui/header/header.component';
import { FriendboxComponent } from '../../ui/friendbox/friendbox.component';
import { ProposalsComponent } from '../../ui/proposals/proposals.component';
import { ProfileRowComponent } from '../../ui/profile-row/profile-row.component';

export default {
  title: 'pages/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata ({
      declarations: [
        FriendboxComponent,
        HeaderComponent,
        ProfileRowComponent,
        ProposalsComponent
      ]
    })
  ]
} as Meta<HomeComponent>;

export const Primary = {
  render: (args: HomeComponent) => ({
    props: args,
  }),
  args: {},
};
