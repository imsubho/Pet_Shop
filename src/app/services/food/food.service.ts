import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number) : Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'All')
      return this.getAll()
    else
      return this.getAll().filter(food => food.tags?.includes(tag));
  }


  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'Shampoo', count: 4 },
      { name: 'Food', count: 4 },
      { name: 'Organic', count: 3 },
      { name: 'Medicinal', count: 2 },
      { name: 'Chewy', count: 3 },
      { name: 'Chew', count: 2 },
      { name: 'Play', count: 4 },


    ]

  }


  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Real Paw',
        price: 10,
        deliveryTime: '30-40',
        favorite: true,
        origins: ['USA', 'INDIA'],
        star: 4.7,
        imageUrl: '/assets/shampoo-1.png',
        tags: ['Beauty', 'Shampoo', 'Organic'],
      },
      {
        id: 2,
        name: 'Scoope Pets',
        price: 15,
        deliveryTime: '30-35',
        favorite: true,
        origins: ['INDIA'],
        star: 4.5,
        imageUrl: '/assets/shampoo-2.jpg',
        tags: ['Beauty', 'Shampoo', 'Medicinal'],
      },
      {
        id: 3,
        name: 'Limberry',
        price: 18,
        deliveryTime: '30-40',
        favorite: true,
        origins: ['USA', 'UK'],
        star: 4.6,
        imageUrl: '/assets/shampoo-3.jpg',
        tags: ['Beauty', 'Shampoo', 'Medicinal'],
      },
      {
        id: 4,
        name: 'Fairy Tail',
        price: 12,
        deliveryTime: '40-45',
        favorite: true,
        origins: ['INDIA'],
        star: 4.0,
        imageUrl: '/assets/shampoo-4.jpg',
        tags: ['Beauty', 'Shampoo', 'Organic'],
      },
      {
        id: 5,
        name: 'Organix',
        price: 20,
        deliveryTime: '15-20',
        favorite: true,
        origins: ['USA', 'CANADA'],
        star: 4.7,
        imageUrl: '/assets/food-1.jpg',
        tags: ['Healthy', 'Food', 'Chewy'],
      },
      {
        id: 6,
        name: 'Wuf',
        price: 25,
        deliveryTime: '10-12',
        favorite: true,
        origins: ['USA'],
        star: 4.9,
        imageUrl: '/assets/food-2.jpg',
        tags: ['Healthy', 'Food', 'Chewy'],
      },
      {
        id: 7,
        name: 'Pet Pals',
        price: 15,
        deliveryTime: '12-16',
        favorite: true,
        origins: ['USA', 'INDIA', 'CANADA'],
        star: 4.3,
        imageUrl: '/assets/food-3.png',
        tags: ['Healthy', 'Food', 'Chewy'],
      },
      {
        id: 8,
        name: 'The Good Boy',
        price: 22,
        deliveryTime: '20',
        favorite: true,
        origins: ['UK'],
        star: 4.8,
        imageUrl: '/assets/food-4.png',
        tags: ['Healthy', 'Food', 'Organic'],
      },
      {
        id: 9,
        name: 'Chew Toys',
        price: 8,
        deliveryTime: '10',
        favorite: true,
        origins: ['INDIA'],
        star: 4.4,
        imageUrl: '/assets/toy-1.jpg',
        tags: ['Chew', 'Fun', 'Play'],
      },
      {
        id: 10,
        name: 'Chew Toys',
        price: 8,
        deliveryTime: '12',
        favorite: true,
        origins: ['INDIA'],
        star: 4.5,
        imageUrl: '/assets/toy-2.jpg',
        tags: ['Chew', 'Fun', 'Play'],
      },
      {
        id: 11,
        name: 'Ropes & Ball',
        price: 5,
        deliveryTime: '10',
        favorite: true,
        origins: ['INDIA'],
        star: 4.6,
        imageUrl: '/assets/toy-3.jpg',
        tags: ['Fun', 'Play'],
      },
      {
        id: 12,
        name: 'Ropes & Ball',
        price: 6,
        deliveryTime: '12',
        favorite: true,
        origins: ['INDIA'],
        star: 4.7,
        imageUrl: '/assets/toy-4.jpg',
        tags: ['Fun', 'Play'],
      },        
    ];
  }
}
