import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToyComponent } from './search-toy.component';

describe('SearchToyComponent', () => {
  let component: SearchToyComponent;
  let fixture: ComponentFixture<SearchToyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchToyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
