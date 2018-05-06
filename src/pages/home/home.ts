import { Component } from "@angular/core";
import { NavController, ModalController,ViewController } from "ionic-angular";
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

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public data: DataProvider,
    public View:ViewController) {}

  add(item) {
    //this.navCtrl.push(AddItemsPage, {});
    let add = this.modalCtrl.create(AddItemsPage);
    add.onDidDismiss(item => {
      if (item) {
        this.save(item);
      }
    });
    add.present();
  }

  save(item) {
    this.data.saveData(this.items);
  }

  }
