import { escapar } from "../decorators/escapar.js"
import { Negociacoes } from "../models/Negociacoes.js"
import { View } from "./View.js"

export class NegociacaoView extends View<Negociacoes>{
    @escapar
    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
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