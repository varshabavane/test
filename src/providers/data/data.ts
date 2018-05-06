
import { Injectable } from '@angular/core';
//import { Storage } from '@ionic/storage';



@Injectable()
export class DataProvider {

  constructor(private storage:Storage,) {
   // console.log('Hello DataProvider Provider');
  }

}

// saveData(item){
//   this.storage.set('itemDetail',item)
// }

// getData(){
//    return this.storage.get('itemDetail')
// }
