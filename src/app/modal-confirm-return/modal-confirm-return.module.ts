import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalConfirmReturnPage } from './modal-confirm-return.page';

const routes: Routes = [
  {
    path: '',
    component: ModalConfirmReturnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalConfirmReturnPage]
})
export class ModalConfirmReturnPageModule {}
