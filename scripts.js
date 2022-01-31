
let todosOsPratos = document.querySelectorAll(".prato_de_comida");
let todosAsBebidas = document.querySelectorAll(".bebida");
let todosAsSobremesas = document.querySelectorAll(".sobremesa");

let selecionouOPrato = false;
let selecionouaBebida = false;
let selecionouASobremesa = false;

let oPrato = "";
let valorPrato = 0.0;
let aBebida = "";
let valorBebida = 0.0;
let aSobremesa = "";
let valorSobremesa = 0.0;


function selecionar_prato(indice) {
    for (let i = 0; i < todosOsPratos.length; i++) {
        if (i != indice) {
            todosOsPratos[i].classList.remove("borda-verde");
            todosOsPratos[i].querySelector(".icone").classList.add("escondido");
        }
        else {
            todosOsPratos[i].classList.toggle("borda-verde");
            todosOsPratos[i].querySelector(".icone").classList.toggle("escondido");
            
            if (todosOsPratos[i].classList.contains("borda-verde") == true) {
                selecionouOPrato = true;
                oPrato = todosOsPratos[i].querySelector("h3").innerText;
                valorPrato = parseFloat(todosOsPratos[i].querySelector("h4").innerText.slice(2).replace(',', '.'));
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
            todosAsBebidas[i].classList.remove("borda-verde");
            todosAsBebidas[i].querySelector(".icone").classList.add("escondido");
        }
        else {
            todosAsBebidas[i].classList.toggle("borda-verde");
            todosAsBebidas[i].querySelector(".icone").classList.toggle("escondido");
            if (todosAsBebidas[i].classList.contains("borda-verde")) {
                selecionouaBebida = true;
                aBebida = todosAsBebidas[i].querySelector("h3").innerText;
                valorBebida = parseFloat(todosAsBebidas[i].querySelector("h4").innerText.slice(2).replace(',', '.'));
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
            todosAsSobremesas[i].classList.remove("borda-verde");
            todosAsSobremesas[i].querySelector("ion-icon").classList.add("escondido");
        }
        else {
            todosAsSobremesas[i].classList.toggle("borda-verde");
            todosAsSobremesas[i].querySelector(".icone").classList.toggle("escondido");
            if (todosAsSobremesas[i].classList.contains("borda-verde")) {
                selecionouASobremesa = true;
                aSobremesa = todosAsSobremesas[i].querySelector("h3").innerText;
                valorSobremesa = parseFloat(todosAsSobremesas[i].querySelector("h4").innerText.slice(2).replace(',', '.'));
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
            fundoClicar.classList.remove("comprar-verde");
        } if (fundoClicar.classList.contains("falta-selecionar-item") == false) {
            fundoClicar.classList.add("falta-selecionar-item");
        }
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
            let nome = prompt("Qual o seu nome?");
            let endereco = prompt("Qual o seu endereço?");
            //Aqui poderiam ser colocadas algumas condicionais para verificar se o campo nome e endereço foram preenchidos, e caso não, solicitar novamente e impedir a continuidade, mas por enquanto vou deixar sem!

            document.querySelector("body").classList.add("body__esconder-scroll");

            document.querySelector(".confirmacao-finalizar-pedido-background").classList.remove("escondido");

            document.querySelector("#prato").innerHTML = oPrato;
            document.querySelector("#bebida").innerHTML = aBebida;
            document.querySelector("#sobremesa").innerHTML = aSobremesa;

            document.querySelector("#valor-prato").innerHTML = parseFloat(valorPrato).toFixed(2).replace('.',',');
            document.querySelector("#valor-bebida").innerHTML = parseFloat(valorBebida).toFixed(2).replace('.',',');
            document.querySelector("#valor-sobremesa").innerHTML = parseFloat(valorSobremesa).toFixed(2).replace('.',',');

            document.querySelector("#valor-total").innerHTML = 'R$ ' + parseFloat(valorPrato + valorBebida + valorSobremesa).toFixed(2).replace('.',',');

            let textoWhats = `Olá, gostaria de fazer o pedido: \n\n - Prato:  ${oPrato}\n - Bebida: ${aBebida}\n - Sobremesa: ${aSobremesa}\n\n Total: R$ ${parseFloat(valorPrato + valorBebida + valorSobremesa).toFixed(2).replace('.',',')} \n\n Nome: ${nome} \n Endereço: ${endereco}`;
                textoWhats = window.encodeURIComponent(textoWhats);
            let celular = 5547984280676;

            let boraProWhatsapp = function(){
                window.open("https://wa.me/" + celular + "?text=" + textoWhats);
            }
            document.querySelector("#bora-pro-whats").onclick = boraProWhatsapp;

            let voltarProPedido = function(){
                document.querySelector(".confirmacao-finalizar-pedido-background").classList.add("escondido");
                document.querySelector("body").classList.remove("body__esconder-scroll");
            }
            document.querySelector("#retornar-ao-pedido").onclick = voltarProPedido;
            document.querySelector(".confirmacao-finalizar-pedido-background").onclick = voltarProPedido;

        }
        document.querySelector("footer > div").onclick = clicarEmComprar;
    }
}
