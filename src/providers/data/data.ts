import { Injectable } from "@angular/core";
/* to store data locally*/
import { Storage } from "@ionic/storage";

@Injectable()
export class DataProvider {
  constructor(private storage: Storage) {
    // console.log('Hello DataProvider Provider');
  }
  saveData(item) {
    this.storage.set("itemDetail", item);
  }

  getData() {
    this.storage.get("itemDetail");
  }
}
