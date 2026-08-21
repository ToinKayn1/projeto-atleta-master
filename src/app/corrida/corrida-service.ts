import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Corrida } from "../models/Corrida";

@Injectable({
    providedIn: 'root'
})
export class CorridaService {
    constructor(private http: HttpClient) { }
   
    salvarCorrida(corrida: Corrida):Observable<Corrida> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
        
        return this.http.post<Corrida>(urlApi, corrida) 
    }

   listarCorridas(): Corrida[]{

      let listaCorrida: Corrida[] = []
        const urlApi =  `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
        
        this.http.get<Corrida[]>(urlApi)
        .subscribe({
            next: (CorridaAPI) => {
              listaCorrida = [...CorridaAPI]
                console.table(listaCorrida)
                return listaCorrida
            },
            error: (msgErro) => {
                return msgErro
            }
        })
        return listaCorrida
    }
    excluirCorrida(idCorrida: Number){
        const urlApi =  `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
        
        this.http.delete(urlApi + corrida.id)
        .subscribe({
            next: (repostaApi) => {
                return respostaAPI
            },
            error: (msgErro) => {
                return msgErro
            }
            })
    }
    alterarCorrida(corrida: Corrida){
        const urlApi =  `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
        
        this.http.put<Corrida[]>(urlApi, corrida)
        .subscribe({
            next: (repostaApi) => {
                return respostaAPI
            },
            error: (msgErro) => {
                return msgErro
            }
            })
            return {}
    }                
}