const numero = window.document.querySelector("#numero");
const btnAdd = window.document.querySelector("#addNumero");
const lista = window.document.querySelector("#lista");

/////////////criando lista a ser ordenada////////////////

let vetor = [];

btnAdd.addEventListener("click", () => {
    vetor.push(Number(numero.value));

    let li = document.createElement("li");
    let liText = document.createTextNode(numero.value + ", ");
    li.appendChild(liText);
    lista.appendChild(li);
})

////////////////Ordenação Bubble Sort///////////////////

const btnBubbleSort = window.document.querySelector("#bubbleSort");
const resultatdo = window.document.querySelector("#resultado");

btnBubbleSort.addEventListener("click", () => {
    for(c = 1; c < vetor.length; c++) {

        for(i = 0; i < vetor.length - c; i++) {
            if(vetor[i] > vetor[i+1]) {
                let a = vetor[i];
                vetor[i] = vetor[i+1];
                vetor[i+1] = a;
            }
        }
        
        let li = document.createElement("li");
        let liText = document.createTextNode(vetor);
        li.appendChild(liText);
        resultado.appendChild(li);
    }
});