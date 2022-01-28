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
            if (todosOsPratos[i].classList.contains("borda-azul") == true) {
                selecionouOPrato = 1;
            } else {
                selecionouOPrato = 0;
            }

        }
    }
    continuar()
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
    continuar()
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
    continuar()
}


function continuar() {
    if (selecionouOPrato === 0 || selecionouaBebida === 0 || selecionouASobremesa === 0) {
        let fundoClicar = document.querySelector("footer > div");
        if (fundoClicar.classList.contains("comprar-verde") == true) {
            fundoClicar.classList.remove("comprar-verde")
        } if (fundoClicar.classList.contains("falta-selecionar-item") == false) {
            fundoClicar.classList.add("falta-selecionar-item")
        }

        let botao = document.querySelector("footer > div")
        botao.onclick = clicarEmComprar;
        let clicarEmComprar = function () {
            let elemento = document.querySelector("footer > div");
            alert("Selecione o item faltante");
        }
        
    }

    if (selecionouOPrato === 1 && selecionouaBebida === 1 && selecionouASobremesa === 1) {
        let comprar = document.querySelector("footer > div > p");
        comprar.innerHTML = 'Comprar';

        let fundoClicar = document.querySelector("footer > div");
        if (fundoClicar.classList.contains("comprar-verde") == false) {
            fundoClicar.classList.add("comprar-verde");
        }
        if (fundoClicar.classList.contains("falta-selecionar-item")) {
            fundoClicar.classList.remove("falta-selecionar-item");
        }

        let botao = document.querySelector("footer > div")
        botao.onclick = clicarEmComprar;

        let clicarEmComprar = function () {
            let elemento = document.querySelector("footer > div");
            alert("Continuar para frente");
        }

        
    }

}