import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateCourseStepOneComponent } from './create-course/create-course-step-one/create-course-step-one.component';
import { CreateCourseStepTwoComponent } from './create-course/create-course-step-two/create-course-step-two.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseDialogComponent,
    AboutComponent,
    CourseComponent,
    CoursesCardListComponent,
    CreateCourseComponent,
    CreateCourseStepOneComponent,
    CreateCourseStepTwoComponent,
    DragDropComponent,
    HomeComponent,
    TreeDemoComponent,
    VirtualScrollingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
