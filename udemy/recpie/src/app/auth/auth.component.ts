import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

import { AuthResponseData, AuthService } from "./auth.service";
import { AlertComponent } from '../shared/alert/alert/alert.component';
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  // Angular sucht nach dem Vorahndensein dieses Types in dem Template
  // Anschließend wird in alertHost die Eigenschaft PlaceholderDirective gespeichert
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  onSwitchMode() {
    // Hier wird das Gegenteil von dem geändert, was es vorher war.
    // Da isLoginMode true ist, wird hier isLoginMode zu not true also false und wird als false gespeichert. 
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // Zusätzliche Sicherheit, falls ein User den Button manuell aktivieren sollte.
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    // Da es sich um den selben subscribe Block handelt für login und signup wird hier eine Variable erstellt.
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      // Hier werden die Email und das Passwort aus dem Formular extrahiert und an den authService übergeben 
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
   if (this.closeSub) {
    this.closeSub.unsubscribe();
   } 
  }

  private showErrorAlert(message: string) {
    // Dieser Code wird nicht funktionieren
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    // An dieser Stelle wird die neue Komponente erstellt
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
