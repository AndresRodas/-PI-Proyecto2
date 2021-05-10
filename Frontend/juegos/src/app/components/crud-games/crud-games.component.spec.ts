import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGamesComponent } from './crud-games.component';

describe('CrudGamesComponent', () => {
  let component: CrudGamesComponent;
  let fixture: ComponentFixture<CrudGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
