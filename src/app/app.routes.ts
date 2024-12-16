import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsComponent } from './academics/academics.component';
import { BuildQualificationComponent } from './student/build-qualification/build-qualification.component';
import { ChooseQualificationComponent } from './student/choose-qualification/choose-qualification.component';
import { CheckStudentChoicesComponent } from './teacher/check-student-choices/check-student-choices.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/academics', pathMatch: 'full' },
  { path: 'academics', component: AcademicsComponent },
  { path: 'student/build-qualification', component: BuildQualificationComponent },
  { path: 'student/choose-qualification', component: ChooseQualificationComponent },
  { path: 'teacher/check-choices', component: CheckStudentChoicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
