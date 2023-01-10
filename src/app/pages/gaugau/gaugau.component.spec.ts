import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugauComponent } from './gaugau.component';

describe('GaugauComponent', () => {
  let component: GaugauComponent;
  let fixture: ComponentFixture<GaugauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaugauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
