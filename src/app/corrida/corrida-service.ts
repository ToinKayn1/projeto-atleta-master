import { Injectable } from "../../../node_modules/@angular/core/types/core";
import { Observable } from "../../../node_modules/rxjs/dist/types/index";
import{Httpcliente} from '@angular/common/http';
import { Corrida } from "../models/Corrida";

@Injectable({
    providedIn: 'root'
})
export class CorridaService {
    constructor(private http: Httpcliente){}
    salvarCorrida(corrida: Corrida){
        let resposta = ''

        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

        this.http.post<Corrida>urlApi, corrida)
        .subscribe({
            next: (respostaApi) => {
                retur respostaApi
            },
            console.error(: (msgErro) => {
                return msgErro
            }
            );

        })
        return []
    }

   listarCorridas(): Corrida[]{

      let listaCorrida: Corrida[] = []
        const urlApi =  `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`
        
        this.http.get<Corrida[]>(urlApi)
        .subscribe({
            next: (CorridaAPI) => {
              listaCorrida = [...CorridaAPIg]
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
        const urlApi =  `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`
        
        this.http.delete<Corrida[]>(urlApi)
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
        const urlApi =  `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`
        
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