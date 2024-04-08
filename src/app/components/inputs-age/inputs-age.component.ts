import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inputs-age',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './inputs-age.component.html',
  styleUrl: './inputs-age.component.scss',
})
export class InputsAgeComponent implements OnInit {
  ageForm!: FormGroup;
  isTest = false;
  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.ageForm = this.formBuilder.group({
      day: [, [Validators.required, Validators.min(1), Validators.max(31)]],
      month: [, [Validators.required, Validators.min(1), Validators.max(12)]],
      year: [
        ,
        [Validators.required, Validators.min(1900), Validators.max(2099)],
      ],
    });
  }

  calculatedAge(): number {
    if (
      this.ageForm.value.day &&
      this.ageForm.value.month &&
      this.ageForm.value.year
    ) {
      const now = new Date();
      const dateBirthday = new Date(
        this.ageForm.value.year,
        this.ageForm.value.month - 1,
        this.ageForm.value.day
      );
      const diff = now.getTime() - dateBirthday.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    } else {
      return 0;
    }
  }

  calculatedMonths(): number {
    if (
      this.ageForm.value.day &&
      this.ageForm.value.month &&
      this.ageForm.value.year
    ) {
      const now = new Date();
      const dateBirthday = new Date(
        this.ageForm.value.year,
        this.ageForm.value.month - 1,
        this.ageForm.value.day
      );
      let months = (now.getFullYear() - dateBirthday.getFullYear()) * 12;
      months -= dateBirthday.getMonth();
      months += now.getMonth();
      return months <= 0 ? 0 : months;
    } else {
      return 0;
    }
  }
  calculateDaysLived(): number {
    if (
      this.ageForm.value.day &&
      this.ageForm.value.month &&
      this.ageForm.value.year
    ) {
      const now = new Date();
      const dateBirthday = new Date(
        this.ageForm.value.year,
        this.ageForm.value.month - 1,
        this.ageForm.value.day
      );
      const diffTime = Math.abs(now.getTime() - dateBirthday.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    } else {
      return 0;
    }
  }
}
