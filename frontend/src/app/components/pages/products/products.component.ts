import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Corrected property name
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  ngOnInit(): void {
  }
}