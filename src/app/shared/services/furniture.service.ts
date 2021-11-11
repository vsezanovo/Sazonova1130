import { Injectable } from '@angular/core';
import { MyFurniture } from '../models/furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  
  myFurnitures: MyFurniture[] = [{name:'Стол', price: 3000}];
  constructor() { }

 
}
