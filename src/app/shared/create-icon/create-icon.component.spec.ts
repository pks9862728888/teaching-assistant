import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIconComponent } from './create-icon.component';

describe('CreateIconComponent', () => {
  let component: CreateIconComponent;
  let fixture: ComponentFixture<CreateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
