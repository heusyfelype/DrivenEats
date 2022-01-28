let todosOsPratos = document.querySelectorAll(".prato_de_comida")
let todosAsBebidas = document.querySelectorAll(".bebida")
let todosAsSobremesas = document.querySelectorAll(".sobremesa")

let selecionouOPrato = 0;
let selecionouaBebida = 0;
let selecionouASobremesa = 0;
let selecionouOsTres = 0;

function selecionar_prato(indice) {
    for (let i = 0; i < todosOsPratos.length; i++) {
        if (i != indice) {
            todosOsPratos[i].classList.remove("borda-azul")
        }
        else {
            todosOsPratos[i].classList.toggle("borda-azul")
            if (todosOsPratos[i].classList.contains("borda-azul")) {
                selecionouOPrato = 1;
            } else {
                selecionouOPrato = 0;
            }
        }
    }
}
function selecionar_bebida(indice) {
    for (let i = 0; i < todosAsBebidas.length; i++) {
        if (i != indice) {
            todosAsBebidas[i].classList.remove("borda-azul")
        }
        else {
            todosAsBebidas[i].classList.toggle("borda-azul")
            if (todosAsBebidas[i].classList.contains("borda-azul")) {
                selecionouaBebida = 1;
            } else {
                selecionouaBebida = 0;
            }
        }
    }
}

function selecionar_sobremesa(indice) {
    for (let i = 0; i < todosAsSobremesas.length; i++) {
        if (i != indice) {
            todosAsSobremesas[i].classList.remove("borda-azul")
        }
        else {
            todosAsSobremesas[i].classList.toggle("borda-azul")
            if (todosAsSobremesas[i].classList.contains("borda-azul")) {
                selecionouASobremesa = 1;
            } else {
                selecionouASobremesa = 0;
            }
        }
    }
}

function comprar(){
selecionouOsTres = selecionouOPrato + selecionouaBebida + selecionouASobremesa;

if (selecionouOsTres != 3){
    alert("Selecione um de cada")
}
}