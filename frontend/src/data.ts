import { Product } from "./app/shared/models/Product";

export const sample_foods: Product[] = [
    {
      id: 1 ,
      name: 'Geanta verde',
      color: 'green',
      price: 10,
      favorite: true,
      stars: 4.5,
      imageUrl: 'assets/products/geanta-1.jpg',
      tags: ['Geanta', 'Verde', 'S'],
      size: 'S'
    },
    {
        id: 2 ,
        name: 'Rucsac Rosu',
        color: 'red',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/products/geanta-2.jpg',
        tags: ['Rucsac', 'Rosu', 'M'],
        size: 'M'
      },
      {
        id: 3,
        name: 'Geanta Albastra',
        color: 'blue',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/products/geanta-3.jpg',
        tags: ['Geanta', 'Albastra', 'S'],
        size: 'S'
      },
  ]