import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTagComponent } from './filtro-tag.component';

describe('FiltroTagComponent', () => {
  let component: FiltroTagComponent;
  let fixture: ComponentFixture<FiltroTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
