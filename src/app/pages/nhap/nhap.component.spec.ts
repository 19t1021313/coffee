import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapComponent } from './nhap.component';

describe('NhapComponent', () => {
  let component: NhapComponent;
  let fixture: ComponentFixture<NhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
