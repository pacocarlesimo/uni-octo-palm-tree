import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private studentPaths: any[] = [];

  constructor() {}

  saveStudentPath(path: any) {
    this.studentPaths.push(path);
  }

  getStudentPaths() {
    return this.studentPaths;
  }
}
