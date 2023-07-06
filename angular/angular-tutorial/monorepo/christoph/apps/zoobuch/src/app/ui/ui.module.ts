import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AnimalFormComponent,
    AnimalListComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    AnimalFormComponent,
    AnimalListComponent,
    HeaderComponent,
  ]
})
export class UiModule { }
