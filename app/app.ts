import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { NegociacaoView } from "./views/Negociacoes-views.js";

const form = document.querySelector(".form")
const controller = new NegociacaoController()

form.addEventListener("submit", (e) => {
    e.preventDefault()

    controller.add()
})