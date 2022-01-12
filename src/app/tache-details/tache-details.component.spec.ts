import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tacheDetailsComponent } from './tache-details.component';

describe('tacheDetailsComponent', () => {
  let component: tacheDetailsComponent;
  let fixture: ComponentFixture<tacheDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tacheDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tacheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
