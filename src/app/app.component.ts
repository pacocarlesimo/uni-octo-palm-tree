import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uni-otco-palm-tree';

  constructor(private router: Router) {}

  goToAcademics() {
    this.router.navigate(['/academics']);
  }
}
