import { Component, OnInit } from '@angular/core';
import { IonContent, IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle,  } from '@ionic/angular/standalone';
import { ServiceAlunos } from '../services/service.alunos';
import { ModelsAlunos } from '../models/models.alunos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle ],
})


export class Tab1Page implements OnInit {
  // atribudo alunos do tipo modelsalunos
  public alunos: ModelsAlunos[] = [];

  // instanciando meu serviço alunos do tipo servicealunos
  constructor(private ServiceAlunos: ServiceAlunos) {}

  // iniciando a coleta de dados do meu serviço de alunos
  ngOnInit(): void {
    this.alunos = this.ServiceAlunos.getAlunos();
  }
}
