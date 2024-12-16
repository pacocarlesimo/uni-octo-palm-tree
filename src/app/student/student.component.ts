import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  standalone: true,
  imports: [],
})
export class StudentComponent {
  constructor(private router: Router) {}

  // Naviga al percorso per esami
  navigateToModulesPath() {
    this.router.navigate(['/modules-path']);
  }

  // Naviga al percorso per qualificazione (per ora placeholder)
  navigateToQualificationPath() {
    alert('Percorso per qualificazione non ancora implementato!');
  }
}
