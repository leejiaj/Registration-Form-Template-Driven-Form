import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormValidateOnSubmitComponent } from './register-form-validate-on-submit.component';

describe('RegisterFormValidateOnSubmitComponent', () => {
  let component: RegisterFormValidateOnSubmitComponent;
  let fixture: ComponentFixture<RegisterFormValidateOnSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormValidateOnSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormValidateOnSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
