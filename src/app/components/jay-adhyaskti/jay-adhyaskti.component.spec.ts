import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JayAdhyasktiComponent } from './jay-adhyaskti.component';

describe('JayAdhyasktiComponent', () => {
  let component: JayAdhyasktiComponent;
  let fixture: ComponentFixture<JayAdhyasktiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JayAdhyasktiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JayAdhyasktiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
