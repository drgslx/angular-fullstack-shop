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
  getToysById(productId:number): Toys {
    return this.getToys().find(toy => toy.id == productId)??new Toys();
  }
  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllBagsByTag(tag:string): Bags[] {
    return tag === "Toate" ? 
      this.getAll() :
      this.getAll().filter(product => product.tags?.includes(tag));
  }

  getBagsById(productId:number): Bags {
    return this.getAll().find(product => product.id == productId)??new Bags();
  }
}

