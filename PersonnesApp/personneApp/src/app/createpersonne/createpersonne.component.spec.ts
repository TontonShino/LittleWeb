import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepersonneComponent } from './createpersonne.component';

describe('CreatepersonneComponent', () => {
  let component: CreatepersonneComponent;
  let fixture: ComponentFixture<CreatepersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
