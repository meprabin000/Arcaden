import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeDetailComponent } from './arcade-detail.component';

describe('ArcadeDetailComponent', () => {
  let component: ArcadeDetailComponent;
  let fixture: ComponentFixture<ArcadeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcadeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
