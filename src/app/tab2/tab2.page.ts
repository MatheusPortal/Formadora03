import { Component, OnInit } from '@angular/core';
import { IonContent, 
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonProgressBar } from '@ionic/angular/standalone';

import { ServiceFakestore } from '../services/service.fakestore';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [ IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonProgressBar ]
})


export class Tab2Page implements OnInit {
  public fakeStore: any;
  public storeKeys: string[] = [];
  public cardExibir: number = -1;


  constructor(private ServiceFakestore: ServiceFakestore) {}

  ngOnInit(): void {
    this.ServiceFakestore.getFakeStore().subscribe(
      (data) => {this.fakeStore = data; this.storeKeys = Object.keys(data); this.cardExibir = 0}
    );
  }

  nextCard() {
    if (this.cardExibir + 1 > this.storeKeys.length - 1) {
      this.cardExibir = 0;
    } else {
      this.cardExibir += 1;
    }
  }

  backCard() {
    if (this.cardExibir - 1 < 0) {
      this.cardExibir = this.storeKeys.length - 1;
    } else {
      this.cardExibir -= 1;
    }
  }
  
}
