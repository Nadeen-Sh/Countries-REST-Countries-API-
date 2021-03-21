import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SelectRegionFilterComponent } from './select-region-filter.component';
import { FormsModule } from '@angular/forms';


describe('SelectRegionFilterComponent', () => {
  let component: SelectRegionFilterComponent;
  let fixture: ComponentFixture<SelectRegionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        FormsModule], 
      declarations: [ SelectRegionFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRegionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
