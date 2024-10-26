import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJogoComponent } from './lista-jogo.component';

describe('ListaJogoComponent', () => {
  let component: ListaJogoComponent;
  let fixture: ComponentFixture<ListaJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
