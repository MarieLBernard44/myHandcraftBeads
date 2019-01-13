import { HomePage } from "./../home/home.page";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-grille",
  templateUrl: "./grille.page.html",
  styleUrls: ["./grille.page.scss"]
})
export class GrillePage implements OnInit {
  public colonne: number;
  public ligne: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.colonne = params["colonne"];
      this.ligne = params["ligne"];
    });
  }
}
