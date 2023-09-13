var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspecionaMetodo } from "../decorators/inspecionaMetodo.js";
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MsgView } from "../views/Msg-view.js";
import { NegociacaoView } from "../views/Negociacoes-views.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacaoView("#negociacoesView");
        this.msgView = new MsgView("#msgView");
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    add() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this.msgView.update("Apenas negociações em dias úteis são aceitas.");
            return;
        }
        this.negociacoes.add(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparForm();
        this.atualizaView();
    }
    importaDados() {
        this.negociacoesService.obterNegociacoes()
            .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this.negociacoes
                    .lista().some(negociacao => negociacao
                    .igual(negociacaoDeHoje));
            });
        })
            .then(negociacoesDeHoje => {
            negociacoesDeHoje.forEach(negociacao => {
                this.negociacoes.add(negociacao);
            });
            this.negociacoesView.update(this.negociacoes);
        });
    }
    diaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.msgView.update('Negociação adicionada com sucesso!');
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    LogarTempoDeExecucao(),
    inspecionaMetodo
], NegociacaoController.prototype, "add", null);
//# sourceMappingURL=NegociacaoController.js.map