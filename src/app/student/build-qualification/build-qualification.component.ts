import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {QualificationService} from '../../services/qualification-service';

export interface Course {
  nome: string;
  codice: string;
  obbligatorio: boolean;
  universita?: string; // Campo aggiuntivo per l'università
}

@Component({
  selector: 'app-build-qualification',
  templateUrl: './build-qualification.component.html',
  styleUrls: ['./build-qualification.component.css'],
  imports: [
    NgIf,
    NgForOf
  ]
})
export class BuildQualificationComponent {

  constructor(private qualificationService: QualificationService) {}


  showModal: boolean = false;
  showSpecialModal: boolean = false;
  currentSemester: number = 0;
  modalPosition = { x: 0, y: 0 };
  selectedCourses: Course[] = [];
  savedCourses: Course[] = [];

  filteredCoursesMandatory: Course[] = [];
  filteredCoursesOptional: Course[] = [];

  finalQualification: string = ''; // Qualifica finale casuale
  showRecapModal: boolean = false; // Controlla visibilità del recap


  // Corsi per semestre
  courses: { [key: number]: Course[] } = {
    1: [
      { nome: 'Applied Programming Project', codice: 'WIW34200', obbligatorio: true },
      { nome: 'Business Information Systems', codice: 'WIW64000', obbligatorio: true },
      { nome: 'Risk Management and Management Control', codice: 'WIW32090', obbligatorio: true },
      { nome: 'Training of Language, Research and Intercultural Skills', codice: 'WIW03750', obbligatorio: true },
      { nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false },
      { nome: 'Advanced Computer Graphics', codice: 'PTI90220', obbligatorio: false },
      { nome: 'Change Management', codice: 'WIW00390', obbligatorio: false },
      { nome: 'Car-to-Car Communication', codice: 'PTI90180', obbligatorio: false },
      { nome: 'Digital Business Models', codice: 'WIW64010', obbligatorio: false },
      { nome: 'International Human Resource Management', codice: 'WIW65540', obbligatorio: false },
      { nome: 'Managing Challenges in the Globalized Economy', codice: 'WIW31500', obbligatorio: false },
      { nome: 'Managing Intercultural Collaboration', codice: 'WIW08520', obbligatorio: false },
    ],
    2: [
      { nome: 'Machine Learning', codice: 'PTI90290', obbligatorio: true },
      { nome: 'Analytics for Data Driven Decisions', codice: 'WIW64031', obbligatorio: true },
      { nome: 'Advanced Fields of Management', codice: 'WIW32530', obbligatorio: true },
      { nome: 'Large Scale Data Processing', codice: 'PTI90080', obbligatorio: false },
      { nome: 'Forschungs- und Projektarbeit I', codice: 'WIW30610', obbligatorio: false },
      { nome: 'Business Monitoring Systems and Internal Audit', codice: 'WIW32040', obbligatorio: false },
      { nome: 'Business Cultures', codice: 'WIW67500', obbligatorio: false },
      { nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false },
      { nome: 'Science Communication', codice: 'PTI90300', obbligatorio: false },
      { nome: 'Information & Knowledge Management', codice: 'WIW34060', obbligatorio: false },
      { nome: 'Internet of Things (Digitale Technologien)', codice: 'WIW64021', obbligatorio: false },
      { nome: 'Global Business and Project Communication English', codice: 'SPR06590', obbligatorio: false },
    ],

  3: [
    // Compulsory Courses
    { nome: 'Design and Implementation of Software Systems', codice: 'PTI90310', obbligatorio: true },
    { nome: 'Digital Business Modeling', codice: 'WIW34170', obbligatorio: true },
    { nome: 'Strategic Management', codice: 'WIW35010', obbligatorio: true },

    // Armenian State University of Economics (ASUE) Armenia
    { nome: 'International Coaching Project', codice: 'ASUE-ICP', obbligatorio: false, universita: 'ASUE Armenia' },
    { nome: 'Management Theory - Modern Issues', codice: 'ASUE-MTMI', obbligatorio: false, universita: 'ASUE Armenia' },
    { nome: 'Research Methods in Data Science', codice: 'ASUE-RMDS', obbligatorio: false, universita: 'ASUE Armenia' },
    { nome: 'Python Programming', codice: 'ASUE-PP', obbligatorio: false, universita: 'ASUE Armenia' },
    { nome: 'Neural Networks and Deep Learning', codice: 'ASUE-NNDL', obbligatorio: false, universita: 'ASUE Armenia' },
    { nome: 'Decision Making Process', codice: 'ASUE-DMP', obbligatorio: false, universita: 'ASUE Armenia' },
    { nome: 'Business Statistics', codice: 'ASUE-BS', obbligatorio: false, universita: 'ASUE Armenia' },
    { nome: 'Digital Marketing', codice: 'ASUE-DM', obbligatorio: false, universita: 'ASUE Armenia' },

    // International Black Sea University (IBSU) Georgia
    { nome: 'International Coaching Project', codice: 'IBSU-ICP', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Models of Computation', codice: 'IBSU-MC', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Advanced Algorithms', codice: 'IBSU-AA', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Computer Networks and Security', codice: 'IBSU-CNS', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Numerical Analysis', codice: 'IBSU-NA', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Artificial Intelligence Applications', codice: 'IBSU-AIA', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Human-Machine Interaction', codice: 'IBSU-HMI', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Deep Reinforcement Learning', codice: 'IBSU-DRL', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Research Methods for Business', codice: 'IBSU-RMB', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Advanced Project Management', codice: 'IBSU-APM', obbligatorio: false, universita: 'IBSU Georgia' },
    { nome: 'Leadership Strategies', codice: 'IBSU-LS', obbligatorio: false, universita: 'IBSU Georgia' },

    // Kazakh-American Free University (KAFU)
    { nome: 'Computing Systems and Telecommunications Networks', codice: 'KAFU-CSTN', obbligatorio: false, universita: 'KAFU' },
    { nome: 'Architecture of Information Systems', codice: 'KAFU-AIS', obbligatorio: false, universita: 'KAFU' },
    { nome: 'Corporate Governance', codice: 'KAFU-CG', obbligatorio: false, universita: 'KAFU' },
    { nome: 'Strategic Marketing', codice: 'KAFU-SM', obbligatorio: false, universita: 'KAFU' },
    { nome: 'Personnel Management', codice: 'KAFU-PM', obbligatorio: false, universita: 'KAFU' },
    { nome: 'Project Management', codice: 'KAFU-PJM', obbligatorio: false, universita: 'KAFU' },
    { nome: 'International Coaching Project', codice: 'KAFU-ICP', obbligatorio: false, universita: 'KAFU' },

    // Kyrgyz-German Institute of Applied Informatics (INAI.kg) Kyrgyzstan
    { nome: 'Enterprise Application Development', codice: 'INAI-EAD', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
    { nome: 'Legal Aspects', codice: 'INAI-LA', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
    { nome: 'Business Processes in Software Development', codice: 'INAI-BPSD', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
    { nome: 'Business Plan', codice: 'INAI-BP', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
    { nome: 'Startup Coaching', codice: 'INAI-SC', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
    { nome: 'Philosophical Problems of Science', codice: 'INAI-PPS', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
    { nome: 'Advanced Marketing', codice: 'INAI-AM', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
    { nome: 'International Coaching Project', codice: 'INAI-ICP', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan' },
  ],
4: [
      { nome: 'Expert Talks', codice: 'WIW34190', obbligatorio: true },
      { nome: 'Master Project', codice: 'WIW30650', obbligatorio: true },
    ],
  };


  currentStep: number = 1; // 1 = Scelta università, 2 = Scelta corsi
  selectedUniversity: string = ''; // Università scelta per il terzo semestre

  universities = [
    'ASUE Armenia',
    'IBSU Georgia',
    'KAFU',
    'INAI.kg Kyrgyzstan',
  ];

  filteredUniversityCourses: Course[] = [];


  openModal(semester: number, event: MouseEvent) {
    this.currentSemester = semester; // Imposta il semestre corrente
    this.showModal = true;

    // Calcola la posizione del modale rispetto al pulsante
    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    this.modalPosition = {
      x: buttonRect.right + window.scrollX + 10,
      y: buttonRect.top + window.scrollY,
    };

    // Filtra i corsi in Mandatory e Optional
    const allCourses = this.courses[semester] || [];
    this.filteredCoursesMandatory = allCourses.filter(course => course.obbligatorio);
    this.filteredCoursesOptional = allCourses.filter(course => !course.obbligatorio);
  }

  // Chiude il modale
  closeModal() {
    this.showModal = false;
  }

  // Chiude il modale
  closeSpecialModal() {
    this.showSpecialModal = false;
  }


  saveSelection(semester: number) {
    if (this.selectedCourses.length === 2) {
      // Recupera i corsi obbligatori del semestre selezionato
      const mandatoryCourses = this.courses[semester].filter(course => course.obbligatorio);

      // Combina i corsi obbligatori e quelli selezionati
      this.savedCourses = [
        ...this.savedCourses,
        ...mandatoryCourses,
        ...this.selectedCourses
      ];

      console.log(`Courses saved for Semester ${semester}:`, [...mandatoryCourses, ...this.selectedCourses]);

      // Reset selezione corrente
      this.selectedCourses = [];

      // Chiude il modale
      this.closeModal();
    } else {
      alert('Please select exactly 2 optional courses.');
    }
  }


// Aggiungi o rimuovi i corsi facoltativi
  toggleOptionalCourse(course: Course) {
    if (this.selectedCourses.includes(course)) {
      this.selectedCourses = this.selectedCourses.filter(c => c !== course);
    } else if (this.selectedCourses.length < 4) { // 2 obbligatori + 2 opzionali
      this.selectedCourses.push(course);
    }
  }

  openModalSpecial(semester: number, event: MouseEvent) {
    this.currentSemester = semester;
    this.showSpecialModal = true; // Usa una flag diversa per il modale speciale
    this.currentStep = 1; // Step iniziale per la scelta dell'università
    this.selectedUniversity = ''; // Reset università selezionata
    this.selectedCourses = []; // Reset dei corsi selezionati
    this.filteredUniversityCourses = []; // Reset dei corsi filtrati

    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    this.modalPosition = {
      x: buttonRect.right + window.scrollX + 10,
      y: buttonRect.top + window.scrollY,
    };
  }

  selectUniversity(university: string) {
    this.selectedUniversity = university;
    this.currentStep = 2; // Passa alla selezione dei corsi

    const allCourses = this.courses[3] || [];

    this.filteredCoursesMandatory = allCourses.filter(course => course.obbligatorio);

    // Filtra solo i corsi del terzo semestre per università selezionata
    const universityCourses = allCourses.filter(
      course => course.universita === university
    );

    this.filteredCoursesOptional = universityCourses.filter(course => !course.obbligatorio);
  }

  saveSpecialCourses() {
    if (this.selectedCourses.length === 2) {
      // Recupera i corsi obbligatori del semestre selezionato
      const mandatoryCourses = this.courses[3].filter(course => course.obbligatorio);

      // Combina i corsi obbligatori e quelli selezionati
      this.savedCourses = [
        ...this.savedCourses,
        ...mandatoryCourses,
        ...this.selectedCourses
      ];

      console.log(`Courses saved for Semester ${3}:`, [...mandatoryCourses, ...this.selectedCourses]);

      // Reset selezione corrente
      this.selectedCourses = [];

      // Chiude il modale
      this.closeModal();
    } else {
      alert('Please select exactly 2 optional courses.');
    }
    this.showSpecialModal = false; // Chiude il modale speciale
  }

  completePath(event: MouseEvent) {
    this.closeModal(); // Chiude il modale corrente

    // Genera una qualifica a caso
    const qualifications = [
      'Master of Science in Computer Science',
      'Master of Business Administration',
      'Master of Digital Technologies',
      'Master of Strategic Management',
      'Master of Artificial Intelligence'
    ];
    const randomIndex = Math.floor(Math.random() * qualifications.length);
    this.finalQualification = qualifications[randomIndex];

    // Calcola la posizione per il recap modale
    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    this.modalPosition = {
      x: buttonRect.right + window.scrollX -100, // Posiziona più a destra di 300px
      y: buttonRect.top + window.scrollY - 450,
    };

    this.showRecapModal = true; // Mostra il modale

    this.qualificationService.saveQualificationData({
      courses: this.savedCourses,
      finalQualification: this.finalQualification,
    });

    console.log('Saved Data:', this.savedCourses, this.finalQualification);

  }


  closeRecapModal() {
    this.showRecapModal = false;
    // Resetta tutto
    this.savedCourses = [];
    this.selectedCourses = [];
    this.filteredCoursesMandatory = [];
    this.filteredCoursesOptional = [];
    this.currentSemester = 0;
    this.selectedUniversity = '';
    this.showModal = false;
    this.showSpecialModal = false;
  }

}
