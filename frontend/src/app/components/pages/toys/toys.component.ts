import { Component, OnInit } from '@angular/core';
import { Toys } from '../../../shared/models/Products';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrl: './toys.component.css'
})
export class ToysComponent implements OnInit {
  toys: Toys[] = [];

  constructor(private productService: ProductService) {
    this.toys = this.productService.getToys();
  }
  ngOnInit(): void {
  }
}

