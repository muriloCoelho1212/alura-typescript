import { NegociacaoController } from "./controllers/negociacaoController.js";

const form = document.querySelector(".form")
const controller = new NegociacaoController()

form.addEventListener("submit", (e) => {
    e.preventDefault()

    controller.add()
})