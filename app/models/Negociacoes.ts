import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []

    public add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[]{
        return this.negociacoes
    }
}

const negociacoes = new Negociacoes()
negociacoes.lista().forEach(n => {
    console.log(n)
})