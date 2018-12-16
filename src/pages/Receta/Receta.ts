import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-Receta',
  templateUrl: 'Receta.html'
})
export class RecetaPage {
 
  

  constructor(public navCtrl: NavController) {

  }
  items = [
    'Reposteria',
    'Pescados',
    'Pastas',
    'Sopas',
    'Postres',
    'Bebidas',
    'Ensaladas',
    'Platos',
    'salsas',
    'Carnes',
    
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}



  
