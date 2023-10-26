import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("check component name",()=>{
    expect(component.componentName).toBe('user')
  })
  it("check component function",()=>{
    expect(component.sum(10, 40)).toBe(50)
  })
  it("check html element",()=>{
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.user_component').textContent).toContain('user')
  })
});
