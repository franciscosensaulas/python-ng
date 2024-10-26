import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroDesenvolvedoraComponent } from './filtro-desenvolvedora.component';

describe('FiltroDesenvolvedoraComponent', () => {
  let component: FiltroDesenvolvedoraComponent;
  let fixture: ComponentFixture<FiltroDesenvolvedoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroDesenvolvedoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroDesenvolvedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
