import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NekoteaComponent } from './nekotea.component';

describe('NekoteaComponent', () => {
  let component: NekoteaComponent;
  let fixture: ComponentFixture<NekoteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NekoteaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NekoteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
