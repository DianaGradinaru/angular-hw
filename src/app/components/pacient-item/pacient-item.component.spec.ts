import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientItemComponent } from './pacient-item.component';

describe('PacientItemComponent', () => {
  let component: PacientItemComponent;
  let fixture: ComponentFixture<PacientItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
