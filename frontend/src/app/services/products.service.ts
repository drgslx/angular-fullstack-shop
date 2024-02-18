import { Injectable } from '@angular/core';
import { Bags, Toys } from '../shared/models/Products';
import { sample_products, sample_products_toys } from  '../../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll(): Bags[] {
    return sample_products;
  }
  getToys(): Toys[] {
    return sample_products_toys;
  }
}
