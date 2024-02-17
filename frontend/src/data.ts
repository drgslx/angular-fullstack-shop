import { Product } from "./app/shared/models/Product";

export const sample_products: Product[] = [
    {
      id: 1 ,
      name: 'Geanta verde',
      color: 'verde',
      price: 10,
      favorite: false,
      stars: 4.5,
      imageUrl: 'assets/images/geanta-1.jpg',
      tags: ['Geanta', 'Verde', 'S'],
      size: 'S'
    },
    {
        id: 2 ,
        name: 'Rucsac Rosu',
        color: 'rosie',
        price: 15,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-2.jpg',
        tags: ['Rucsac', 'Rosu', 'M'],
        size: 'M'
      },
      {
        id: 3,
        name: 'Geanta Albastra',
        color: 'albastra',
        price: 15,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/images/geanta-3.jpg',
        tags: ['Geanta', 'Albastra', 'S'],
        size: 'S'
      },
  ]