import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRenderComponent } from './popup-render.component';

describe('PopupRenderComponent', () => {
  let component: PopupRenderComponent;
  let fixture: ComponentFixture<PopupRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
