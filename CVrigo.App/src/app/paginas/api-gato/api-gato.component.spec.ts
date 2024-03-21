import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGatoComponent } from './api-gato.component';

describe('ApiGatoComponent', () => {
  let component: ApiGatoComponent;
  let fixture: ComponentFixture<ApiGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiGatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
