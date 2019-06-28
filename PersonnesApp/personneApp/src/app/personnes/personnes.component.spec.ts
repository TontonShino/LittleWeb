import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesComponent } from './personnes.component';

describe('PersonnesComponent', () => {
  let component: PersonnesComponent;
  let fixture: ComponentFixture<PersonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
