import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratiChalishaComponent } from './gujarati-chalisha.component';

describe('GujaratiChalishaComponent', () => {
  let component: GujaratiChalishaComponent;
  let fixture: ComponentFixture<GujaratiChalishaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GujaratiChalishaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GujaratiChalishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
