import { Component, OnInit } from '@angular/core';
import { IonContent, 
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, } from '@ionic/angular/standalone';

import { ServiceFakestore } from '../services/service.fakestore';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [ IonContent,   IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, ]
})


export class Tab2Page implements OnInit {
  public fakeStore: any;
  public storeKeys: string[] = [];
  
  constructor(private ServiceFakestore: ServiceFakestore) {}

  ngOnInit(): void {
    this.ServiceFakestore.getFakeStore().subscribe(
      (data) => {this.fakeStore = data; this.storeKeys = Object.keys(data); console.log(data)}
    );
  }

  
}
