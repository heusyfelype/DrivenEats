
let todosOsPratos = document.querySelectorAll(".prato_de_comida")
let todosAsBebidas = document.querySelectorAll(".bebida")
let todosAsSobremesas = document.querySelectorAll(".sobremesa")

let selecionouOPrato = false;
let selecionouaBebida = false;
let selecionouASobremesa = false;
let selecionouOsTres = false;

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
            todosOsPratos[i].querySelector(".icone").classList.add("escondido")
        }
        else {
            todosOsPratos[i].classList.toggle("borda-azul")
            todosOsPratos[i].querySelector(".icone").classList.toggle("escondido")
            
            if (todosOsPratos[i].classList.contains("borda-azul") == true) {
                selecionouOPrato = true;
                o_prato = todosOsPratos[i].querySelector("h3").innerText
                valor_prato = parseFloat(todosOsPratos[i].querySelector("h4").innerText.slice(2).replace(',', '.'))

                //oPratoPedido(o_prato)
                //valorDoPratoPedido(valor_prato)
                //console.log(o_prato)
                //console.log(valor_prato)

            } else {
                selecionouOPrato = false;
            }

        }
    }

    continuar()
}

function selecionar_bebida(indice) {
    for (let i = 0; i < todosAsBebidas.length; i++) {
        if (i != indice) {
            todosAsBebidas[i].classList.remove("borda-azul")
            todosAsBebidas[i].querySelector(".icone").classList.add("escondido")
        }
        else {
            todosAsBebidas[i].classList.toggle("borda-azul")
            todosAsBebidas[i].querySelector(".icone").classList.toggle("escondido")
            if (todosAsBebidas[i].classList.contains("borda-azul")) {
                selecionouaBebida = true;

                a_bebida = todosAsBebidas[i].querySelector("h3").innerText
                valorbebida = parseFloat(todosAsBebidas[i].querySelector("h4").innerText.slice(2).replace(',', '.'))
                //console.log(a_bebida)
                //console.log(valorbebida)
            } else {
                selecionouaBebida = false;
            }
        }
    }
    continuar()
}

function selecionar_sobremesa(indice) {
    for (let i = 0; i < todosAsSobremesas.length; i++) {
        if (i != indice) {
            todosAsSobremesas[i].classList.remove("borda-azul")
            todosAsSobremesas[i].querySelector("ion-icon").classList.add("escondido")
        }
        else {
            todosAsSobremesas[i].classList.toggle("borda-azul")
            todosAsSobremesas[i].querySelector(".icone").classList.toggle("escondido")
            if (todosAsSobremesas[i].classList.contains("borda-azul")) {
                selecionouASobremesa = true;
                a_sobremesa = todosAsSobremesas[i].querySelector("h3").innerText
                valor_sobremesa = parseFloat(todosAsSobremesas[i].querySelector("h4").innerText.slice(2).replace(',', '.'))
                //console.log(a_sobremesa)
                //console.log(valor_sobremesa)


            } else {
                selecionouASobremesa = false;
            }
        }
    }
    continuar()
}


function continuar() {

    if (selecionouOPrato === false || selecionouaBebida === false || selecionouASobremesa === false) {
        let fundoClicar = document.querySelector("footer > div");
        if (fundoClicar.classList.contains("comprar-verde") == true) {
            fundoClicar.classList.remove("comprar-verde")
        } if (fundoClicar.classList.contains("falta-selecionar-item") == false) {
            fundoClicar.classList.add("falta-selecionar-item")
        }
        /* let clicarEmComprar = function () {
            let elemento = document.querySelector("footer > div");
            alert("Selecione o(s) item(ns) faltante(s)");
        }

        let botao = document.querySelector("footer > div")
        botao.onclick = clicarEmComprar; */
    }

    if (selecionouOPrato === true && selecionouaBebida === true && selecionouASobremesa === true) {
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
            //let elemento = document.querySelector("footer > div");
            let nome = null;
            let endereco = null;
            while (nome == null) {
                nome = prompt("Qual o seu nome?");
            }
            while (endereco == null){
                endereco = prompt("Qual o seu endereço?")
            }

            document.querySelector(".confirmacao-finalizar-pedido-background").classList.remove("escondido");

            
            document.querySelector("#prato").innerHTML = o_prato;
            document.querySelector("#bebida").innerHTML = a_bebida;
            document.querySelector("#sobremesa").innerHTML = a_sobremesa;
            
            document.querySelector("#valor-prato").innerHTML = parseFloat(valor_prato).toFixed(2).replace('.',',');
            document.querySelector("#valor-bebida").innerHTML = parseFloat(valorbebida).toFixed(2).replace('.',',');
            document.querySelector("#valor-sobremesa").innerHTML = parseFloat(valor_sobremesa).toFixed(2).replace('.',',');

            document.querySelector("#valor-total").innerHTML = 'R$ ' + parseFloat(valor_prato + valorbebida + valor_sobremesa).toFixed(2).replace('.',',');

            let texto_whats = `Olá, gostaria de fazer o pedido: \n\n - Prato:  ${o_prato}\n - Bebida: ${a_bebida}\n - Sobremesa: ${a_sobremesa}\n\n Total: R$ ${parseFloat(valor_prato + valorbebida + valor_sobremesa).toFixed(2).replace('.',',')} \n\n Nome: ${nome} \n Endereço: ${endereco}`;
                texto_whats = window.encodeURIComponent(texto_whats);

            let celular = 5547984280676

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
