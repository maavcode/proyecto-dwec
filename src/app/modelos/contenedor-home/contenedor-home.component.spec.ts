import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorHomeComponent } from './contenedor-home.component';

describe('ContenedorHomeComponent', () => {
  let component: ContenedorHomeComponent;
  let fixture: ComponentFixture<ContenedorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
