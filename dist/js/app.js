import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date().toLocaleDateString())
console.log(negociacao.volume)