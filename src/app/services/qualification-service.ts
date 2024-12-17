import { Injectable } from '@angular/core';

export interface QualificationData {
  courses: { nome: string; codice: string; obbligatorio: boolean; universita?: string }[];
  finalQualification: string;
}

@Injectable({
  providedIn: 'root',
})
export class QualificationService {
  private savedData: QualificationData | null = null;

  saveQualificationData(data: QualificationData): void {
    // Recupera i dati già salvati
    const existingData = localStorage.getItem('qualifications');
    let qualifications: QualificationData[] = existingData ? JSON.parse(existingData) : [];

    // Aggiunge la nuova qualificazione alla lista esistente
    qualifications.push(data);

    // Salva nuovamente l'intera lista nel localStorage
    localStorage.setItem('qualifications', JSON.stringify(qualifications));

    console.log('Qualification saved:', data);
  }


  getAllSavedQualifications(): QualificationData[] {
    const savedData = localStorage.getItem('qualifications');
    return savedData ? JSON.parse(savedData) : [];
  }

}
