import { Injectable } from '@angular/core';
import { Bags, Toys } from '../shared/models/Products';
import { sample_products, sample_products_toys, sample_tags } from  '../../data';
import { Tag } from '../shared/models/Tag';

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

  getAllBagsBySearchName(searchTerm: string): Bags[] {
    return this.getAll().filter(bag => bag.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllToysBySearchName(toyTerm: string): Toys[] {
    return this.getToys().filter(toy => toy.name.toLowerCase().includes(toyTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllBagsByTag(tag:string): Bags[] {
    return tag === "Toate culorile" ? 
      this.getAll() :
      this.getAll().filter(product => product.tags?.includes(tag));
  }
}

