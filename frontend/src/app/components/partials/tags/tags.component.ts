import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags?:Tag[] = [];
  constructor(productService: ProductService) { 
    this.tags=productService.getAllTags();
  }

}
