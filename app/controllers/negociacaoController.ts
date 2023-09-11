import { DiasDaSemana } from "../enums/dias-da-semana.js";
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

    public add(): void{
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
        if(!this.diaUtil(negociacao.data)){
            this.msgView.update("Apenas negociações em dias úteis são aceitas.")
            return
        }
        this.negociacoes.add(negociacao)
        this.limparForm() 
        this.atualizaView()
    }

    private diaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private limparForm(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes)
        this.msgView.update('Negociação adicionada com sucesso!')
    }
}