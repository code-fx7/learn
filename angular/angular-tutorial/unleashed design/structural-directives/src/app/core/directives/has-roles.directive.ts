import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../interfaces/User.interface';
import { UserRole } from '../enums/UserRole.enum';
import { ShowHideDirective } from '../class/show-hide-directive';

@Directive({
  selector: '[hasRoles]'
})
export class HasRolesDirective extends ShowHideDirective {
  constructor(
    public userService: UserService,
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef
    ) {
      super(templateRef, viewContainer);
     }

    @Input() set hasRoles(roles: UserRole[]) {
      if (roles.length) {
        this.userService.getUser$.subscribe((user: User) => {
          if (user) {
            const hasRole = roles.every((role: UserRole) =>
            user.role.includes(role)
            );
            hasRole ? this.show() : this.hide();
          } else {
            this.hide();
          }
        });
      } else {
        this.hide();
      }
    }
}
