export abstract class View<T> {
    protected elemento: HTMLElement
    private escape = false
    constructor(seletor: string, escape?: boolean){
        const elemento = document.querySelector(seletor) 
        if(elemento){
            this.elemento = elemento as HTMLElement
        } else{
            throw Error("Seletor não encontrado.")
        }
        if(escape){
            this.escape = escape
        }
    }

    public update(model: T): void{
        let template = this.template(model)
        if(this.escape){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        } 
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string
}