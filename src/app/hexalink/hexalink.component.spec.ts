import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexalinkComponent } from './hexalink.component';

describe('HexalinkComponent', () => {
  let component: HexalinkComponent;
  let fixture: ComponentFixture<HexalinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexalinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexalinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
