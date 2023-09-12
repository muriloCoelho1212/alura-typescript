export function LogarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let div = 1;
            let unidade = 'milissegundos';
            if (emSegundos) {
                div = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução do ${propertyKey} de ${(t2 - t1) / div} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}
