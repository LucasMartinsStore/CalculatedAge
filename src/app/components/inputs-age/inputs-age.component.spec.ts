import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsAgeComponent } from './inputs-age.component';

describe('InputsAgeComponent', () => {
  let component: InputsAgeComponent;
  let fixture: ComponentFixture<InputsAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsAgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputsAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
