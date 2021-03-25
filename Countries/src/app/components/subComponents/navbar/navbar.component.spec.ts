import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')}; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule], 
      declarations: [ NavbarComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 3.  Html element testing
  it("testing html element",()=>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".title").textContent).toContain("Around the world")
  })

  // 4. Navigate to home testing
  it(`should navigate to home`, () => {
    component.goHome();
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/']);
 });

});
