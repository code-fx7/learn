import { UserRole } from 'src/app/core/enums/UserRole.enum';

export type User = UserObject | null;

export interface UserObject {
  id: number;
  name: string;
  role: UserRole[];
}
