import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../interfaces/User.interface';
import { ShowHideDirective } from '../class/show-hide-directive';

@Directive({
  selector: '[isAuthenticated]'
})
export class IsAuthenticatedDirective extends ShowHideDirective {
  constructor(
    public userService: UserService,
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef
    ) {
      super(templateRef, viewContainer);
      userService.getUser$.subscribe((user: User) => {
        user ? this.show() : this.hide();
    });
   }
}
