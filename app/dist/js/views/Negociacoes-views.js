var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escapar } from "../decorators/escapar.js";
import { View } from "./View.js";
export class NegociacaoView extends View {
    template(model) {
        return `
            <table class="table table-light table-hover table-striped table-borderless rounded">
                <thead>
                    <tr>
                        <th class="text-center">Data</th>
                        <th class="text-center">Quantidade</th>
                        <th class="text-center">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td class="text-center">${this.formatar(negociacao.data)}</td>
                                <td class="text-center">${negociacao.quantidade}</td>
                                <td class="text-center">${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
__decorate([
    escapar
], NegociacaoView.prototype, "template", null);
//# sourceMappingURL=Negociacoes-views.js.map