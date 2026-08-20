import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaLisaComponent } from './corrida-lisa-component';

describe('CorridaLisaComponent', () => {
  let component: CorridaLisaComponent;
  let fixture: ComponentFixture<CorridaLisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaLisaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaLisaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
