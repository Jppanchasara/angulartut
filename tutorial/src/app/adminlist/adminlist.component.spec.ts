import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistComponent } from './adminlist.component';

describe('AdminlistComponent', () => {
  let component: AdminlistComponent;
  let fixture: ComponentFixture<AdminlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminlistComponent]
    });
    fixture = TestBed.createComponent(AdminlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
