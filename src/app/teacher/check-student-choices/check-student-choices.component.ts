import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import {NgForOf} from '@angular/common';
import { QualificationService } from '../../services/qualification-service';

export interface QualificationData {
  courses: { nome: string; codice: string; obbligatorio: boolean; universita?: string }[];
  finalQualification: string;
}

@Component({
  selector: 'app-check-student-choices',
  templateUrl: './check-student-choices.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./check-student-choices.component.css']
})
export class CheckStudentChoicesComponent implements OnInit {

  qualifications: QualificationData[] = [];

  constructor(private qualificationService: QualificationService) {}

  ngOnInit(): void {

    let savedQualifications = this.qualificationService.getAllSavedQualifications();

    if (savedQualifications) {
      this.qualifications = savedQualifications;
    } else {
      this.qualifications = [];
    }

  }

  downloadPDF(qualification: QualificationData): void {
    const doc = new jsPDF();
    const title = `Qualification: ${qualification.finalQualification}`;
    const headers = [[/*'Semester', */'Course Name', 'Code', 'Mandatory', 'University']];
    const rows: any[] = [];

    // Ordina e formatta i corsi per semestri
    qualification.courses.forEach((course) => {
      //const semester = this.getSemester(course.codice);
      rows.push([
       // semester,
        course.nome,
        course.codice,
        course.obbligatorio ? 'Yes' : 'No',
        course.universita || '-',
      ]);
    });

    // Ordina le righe per semestre
    rows.sort((a, b) => a[0] - b[0]);

    // Genera il PDF
    doc.text(title, 10, 10);
    (doc as any).autoTable({
      head: headers,
      body: rows,
      startY: 20,
    });

    doc.save(`${qualification.finalQualification.replace(' ', '_')}_Courses.pdf`);
  }

}
