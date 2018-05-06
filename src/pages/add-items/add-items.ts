import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
//import { Storage } from "@ionic/storage";
//import { HomePage } from "../home/home";

@Component({
  selector: "page-add-items",
  templateUrl: "add-items.html"
})
export class AddItemsPage {
  items = [];
  date;
  time;
  title;
  description;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider,
    //private storage:Storage
  ) {}

  ionViewDidLoad() {
    //-console.log('ionViewDidLoad AddItemsPage');
    this.date = this.navParams.get("items").date;
    this.time = this.navParams.get("items").time;
    this.time = this.navParams.get("items").title;
    this.time = this.navParams.get("items").description;
  }

  save() {
    let addItems = {
      date: this.date,
      time: this.time,
      title: this.title,
      description: this.description
    };

    this.items.push(addItems);
    
  }

  close() {}
}
