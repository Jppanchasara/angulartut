import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrytListComponent } from './countryt-list.component';

describe('CountrytListComponent', () => {
  let component: CountrytListComponent;
  let fixture: ComponentFixture<CountrytListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrytListComponent]
    });
    fixture = TestBed.createComponent(CountrytListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
