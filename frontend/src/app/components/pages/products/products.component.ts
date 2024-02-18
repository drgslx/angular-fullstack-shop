import { Component, OnInit } from '@angular/core';
import { Bags } from '../../../shared/models/Products';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Corrected property name
})
export class ProductsComponent implements OnInit {
  products: Bags[] = [];
  
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  ngOnInit(): void {
  }
}