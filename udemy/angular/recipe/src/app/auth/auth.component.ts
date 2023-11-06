import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AlertComponent } from '../shared/alert/alert/alert.component';
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";
import * as fromApp from '../store/app.reducer';
import { Store } from "@ngrx/store";
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  // Angular sucht nach dem Vorahndensein dieses Types in dem Template
  // Anschließend wird in alertHost die Eigenschaft PlaceholderDirective gespeichert
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  private closeSub: Subscription;
  private storeSub: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<fromApp.AppState>
    ) {}

    ngOnInit() {
      // Hier wird die UI auf Grundlage des aktuellen Zustands im Store aktualisiert
      this.storeSub = this.store.select('auth').subscribe(authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;
        if (this.error) {
          this.showErrorAlert(this.error);
        }
      });
    }

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

    if (this.isLoginMode) {
      // authObs = this.authService.login(email, password);
      this.store.dispatch(
        new AuthActions.LoginStart({ email: email, password: password })
      );
    } else {
      // Hier werden die Email und das Passwort aus dem Formular extrahiert und an den authService übergeben 
      this.store.dispatch(
        new AuthActions.SignupStart({ email:email, password: password })
      );
    }

    form.reset();
  }

  onHandleError() {
    this.store.dispatch(new AuthActions.ClearError());
  }

  ngOnDestroy() {
   if (this.closeSub) {
    this.closeSub.unsubscribe();
   }
   if (this.storeSub) {
    this.storeSub.unsubscribe();
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
