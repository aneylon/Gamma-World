import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityGeneratorComponent } from './personality-generator.component';

describe('PersonalityGeneratorComponent', () => {
  let component: PersonalityGeneratorComponent;
  let fixture: ComponentFixture<PersonalityGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
