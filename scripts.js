
let todosOsPratos = document.querySelectorAll(".prato_de_comida")
let todosAsBebidas = document.querySelectorAll(".bebida")
let todosAsSobremesas = document.querySelectorAll(".sobremesa")

let selecionouOPrato = 0;
let selecionouaBebida = 0;
let selecionouASobremesa = 0;
let selecionouOsTres = 0;

let o_prato = "";
let valor_prato = 0.0;
let a_bebida = "";
let valorbebida = 0.0;
let a_sobremesa = "";
let valor_sobremesa = 0.0;


function selecionar_prato(indice) {
    for (let i = 0; i < todosOsPratos.length; i++) {
        if (i != indice) {
            todosOsPratos[i].classList.remove("borda-azul")
        }
        else {
            todosOsPratos[i].classList.toggle("borda-azul")
            if (todosOsPratos[i].classList.contains("borda-azul") == true) {
                selecionouOPrato = 1;
                o_prato = todosOsPratos[i].querySelector("h3").innerText
                valor_prato = parseFloat(todosOsPratos[i].querySelector("h4").innerText.slice(2).replace(',', '.'))

                //oPratoPedido(o_prato)
                //valorDoPratoPedido(valor_prato)
                //console.log(o_prato)
                //console.log(valor_prato)

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

                a_bebida = todosAsBebidas[i].querySelector("h3").innerText
                valorbebida = parseFloat(todosAsBebidas[i].querySelector("h4").innerText.slice(2).replace(',', '.'))
                //console.log(a_bebida)
                //console.log(valorbebida)
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
                a_sobremesa = todosAsSobremesas[i].querySelector("h3").innerText
                valor_sobremesa = parseFloat(todosAsSobremesas[i].querySelector("h4").innerText.slice(2).replace(',', '.'))
                //console.log(a_sobremesa)
                //console.log(valor_sobremesa)


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
        let clicarEmComprar = function () {
            let elemento = document.querySelector("footer > div");
            alert("Selecione o(s) item(ns) faltante(s)");
        }

        let botao = document.querySelector("footer > div")
        botao.onclick = clicarEmComprar;
    }

    if (selecionouOPrato === 1 && selecionouaBebida === 1 && selecionouASobremesa === 1) {
        let comprar = document.querySelector("footer > div > p");
        comprar.innerHTML = 'Finalizar Pedido';

        let fundoClicar = document.querySelector("footer > div");
        if (fundoClicar.classList.contains("comprar-verde") == false) {
            fundoClicar.classList.add("comprar-verde");
        }
        if (fundoClicar.classList.contains("falta-selecionar-item")) {
            fundoClicar.classList.remove("falta-selecionar-item");
        }

        let clicarEmComprar = function () {
            let elemento = document.querySelector("footer > div");

            document.querySelector(".confirmacao-finalizar-pedido-background").classList.remove("escondido");
            

            document.querySelector("#prato").innerHTML = o_prato;
            document.querySelector("#bebida").innerHTML = a_bebida;
            document.querySelector("#sobremesa").innerHTML = a_sobremesa;
            
            document.querySelector("#valor-prato").innerHTML = parseFloat(valor_prato).toFixed(2).replace('.',',');
            document.querySelector("#valor-bebida").innerHTML = parseFloat(valorbebida).toFixed(2).replace('.',',');
            document.querySelector("#valor-sobremesa").innerHTML = parseFloat(valor_sobremesa).toFixed(2).replace('.',',');

            document.querySelector("#valor-total").innerHTML = 'R$ ' + parseFloat(valor_prato + valorbebida + valor_sobremesa).toFixed(2).replace('.',',');

            let texto_whats = `Olá, gostaria de fazer o pedido: \n\n - Prato:  ${o_prato}\n - Bebida: ${a_bebida}\n - Sobremesa: ${a_sobremesa}\n\n Total: R$ ${parseFloat(valor_prato + valorbebida + valor_sobremesa).toFixed(2).replace('.',',')}  `;

            texto_whats = window.encodeURIComponent(texto_whats);

            let celular = 5547968761442

            let boraProWhatsapp = function(){
                window.open("https://wa.me/" + celular + "?text=" + texto_whats)
            }

            let tudoCerto = document.querySelector("#bora-pro-whats");
            tudoCerto.onclick = boraProWhatsapp;

            let voltarProPedido = function(){
                document.querySelector(".confirmacao-finalizar-pedido-background").classList.add("escondido");
            }

            let voltar = document.querySelector("#retornar-ao-pedido");
            voltar.onclick = voltarProPedido;
        }
        let botao = document.querySelector("footer > div");
        botao.onclick = clicarEmComprar;
    }
}
