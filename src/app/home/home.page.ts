import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public ligne: number;
  public colonne: number;
  // public type: string;

  constructor(private router: Router) {}

  // Navigation vers la page Grille avec passage des données "ligne" et "colonne"
  public goToGrille() {
    this.router.navigate([
      "/grille",
      {
        ligne: this.ligne,
        colonne: this.colonne
        // type: this.type
      }
    ]);
  }
}
