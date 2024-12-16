import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-modules-path',
  templateUrl: './modules-path.component.html',
  styleUrls: ['./modules-path.component.css'],
  imports: [
    NgIf,
    NgForOf
  ]
})
export class ModulesPathComponent {
  tabs: string[] = [
    'I Anno - I Semestre',
    'I Anno - II Semestre',
    'II Anno - I Semestre',
    'II Anno - II Semestre',
  ];
  activeModal: number | null = null;

  semesterCourses: { [key: string]: { compulsory: any[]; optional: any[] } } = {
    'I Anno - I Semestre': { compulsory: [], optional: [] },
    'I Anno - II Semestre': { compulsory: [], optional: [] },
    'II Anno - I Semestre': { compulsory: [], optional: [] },
    'II Anno - II Semestre': { compulsory: [], optional: [] },
  };

  openModal(semester: number) {
    this.activeModal = semester;
  }

  closeModal() {
    this.activeModal = null;
  }

  isOptionalSelected(semester: string, courseCode: string): boolean {
    return false; // Placeholder logic
  }

  selectOptional(semester: string, courseCode: string) {
    console.log(`Selected course: ${courseCode} for ${semester}`);
  }
}
