import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonList, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ApiService } from '../services/api.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('list') list: IonList;
  @ViewChild('infinite') ionInfinite: IonInfiniteScroll;
  users: UserModel[];
  page: number = 1;

  constructor(public api: ApiService, public modalController: ModalController) {}

  ngOnInit() {
    this.api.getUsers(this.page).subscribe((users) => (this.users = users));
  }
  loadData(event) {
    console.log(event);
  }

  openModal(id: number) {
    this.modalController.create({
      component: ModalPage,
      componentProps: {
        user: this.users.find(x => x.id === id)
      }
    }).then(modal => modal.present());
  }
}
