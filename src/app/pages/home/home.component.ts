import { Component } from '@angular/core';

import { InputsAgeComponent } from '../../components/inputs-age/inputs-age.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputsAgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
