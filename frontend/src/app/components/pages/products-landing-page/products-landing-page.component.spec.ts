import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLandingPageComponent } from './products-landing-page.component';

describe('ProductsLandingPageComponent', () => {
  let component: ProductsLandingPageComponent;
  let fixture: ComponentFixture<ProductsLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
