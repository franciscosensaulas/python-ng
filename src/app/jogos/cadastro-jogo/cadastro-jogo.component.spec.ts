import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroJogoComponent } from './cadastro-jogo.component';

describe('CadastroJogoComponent', () => {
  let component: CadastroJogoComponent;
  let fixture: ComponentFixture<CadastroJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
