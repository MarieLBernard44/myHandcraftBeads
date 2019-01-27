import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal-confirm-return",
  templateUrl: "./modal-confirm-return.page.html",
  styleUrls: ["./modal-confirm-return.page.scss"]
})
export class ModalConfirmReturnPage implements OnInit {
  constructor(private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {}

  returnGrillePage() {
    this.modalCtrl.dismiss();
    console.log("grille");
  }
}
