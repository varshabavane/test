import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
//impor { HomePage } from "../home/home";
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
    public view: ViewController //private storage:Storage
  ) {}

  // ionViewDidLoad() {
  //   //   //-console.log('ionViewDidLoad AddItemsPage');
  //   this.date = this.navParams.get("items").date;
  //   this.time = this.navParams.get("items").time;
  //   this.time = this.navParams.get("items").title;
  //   this.time = this.navParams.get("items").description;
  // }

  save() {
    let addItems = {
      date: this.date,
      time: this.time,
      title: this.title,
      description: this.description
    };
    this.view.dismiss(addItems);

    //this.items.push(addItems);
  }

  // test(){
  //   this.data.saveData(this.items)
  // }

  close() {
    this.view.dismiss();
  }
}
