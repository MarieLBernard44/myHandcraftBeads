import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public ligne: number;
  public colonne: number;
  public type: string;

  public gridForm: FormGroup;
  public msgErreurMin: string;
  public msgErreurMax: string;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    // VALIDATION FORMULAIRE
    this.validForm();

    // GESTION DES MESSAGES D'ERREUR
    this.msgErreurMin = "Veuillez saisir un nombre minimum de 1.";
    this.msgErreurMax = "Veuillez saisir un nombre inférieur ou égal à 100.";
  }

  // VALIDATION DU FORMULAIRE
  validForm() {
    this.gridForm = this.formBuilder.group({
      ligne: [
        "",
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(100)
        ])
      ],
      colonne: [
        "",
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(100)
        ])
      ],
      type: ["", Validators.required]
    });
  }

  // RECUPERATION DE LA VALEUR DU RADIO BUTTON
  typeValue(event) {
    this.type = event.target.value;
  }

  // Navigation vers la page Grille avec passage des données "ligne" et "colonne"
  public goToGrille() {
    this.router.navigate([
      "/grille",
      {
        ligne: this.gridForm.get("ligne").value,
        colonne: this.gridForm.get("colonne").value,
        type: this.type
      }
    ]);
  }
}
