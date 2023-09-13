import { escapar } from "../decorators/escapar.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { View } from "./View.js"

export class NegociacaoView extends View<Negociacoes>{
    @escapar
    protected template(model: Negociacoes): string {
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
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    private formatar(data: Date){
        return new Intl.DateTimeFormat().format(data)
    }
}