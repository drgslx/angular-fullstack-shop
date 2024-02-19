import { Component, OnInit } from '@angular/core';
import { Toys } from '../../../shared/models/Products';
import { ProductService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  toys: Toys[] = [];

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.toyTerm) {
        this.toys = this.productService.getAllToysBySearchName(params.toyTerm);
      }else{
        this.toys = this.productService.getToys();
      }
    })
  }
    
  ngOnInit(): void {
  }
}

