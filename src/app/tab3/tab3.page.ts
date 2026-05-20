import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ServiceFakestore } from '../services/service.fakestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent ],
})


export class Tab3Page implements OnInit {
  public fakeStore: any;
  public storeKeys: string[] = [];
  
  constructor(private ServiceFakestore: ServiceFakestore) {}
  
  ngOnInit(): void {
    this.ServiceFakestore.getFakeStore().subscribe(
      (data) => {this.fakeStore = data; this.storeKeys = Object.keys(data); console.log(data)}
    );
  }
}
