import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tacheListComponent } from './tache-list.component';

describe('tacheListComponent', () => {
  let component: tacheListComponent;
  let fixture: ComponentFixture<tacheListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tacheListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tacheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
