import {  Bags } from "./app/shared/models/Products";
import { Toys } from "./app/shared/models/Products";
import { Tag } from "./app/shared/models/Tag";

export const sample_products: Bags[] = [
    {
      id: 1 ,
      name: 'Geanta verde',
      color: 'Verde',
      price: 10,
      favorite: false,
      stars: 4.5,
      imageUrl: 'assets/images/geanta-1.jpg',
      tags: ['Geanta', 'Verde'],
      size: 'S'
    },
    {
        id: 2 ,
        name: 'Rucsac Rosu',
        color: 'Rosu',
        price: 15,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-2.jpg',
        tags: ['Rucsac', 'Rosu'],
        size: 'M'
      },
      {
        id: 3,
        name: 'Geanta Albastra',
        color: 'Albastru',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-3.jpg',
        tags: ['Geanta', 'Albastra'],
        size: 'S'
      },
      {
        id: 4,
        name: 'Geanta Violet',
        color: 'Violet',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-4.jpg',
        tags: ['Geanta', 'Violet'],
        size: 'S'
      },
      {
        id: 5,
        name: 'Rucsac Portocaliu',
        color: 'Portocaliu',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-5.jpg',
        tags: ['Rucsac', 'Portocaliu'],
        size: 'M'
      },
      {
        id: 6,
        name: 'Genta Rosie',
        color: 'Rosu',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-6.jpg',
        tags: ['Genta', 'Rosie'],
        size: 'M'
      },
      {
        id: 7,
        name: 'Rucsac Albastru',
        color: 'Albastru',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-7.jpg',
        tags: ['Rucsac', 'Albastru'],
        size: 'S'
      },
      {
        id: 8,
        name: 'Geanta Neagra',
        color: 'Negru',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-8.jpg',
        tags: ['Rucsac', 'Negru'],
        size: 'M'
      },
      {
        id: 9,
        name: 'Geanta Rosie',
        color: 'Rosu',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-9.jpg',
        tags: ['Rosu', 'Rosu'],
        size: 'M'
      },
      {
        id: 10,
        name: 'Geanta Portocalie',
        color: 'Portocaliu',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-10.jpg',
        tags: ['Geanta', 'Portocaliu'],
        size: 'S'
      },
  ]

  export const sample_products_toys: Toys[]=[
      {
        id: 1 ,
        name: 'Jucarie Pisica',
        price: 10,
        favorite: false,
        stars: 4.5,
        imageUrl: 'data:image/jpeg;base64,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',
        tags: ['Papusa', 'Pisica', 'M'],
        size: 'M'
      },
  ]

  export const sample_tags:Tag[] = [
    {color: 'verde'},
    {color: 'rosu'},
    {color: 'albastru'},
    {color: 'violet'},
    {color: 'portocaliu'},
    {color: 'negru'},
    {color: 'albastru'},
    {color: 'negru'},
    {color: 'rosu'},
    {color: 'portocaliu'},
  ]