


const tarefas = []


function criarLista(){
    const res = document.querySelector(".res")
    let lista = document.createElement('ul')
    const el_uls = res.children
    if (el_uls.length <= 0)     res.appendChild(lista)

}

function criarTarefa(nome_tarefa){
}



document.addEventListener('click', (e) => {
    console.log(e.target);
    adcionarTarefa()
})