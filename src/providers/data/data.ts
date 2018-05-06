
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { Item } from 'ionic-angular';



@Injectable()
export class DataProvider {

  constructor(private storage:Storage,) {
   // console.log('Hello DataProvider Provider');
  }
  saveData(item){
    this.storage.set('itemDetail',item)
  
  }

  getData(item){
    this.storage.get('itemDetail')
  }

}



