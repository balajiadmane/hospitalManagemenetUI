import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrHostpitalComponent } from './registr-hostpital.component';

describe('RegistrHostpitalComponent', () => {
  let component: RegistrHostpitalComponent;
  let fixture: ComponentFixture<RegistrHostpitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrHostpitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrHostpitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
