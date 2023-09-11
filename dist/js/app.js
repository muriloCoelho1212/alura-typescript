import { NegociacaoController } from "./controllers/NegociacaoController.js";
const form = document.querySelector(".form");
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
