import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
  // Hiermit erhält man automatisch Zugriff auf den Verweis auf den Pointer, an der Stelle, an der diese Richtlinie verwendet wird.
  constructor(public viewContainerRef: ViewContainerRef) {}
}
