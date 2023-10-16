import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GustosMusicalesComponent } from './gustos-musicales.component';

describe('GustosMusicalesComponent', () => {
  let component: GustosMusicalesComponent;
  let fixture: ComponentFixture<GustosMusicalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GustosMusicalesComponent]
    });
    fixture = TestBed.createComponent(GustosMusicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
