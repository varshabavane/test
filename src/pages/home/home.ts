import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AddItemsPage } from "../add-items/add-items";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items = [];
  date;
  time;
  description;
  title;

  constructor(public navCtrl: NavController, public navparams: NavParams, private data:DataProvider) {}

  add(item) {
    this.navCtrl.push(AddItemsPage, {});
  }

  // save(item){
  //   this.data.saveData()
  // }
}
