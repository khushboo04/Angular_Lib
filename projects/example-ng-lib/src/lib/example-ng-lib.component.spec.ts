import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgLibComponent } from './example-ng-lib.component';

describe('ExampleNgLibComponent', () => {
  let component: ExampleNgLibComponent;
  let fixture: ComponentFixture<ExampleNgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
