import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes()

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    add(): void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.add(negociacao)
        const negociacoes = this.negociacoes.lista()
        console.log(negociacoes)
        this.limparForm()
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, "/"))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date, quantidade, valor)
    }

    limparForm(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
}