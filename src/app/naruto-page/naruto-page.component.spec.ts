import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarutoPageComponent } from './naruto-page.component';

describe('NarutoPageComponent', () => {
  let component: NarutoPageComponent;
  let fixture: ComponentFixture<NarutoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarutoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
