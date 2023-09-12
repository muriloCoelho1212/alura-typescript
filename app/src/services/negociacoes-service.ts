import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacoesService {
    public async obterNegociacaoDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            })
    }
}