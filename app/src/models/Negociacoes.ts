import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes implements Modelo<Negociacao>{
    private negociacoes: Negociacao[] = []
    
    public add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[]{
        return this.negociacoes
    }

    public paraTexto(): string{
        return JSON.stringify(this.negociacoes, null, 2)
    }

    public igual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }
}