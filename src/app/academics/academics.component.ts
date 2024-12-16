import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {

  constructor(private router: Router) {}

  // Navigazione per i pulsanti
  buildQualification() {
    // Esempio: naviga a un componente specifico
    this.router.navigate(['/student/build-qualification']);
  }

  chooseQualification() {
    this.router.navigate(['/student/choose-qualification']);
  }

  checkStudentChoices() {
    this.router.navigate(['/teacher/check-choices']);
  }
}
