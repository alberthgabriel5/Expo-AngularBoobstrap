import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentAddValidateComponent } from './student-add-validate/student-add-validate.component';

const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' }
  },
  {
    path: 'student-add',
    component: StudentAddComponent,
    data: { title: 'Student Add' }
  },
  {
    path: 'student-add-validate',
    component: StudentAddValidateComponent,
    data: { title: 'Student Add Validate' }
  },
  {
    path: 'student-detail/:studentId',
    component: StudentDetailComponent,
    data: { title: 'Student Details' }
  },
  {
    path: 'student-update/:studentId',
    component: StudentUpdateComponent,
    data: { title: 'Student Update' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentDetailComponent,
    StudentUpdateComponent,
    StudentAddValidateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
