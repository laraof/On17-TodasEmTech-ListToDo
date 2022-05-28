// capturar as entradas/elementos em variáveis

const novaTarefaInput = document.querySelector('#input_id');

//capturando o input
const botaoAdd = document.querySelector('#botao_add_id');

//capturando botão de add
const listaDeTarefas = document.getElementById('lista_id')

const containerDeTarefas = document.querySelector('#tarefas_id')

const form = document.getElementById('form_id');

const botaoLimpa = document.getElementById('botao_limpa_id');

const botaoMarca = document.getElementById('botao_marca_id');

//capturando a lista que vai guardar as tarefas


const modelo = document.querySelector('#modelo_id');
//função de adicionar a partir do click da usuária, um evento
// mostrar que com o formulário e o evento de submit a tarefa também seria criada.

botaoAdd.addEventListener('click', (evento) => {

    evento.preventDefault();

    const elementoDaLista = document.createElement('li');

    const textoTarefa = document.createElement('p');

    const iconeDeleta = document.createElement('span'); 

    const inputStyle = document.querySelector('.input_add');

    //trim() - remove espaços em branco 

    if(novaTarefaInput.value.trim() === '') {

        inputStyle.style.backgroundColor = '#E75A7C';
        document.getElementsByName('tarefa')[0].placeholder = 'Você não digitou uma tarefa';
        
    } else {
                
    inputStyle.style.backgroundColor = '#c8d6e5';
    document.getElementsByName('tarefa')[0].placeholder = 'Adicione uma tarefa';

    textoTarefa.innerText = novaTarefaInput.value;

    iconeDeleta.innerText = "🗑️";

    listaDeTarefas.appendChild(elementoDaLista);

    elementoDaLista.appendChild(textoTarefa);
    elementoDaLista.appendChild(iconeDeleta);   

    modelo.style.display = 'none';

    containerDeTarefas.style.display = 'block';

    form.reset();
    }


    textoTarefa.addEventListener('click', () => {
        if(!textoTarefa.classList.contains('checked')) {
            textoTarefa.classList.add('checked')
        } else {
            textoTarefa.classList.remove('checked')
        }

        //textoTarefa.classList.toogle('checked')
    })

    iconeDeleta.addEventListener('click', () => {
        elementoDaLista.remove()

        if(listaDeTarefas.innerText === '') {
            modelo.style.display = 'flex'
            containerDeTarefas.style.display = 'none'
        }
    })

    botaoLimpa.addEventListener('click', () => {
        
        
        listaDeTarefas.innerHTML = ''

        modelo.style.display = 'flex'
        containerDeTarefas.style.display = 'none'
    })

    botaoMarca.addEventListener('click', () => {

        if(botaoMarca.innerText === 'Marcar todas') {
            const todasAsTarefas = document.querySelectorAll('p');
            todasAsTarefas.forEach(item => {
                item.classList.add('checked');
            });
            botaoMarca.innerText = 'Desmarcar todas'
            
        } else {
            const todasAsTarefas = document.querySelectorAll('p');
            todasAsTarefas.forEach(item => {
                item.classList.remove('checked');
            });
            botaoMarca.innerText = 'Marcar todas'
        }    
    })
});


