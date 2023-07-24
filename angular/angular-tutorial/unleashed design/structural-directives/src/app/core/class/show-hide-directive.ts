import { TemplateRef, ViewContainerRef } from "@angular/core";

export class ShowHideDirective {
  public isVisible: boolean = false;
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  public show(): void {
    if (!this.isVisible) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this.isVisible = true;
    }
  }

  public hide(): void {
    this._viewContainer.clear();
    this.isVisible = false;
  }
}
