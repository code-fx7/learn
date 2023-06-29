import { Component } from "@angular/core";
import { Hamster } from "../../hamster";
import { HamsterStoreService } from "../../service/hamster-store.service";

@Component({
  selector: 'app-add-hamster',
  templateUrl: 'add-hamster.component.html'
})
export class AddHamsterComponent {
  constructor(private hamsterStoreService: HamsterStoreService) {}

  addHamster(newHamster: Hamster) {
    this.hamsterStoreService.addHamster(newHamster);
  }
}
