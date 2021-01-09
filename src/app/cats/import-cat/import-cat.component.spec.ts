import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCatComponent } from './import-cat.component';

describe('ImportCatComponent', () => {
  let component: ImportCatComponent;
  let fixture: ComponentFixture<ImportCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
