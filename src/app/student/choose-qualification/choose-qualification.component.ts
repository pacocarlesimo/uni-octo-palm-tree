import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {QualificationService} from '../../services/qualification-service';

export interface Course {
  nome: string;
  codice: string;
  obbligatorio: boolean;
  universita?: string; // Campo aggiuntivo per l'università
}

export interface Qualification {
  title: string;
  courses: { [semester: number]: Course[] };
}

@Component({
  selector: 'app-choose-qualification',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './choose-qualification.component.html',
  styleUrl: './choose-qualification.component.css'
})
export class ChooseQualificationComponent {

  constructor(private qualificationService: QualificationService) {
  }


  qualifications: Qualification[] = [
    {
      title: 'Scientific Assistant',
      courses: {
        1: [
          {nome: 'Applied Programming Project', codice: 'WIW34200', obbligatorio: true},
          {nome: 'Business Information Systems', codice: 'WIW64000', obbligatorio: true},
          {nome: 'Risk Management and Management Control', codice: 'WIW32090', obbligatorio: true},
          {nome: 'Training of Language, Research and Intercultural Skills', codice: 'WIW03750', obbligatorio: true},
          {nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false},
          {nome: 'Advanced Computer Graphics', codice: 'PTI90220', obbligatorio: false},
          {nome: 'Change Management', codice: 'WIW00390', obbligatorio: false},
          {nome: 'Managing Challenges in the Globalized Economy', codice: 'WIW31500', obbligatorio: false},
        ],
        2: [
          {nome: 'Machine Learning', codice: 'PTI90290', obbligatorio: true},
          {nome: 'Analytics for Data Driven Decisions', codice: 'WIW64031', obbligatorio: true},
          {nome: 'Advanced Fields of Management', codice: 'WIW32530', obbligatorio: true},
          {nome: 'Large Scale Data Processing', codice: 'PTI90080', obbligatorio: false},
          {nome: 'Forschungs- und Projektarbeit I', codice: 'WIW30610', obbligatorio: false},
          {nome: 'Business Monitoring Systems and Internal Audit', codice: 'WIW32040', obbligatorio: false},
          {nome: 'Business Cultures', codice: 'WIW67500', obbligatorio: false},
          {nome: 'Science Communication', codice: 'PTI90300', obbligatorio: false},
        ],
        3: [
          {nome: 'Design and Implementation of Software Systems', codice: 'PTI90310', obbligatorio: true},
          {nome: 'Digital Business Modeling', codice: 'WIW34170', obbligatorio: true},
          {nome: 'Strategic Management', codice: 'WIW35010', obbligatorio: true},
          {nome: 'International Coaching Project', codice: 'IC-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {
            nome: 'Management Theory - Modern Issues',
            codice: 'MT-ASUE',
            obbligatorio: false,
            universita: 'ASUE Armenia'
          },
          {
            nome: 'Research Methods in Data Science',
            codice: 'RM-ASUE',
            obbligatorio: false,
            universita: 'ASUE Armenia'
          },
          {nome: 'Advanced Algorithms', codice: 'AA-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {nome: 'Project Management', codice: 'PM-KAFU', obbligatorio: false, universita: 'KAFU Kazakhstan'},
          {
            nome: 'Enterprise Application Development',
            codice: 'EAD-INAI',
            obbligatorio: false,
            universita: 'INAI.kg Kyrgyzstan'
          },
        ],
        4: [
          {nome: 'Expert Talks', codice: 'WIW34190', obbligatorio: true},
          {nome: 'Master Project', codice: 'WIW30650', obbligatorio: true},
        ],
      },
    },
    {
      title: 'Business Allrounder',
      courses: {
        1: [
          {nome: 'Applied Programming Project', codice: 'WIW34200', obbligatorio: true},
          {nome: 'Business Information Systems', codice: 'WIW64000', obbligatorio: true},
          {nome: 'Risk Management and Management Control', codice: 'WIW32090', obbligatorio: true},
          {nome: 'Training of Language, Research and Intercultural Skills', codice: 'WIW03750', obbligatorio: true},
          {nome: 'Car-to-Car Communication', codice: 'PTI90180', obbligatorio: false},
          {nome: 'Digital Business Models', codice: 'WIW64010', obbligatorio: false},
          {nome: 'Change Management', codice: 'WIW00390', obbligatorio: false},
          {nome: 'Managing Challenges in the Globalized Economy', codice: 'WIW31500', obbligatorio: false},
        ],
        2: [
          {nome: 'Machine Learning', codice: 'PTI90290', obbligatorio: true},
          {nome: 'Analytics for Data Driven Decisions', codice: 'WIW64031', obbligatorio: true},
          {nome: 'Advanced Fields of Management', codice: 'WIW32530', obbligatorio: true},
          {nome: 'Large Scale Data Processing', codice: 'PTI90080', obbligatorio: false},
          {nome: 'Information & Knowledge Management', codice: 'WIW34060', obbligatorio: false},
        ],
        3: [
          {nome: 'Strategic Management', codice: 'WIW35010', obbligatorio: true},
          {nome: 'Python Programming', codice: 'PY-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {
            nome: 'Neural Networks and Deep Learning',
            codice: 'NN-ASUE',
            obbligatorio: false,
            universita: 'ASUE Armenia'
          },
          {nome: 'Advanced Project Management', codice: 'APM-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
        ],
        4: [
          {nome: 'Expert Talks', codice: 'WIW34190', obbligatorio: true},
          {nome: 'Master Project', codice: 'WIW30650', obbligatorio: true},
        ],
      },
    },

    {
      title: 'IT/Project – Manager',
      courses: {
        1: [
          {nome: 'Applied Programming Project', codice: 'WIW34200', obbligatorio: true},
          {nome: 'Business Information Systems', codice: 'WIW64000', obbligatorio: true},
          {nome: 'Risk Management and Management Control', codice: 'WIW32090', obbligatorio: true},
          {nome: 'Training of Language, Research and Intercultural Skills', codice: 'WIW03750', obbligatorio: true},
          {nome: 'Change Management', codice: 'WIW00390', obbligatorio: false},
          {nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false},
          {nome: 'International Human Resource Management', codice: 'WIW65540', obbligatorio: false},
          {nome: 'Managing Challenges in the Globalized Economy', codice: 'WIW31500', obbligatorio: false},
          {nome: 'Managing Intercultural Collaboration', codice: 'WIW08520', obbligatorio: false},
        ],
        2: [
          {nome: 'Machine Learning', codice: 'PTI90290', obbligatorio: true},
          {nome: 'Analytics for Data Driven Decisions', codice: 'WIW64031', obbligatorio: true},
          {nome: 'Advanced Fields of Management', codice: 'WIW32530', obbligatorio: true},
          {nome: 'Business Cultures', codice: 'WIW67500', obbligatorio: false},
          {nome: 'Business Monitoring Systems and Internal Audit', codice: 'WIW32040', obbligatorio: false},
          {nome: 'Global Business and Project Communication English', codice: 'SPR06590', obbligatorio: false},
          {nome: 'Internet of Things (Digitale Technologien)', codice: 'WIW64021', obbligatorio: false},
          {nome: 'Information & Knowledge Management', codice: 'WIW34060', obbligatorio: false},
          {nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false},
        ],
        3: [
          {nome: 'Design and Implementation of Software Systems', codice: 'PTI90310', obbligatorio: true},
          {nome: 'Digital Business Modeling', codice: 'WIW34170', obbligatorio: true},
          {nome: 'Strategic Management', codice: 'WIW35010', obbligatorio: true},
          {nome: 'Decision Making Process', codice: 'DMP-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {nome: 'Digital Marketing', codice: 'DM-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {
            nome: 'Neural Networks and Deep Learning',
            codice: 'NN-ASUE',
            obbligatorio: false,
            universita: 'ASUE Armenia'
          },
          {nome: 'Python Programming', codice: 'PY-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {nome: 'Advanced Project Management', codice: 'APM-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {nome: 'Leadership Strategies', codice: 'LS-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {
            nome: 'Enterprise Application Development',
            codice: 'EAD-INAI',
            obbligatorio: false,
            universita: 'INAI.kg Kyrgyzstan'
          },
          {nome: 'Startup Coaching', codice: 'SC-INAI', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan'},
          {nome: 'Business Plan', codice: 'BP-INAI', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan'},
        ],
        4: [
          {nome: 'Expert Talks', codice: 'WIW34190', obbligatorio: true},
          {nome: 'Master Project', codice: 'WIW30650', obbligatorio: true},
        ],
      },
    },
    {
      title: 'Software Engineer',
      courses: {
        1: [
          {nome: 'Applied Programming Project', codice: 'WIW34200', obbligatorio: true},
          {nome: 'Business Information Systems', codice: 'WIW64000', obbligatorio: true},
          {nome: 'Risk Management and Management Control', codice: 'WIW32090', obbligatorio: true},
          {nome: 'Training of Language, Research and Intercultural Skills', codice: 'WIW03750', obbligatorio: true},
          {nome: 'Advanced Computer Graphics', codice: 'PTI90220', obbligatorio: false},
          {nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false},
          {nome: 'Car-to-Car Communication', codice: 'PTI90180', obbligatorio: false},
          {nome: 'Digital Business Models', codice: 'WIW64010', obbligatorio: false},
        ],
        2: [
          {nome: 'Machine Learning', codice: 'PTI90290', obbligatorio: true},
          {nome: 'Analytics for Data Driven Decisions', codice: 'WIW64031', obbligatorio: true},
          {nome: 'Advanced Fields of Management', codice: 'WIW32530', obbligatorio: true},
          {nome: 'Large Scale Data Processing', codice: 'PTI90080', obbligatorio: false},
          {nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false},
          {nome: 'Internet of Things (Digitale Technologien)', codice: 'WIW64021', obbligatorio: false},
          {nome: 'Forschungs- und Projektarbeit I', codice: 'WIW30610', obbligatorio: false},
          {nome: 'Global Business and Project Communication English', codice: 'SPR06590', obbligatorio: false},
          {nome: 'Business Monitoring Systems and Internal Audit', codice: 'WIW32040', obbligatorio: false},
        ],
        3: [
          {nome: 'Design and Implementation of Software Systems', codice: 'PTI90310', obbligatorio: true},
          {nome: 'Digital Business Modeling', codice: 'WIW34170', obbligatorio: true},
          {nome: 'Strategic Management', codice: 'WIW35010', obbligatorio: true},
          {nome: 'Python Programming', codice: 'PY-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {
            nome: 'Neural Networks and Deep Learning',
            codice: 'NN-ASUE',
            obbligatorio: false,
            universita: 'ASUE Armenia'
          },
          {nome: 'International Coaching Project', codice: 'ICP-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {nome: 'Advanced Project Management', codice: 'APM-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {nome: 'Advanced Algorithms', codice: 'AA-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {
            nome: 'Artificial Intelligence Applications',
            codice: 'AIA-IBSU',
            obbligatorio: false,
            universita: 'IBSU Georgia'
          },
          {nome: 'Numerical Analysis', codice: 'NA-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {nome: 'Models of Computation', codice: 'MC-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {
            nome: 'Computing Systems and Telecommunications Networks',
            codice: 'CSTN-KAFU',
            obbligatorio: false,
            universita: 'KAFU Kazakhstan'
          },
          {
            nome: 'Architecture of Information Systems',
            codice: 'AIS-KAFU',
            obbligatorio: false,
            universita: 'KAFU Kazakhstan'
          },
          {
            nome: 'Enterprise Application Development',
            codice: 'EAD-INAI',
            obbligatorio: false,
            universita: 'INAI.kg Kyrgyzstan'
          },
          {
            nome: 'Business Processes in Software Development',
            codice: 'BPSD-INAI',
            obbligatorio: false,
            universita: 'INAI.kg Kyrgyzstan'
          },
          {nome: 'Legal Aspects', codice: 'LA-INAI', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan'},
        ],
        4: [
          {nome: 'Expert Talks', codice: 'WIW34190', obbligatorio: true},
          {nome: 'Master Project', codice: 'WIW30650', obbligatorio: true},
        ],
      },
    },

    {
      title: 'Data Analyst',
      courses: {
        1: [
          {nome: 'Applied Programming Project', codice: 'WIW34200', obbligatorio: true},
          {nome: 'Business Information Systems', codice: 'WIW64000', obbligatorio: true},
          {nome: 'Risk Management and Management Control', codice: 'WIW32090', obbligatorio: true},
          {nome: 'Training of Language, Research and Intercultural Skills', codice: 'WIW03750', obbligatorio: true},
          {nome: 'Car-to-Car Communication', codice: 'PTI90180', obbligatorio: false},
          {nome: 'Advanced Computer Graphics', codice: 'PTI90220', obbligatorio: false},
          {nome: 'Managing Challenges in the Globalized Economy', codice: 'WIW31500', obbligatorio: false},
          {nome: 'Digital Business Models', codice: 'WIW64010', obbligatorio: false},
          {nome: 'Change Management', codice: 'WIW00390', obbligatorio: false},
        ],
        2: [
          {nome: 'Machine Learning', codice: 'PTI90290', obbligatorio: true},
          {nome: 'Analytics for Data Driven Decisions', codice: 'WIW64031', obbligatorio: true},
          {nome: 'Advanced Fields of Management', codice: 'WIW32530', obbligatorio: true},
          {nome: 'Large Scale Data Processing', codice: 'PTI90080', obbligatorio: false},
          {nome: 'Computer Science Project', codice: 'PTI90190', obbligatorio: false},
          {nome: 'Information & Knowledge Management', codice: 'WIW34060', obbligatorio: false},
          {nome: 'Forschungs- und Projektarbeit I', codice: 'WIW30610', obbligatorio: false},
          {nome: 'Internet of Things (Digitale Technologien)', codice: 'WIW64021', obbligatorio: false},
          {nome: 'Global Business and Project Communication English', codice: 'SPR06590', obbligatorio: false},
        ],
        3: [
          {nome: 'Design and Implementation of Software Systems', codice: 'PTI90310', obbligatorio: true},
          {nome: 'Digital Business Modeling', codice: 'WIW34170', obbligatorio: true},
          {nome: 'Strategic Management', codice: 'WIW35010', obbligatorio: true},
          {nome: 'Python Programming', codice: 'PY-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {
            nome: 'Neural Networks and Deep Learning',
            codice: 'NN-ASUE',
            obbligatorio: false,
            universita: 'ASUE Armenia'
          },
          {nome: 'International Coaching Project', codice: 'ICP-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {nome: 'Business Statistics', codice: 'BS-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {nome: 'Digital Marketing', codice: 'DM-ASUE', obbligatorio: false, universita: 'ASUE Armenia'},
          {nome: 'Models of Computation', codice: 'MC-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {nome: 'Deep Reinforcement Learning', codice: 'DRL-IBSU', obbligatorio: false, universita: 'IBSU Georgia'},
          {
            nome: 'Artificial Intelligence Applications',
            codice: 'AIA-IBSU',
            obbligatorio: false,
            universita: 'IBSU Georgia'
          },
          {
            nome: 'Architecture of Information Systems',
            codice: 'AIS-KAFU',
            obbligatorio: false,
            universita: 'KAFU Kazakhstan'
          },
          {nome: 'Corporate Governance', codice: 'CG-KAFU', obbligatorio: false, universita: 'KAFU Kazakhstan'},
          {nome: 'Strategic Marketing', codice: 'SM-KAFU', obbligatorio: false, universita: 'KAFU Kazakhstan'},
          {nome: 'Legal Aspects', codice: 'LA-INAI', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan'},
          {nome: 'Business Plan', codice: 'BP-INAI', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan'},
          {nome: 'Advanced Marketing', codice: 'AM-INAI', obbligatorio: false, universita: 'INAI.kg Kyrgyzstan'},
        ],
        4: [
          {nome: 'Expert Talks', codice: 'WIW34190', obbligatorio: true},
          {nome: 'Master Project', codice: 'WIW30650', obbligatorio: true},
        ],
      },
    },

  ];


  showModal: boolean = false;
  currentQualification: string = '';
  currentCourses: { [key: number]: Course[] } = {};
  selectedCourses: { [key: number]: Course[] } = {};
  modalPosition = {x: 0, y: 0};

  openModal(qualificationTitle: string, event: MouseEvent) {
    this.showModal = true;

    // Trova la qualificazione corrispondente
    const qualification = this.qualifications.find(q => q.title === qualificationTitle);

    if (qualification) {
      this.currentQualification = qualification.title;
      this.currentCourses = qualification.courses; // Ora contiene i corsi distribuiti per semestre
      this.modalPosition = {x: event.clientX, y: event.clientY};

      // Preseleziona corsi obbligatori
      this.selectedCourses = {};
      Object.keys(this.currentCourses).forEach((semester) => {
        this.selectedCourses[+semester] = this.currentCourses[+semester].filter(course => course.obbligatorio);
      });
    } else {
      console.error('Qualification not found:', qualificationTitle);
    }
  }


  toggleOptionalCourse(course: Course, semester: number) {
    const selected = this.selectedCourses[semester] || [];
    if (selected.includes(course)) {
      this.selectedCourses[semester] = selected.filter(c => c !== course);
    } else if (selected.filter(c => !c.obbligatorio).length < 2) {
      this.selectedCourses[semester] = [...selected, course];
    }
  }

  saveSelection() {
    // Trasforma selectedCourses in un array compatibile con QualificationData
    const savedCourses: { nome: string; codice: string; obbligatorio: boolean; universita?: string }[] = [];

    // Itera sui semestri e sui corsi selezionati
    Object.keys(this.selectedCourses).forEach((semester) => {
      this.selectedCourses[+semester].forEach(course => {
        savedCourses.push({
          nome: course.nome,
          codice: course.codice,
          obbligatorio: course.obbligatorio,
          universita: course.universita || undefined,
        });
      });
    });

    // Struttura finale per il salvataggio
    const dataToSave = {
      courses: savedCourses,
      finalQualification: this.currentQualification,
    };

    // Salvataggio nel servizio
    this.qualificationService.saveQualificationData(dataToSave);

    console.log('Saved Data:', dataToSave); // Debugging

    // Reset dei dati selezionati e chiusura modale
    this.resetSelections();
    this.closeModal();
  }

  resetSelections() {
    this.selectedCourses = {};
    this.currentCourses = {};
    this.currentQualification = '';
  }


  closeModal() {
    this.showModal = false;
    this.selectedCourses = {};
  }

  isCourseDisabled(course: Course, semester: number): boolean {
    const selected = this.selectedCourses[semester] || [];
    const optionalCount = selected.filter(c => !c.obbligatorio).length;

    return course.obbligatorio || (optionalCount >= 2 && !selected.includes(course));
  }

  isSaveEnabledOverall(): boolean {
    for (let semester of [1, 2, 3]) {
      const optionalCourses = this.currentCourses[semester]?.filter(course => !course.obbligatorio) || [];
      const selectedOptionalCourses = this.selectedCourses[semester]?.filter(course => !course.obbligatorio) || [];
      if (selectedOptionalCourses.length < 2 || selectedOptionalCourses.length > optionalCourses.length) {
        return false;
      }
    }
    return true;
  }

}
