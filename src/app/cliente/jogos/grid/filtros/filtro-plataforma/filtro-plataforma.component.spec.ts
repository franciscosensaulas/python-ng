import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPlataformaComponent } from './filtro-plataforma.component';

describe('FiltroPlataformaComponent', () => {
  let component: FiltroPlataformaComponent;
  let fixture: ComponentFixture<FiltroPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroPlataformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
