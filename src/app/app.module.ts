import { ModalConfirmReturnPageModule } from "./modal-confirm-return/modal-confirm-return.module";
import { ModalConfirmReturnPage } from "./modal-confirm-return/modal-confirm-return.page";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { GrillePageModule } from "./grille/grille.module";
import { GrillePage } from "./grille/grille.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [GrillePage, ModalConfirmReturnPage],
  exports: [FormsModule, ReactiveFormsModule],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    GrillePageModule,
    ModalConfirmReturnPageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
