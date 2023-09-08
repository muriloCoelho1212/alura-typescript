import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date().toLocaleDateString(), 50, 100)
console.log(negociacao.volume)