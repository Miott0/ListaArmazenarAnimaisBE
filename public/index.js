async function carregarAnimais(){
    const response = await axios.get('http://localhost:8000/animais')
    //axios.get('http://localhost:8000/animais').then(response =>console.log(response.data))

    const animais = response.data
    
    const lista = document.getElementById('lista-animais')

    lista.innerHTML = ''

    animais.forEach(animal => {
        const item = document.createElement('li')

        const linha = `${animal.nome} - idade: ${animal.idade} - sexo ${animal.sexo} - cor: ${animal.cor}`
        item.innerText = linha 
        lista.appendChild(item)
    });
    
    
}

function manipularFormulario(){
    const form_animal = document.getElementById('form-animal')
    const input_nome = document.getElementById('nome')
    
    form_animal.onsubmit = async (event) =>{
        event.preventDefault()
        
        const nome_animal = input_nome.value
        
        await axios.post('http://localhost:8000/animais',{
            nome: nome_animal,
            idade: 4, 
            sexo: 'macho',
            cor: 'preto'
        })
        carregarAnimais()
        alert('animal cadastrado')
    }
    
    
    
}



function aap(){
    console.log('app iniciada')
    carregarAnimais()
    manipularFormulario()
}

aap()