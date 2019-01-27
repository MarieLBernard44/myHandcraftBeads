import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ModalConfirmReturnPage } from "../modal-confirm-return/modal-confirm-return.page";

@Component({
  selector: "app-grille",
  templateUrl: "./grille.page.html",
  styleUrls: ["./grille.page.scss"]
})
export class GrillePage implements OnInit {
  public colonne: number;
  public ligne: number;
  public type: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.colonne = params["colonne"];
      this.ligne = params["ligne"];
      this.type = params["type"];
    });
  }

  // OUVERTURE D'UNE MODALE DE CONFIRMATION DE RETOUR AU FORMULAIRE
  async confirmReturn() {
    const modal = await this.modalCtrl.create({
      component: ModalConfirmReturnPage
    });
    return await modal.present();
  }
}
