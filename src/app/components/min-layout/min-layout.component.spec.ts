import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinLayoutComponent } from './min-layout.component';

describe('MinLayoutComponent', () => {
  let component: MinLayoutComponent;
  let fixture: ComponentFixture<MinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
