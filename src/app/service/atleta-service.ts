import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  private atletas: Pessoa[] = [];

  adicionar(pessoa: Pessoa): void {
    pessoa.id = this.atletas.length > 0
      ? Math.max(...this.atletas.map(atleta => atleta.id)) + 1
      : 1;

    this.atletas.push(pessoa);
  }

  listar(): Pessoa[] {
    console.table(this.atletas);
    return this.atletas;
  }

  private localizarAtleta(idAtleta: number): number {
    return this.atletas.findIndex(atleta => atleta.id === idAtleta);
  }

  remover(posicaoArray: number): void {
    if (posicaoArray >= 0 && posicaoArray < this.atletas.length) {
      this.atletas.splice(posicaoArray, 1);
    }
  }

  remover2(pessoa: Pessoa): void {
    this.atletas = this.atletas.filter(atleta => atleta.id !== pessoa.id);
  }

  alterar(pessoa: Pessoa): void {
    const posArray = this.localizarAtleta(pessoa.id);

    if (posArray >= 0) {
      this.atletas[posArray] = pessoa;
    }
  }
}
