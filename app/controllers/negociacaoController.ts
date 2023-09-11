import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MsgView } from "../views/Msg-view.js";
import { NegociacaoView } from "../views/Negociacoes-views.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacaoView("#negociacoesView")
    private msgView = new MsgView("#msgView")

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes)
    }

    add(): void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.add(negociacao)
        this.negociacoesView.update(this.negociacoes)
        this.msgView.update('Negociação adicionada com sucesso!')
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