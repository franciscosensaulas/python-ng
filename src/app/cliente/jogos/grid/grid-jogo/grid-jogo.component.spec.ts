import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridJogoComponent } from './grid-jogo.component';

describe('GridJogoComponent', () => {
  let component: GridJogoComponent;
  let fixture: ComponentFixture<GridJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
