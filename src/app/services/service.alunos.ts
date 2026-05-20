import { Injectable } from '@angular/core';
import { ModelsAlunos } from '../models/models.alunos';

@Injectable({
  providedIn: 'root',
})
export class ServiceAlunos {
  private alunos: ModelsAlunos[] = [
    new ModelsAlunos('Matheus de Assis Portal', 26101721, 'Bonsucesso', 'Manhã', 'Olá, sou o Matheus de Assis Portal.', '')
  ];

  // metodo para pegar alunos
  getAlunos(): ModelsAlunos[] {
    return this.alunos;

  }

}
