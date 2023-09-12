import { NegociacaoController } from "./controllers/NegociacaoController.js";
const form = document.querySelector(".form");
const btn = document.querySelector("#botao-importa");
const controller = new NegociacaoController();
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        controller.add();
    });
}
else {
    throw Error("Aplicação não iniciada. Verifique a existência do formulário.");
}
if (btn) {
    btn.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error("Botão importar não foi encontrado");
}
