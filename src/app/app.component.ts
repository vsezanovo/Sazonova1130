import { Component, OnInit } from '@angular/core';
import { MyFurniture } from './shared/models/furniture.model';
import { FurnitureService } from './shared/services/furniture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sazonova1130';
  constructor(
    private furnitureService: FurnitureService
    ){}
  ngOnInit(){ 
  }
}


