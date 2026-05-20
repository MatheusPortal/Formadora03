import { Component, OnInit } from '@angular/core';
import { IonContent, 
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonProgressBar,
  IonButtons,
  IonTitle,
  IonToolbar } from '@ionic/angular/standalone';
import { ServiceFakestore } from '../services/service.fakestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent, 
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle, IonProgressBar,
  IonButtons,
  IonTitle,
  IonToolbar, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonProgressBar ],
})


export class Tab3Page implements OnInit {
  public fakeStore: any;
  public storeKeys: string[] = [];
  public exibirCards: boolean = false;

  constructor(private ServiceFakestore: ServiceFakestore) {}
  
  ngOnInit(): void {
    this.ServiceFakestore.getFakeStore().subscribe(
      (data) => {this.fakeStore = data; this.storeKeys = Object.keys(data)}
    );
  }

  modoExibir(estado: boolean): void {
    this.exibirCards = estado;
  }
}
