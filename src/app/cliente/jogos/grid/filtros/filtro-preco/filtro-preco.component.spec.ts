import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPrecoComponent } from './filtro-preco.component';

describe('FiltroPrecoComponent', () => {
  let component: FiltroPrecoComponent;
  let fixture: ComponentFixture<FiltroPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroPrecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
