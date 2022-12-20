
const resultado = document.querySelector(".listas-tarefas");
const inputTarefa = document.querySelector("#input-tarefa");
const btnAdicionar = document.querySelector(".adicionar");


function clearInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}



function criarItemLista(){
    const text = inputTarefa.value;
    if (text.length > 0 ){
        const li = document.createElement("li");
        li.innerHTML = text
        resultado.appendChild(li)
        
    }
    
}

btnAdicionar.addEventListener("click", function(){
    criarItemLista();
    clearInput()
});
