import { inspecionaMetodo } from "../decorators/inspecionaMetodo.js"
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js"

export abstract class View<T> {
    protected elemento: HTMLElement
    constructor(seletor: string){
        const elemento = document.querySelector(seletor) 
        if(elemento){
            this.elemento = elemento as HTMLElement
        } else{
            throw Error("Seletor não encontrado.")
        }
    }

    @LogarTempoDeExecucao()
    @inspecionaMetodo
    public update(model: T): void{
        let template = this.template(model)
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string
}