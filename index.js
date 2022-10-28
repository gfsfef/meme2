let nao = document.getElementById('nao')
let fds = document.querySelector('#sla')
let texto = document.createElement('h2')
let botoes = document.querySelector('#botoes')
let titulo = document.querySelector('h1')
let ctt = 0
    // let posicoes = []

function SIM(){
    document.body.style = `
    animation: mycolor 4s infinite
    `

    texto.textContent = 'EU TE AMO'
    texto.style.color = 'white'
    botoes.style.display = 'none'
    titulo.textContent = 'YEEEEEEEEES'
    fds.appendChild(texto)
}

nao.addEventListener('mouseover', () => {
    // let listaControle = []

    let cima = Math.random() * window.innerHeight
    let baixo = Math.random() * window.innerHeight
    let esquerda = Math.random() * window.innerWidth
    let direita = Math.random() * window.innerWidth

    // listaControle.push(cima, baixo, esquerda, direita)


    nao.style = `
        position:  absolute;
        top: ${cima}px;
        bottom: ${baixo}px;
        left: ${esquerda}px;
        rigth: ${direita}px;
    `

    ctt++

    if(ctt == 5){
        texto.textContent = 'poxa :('
        texto.style = `
            text-align: center;
            color: red;
        `
        fds.appendChild(texto)
    } else if(ctt == 10){
        texto.textContent = 'NOSSA BLZ'
        texto.style = `
            text-align: center;
            color: red;
        `   
        fds.appendChild(texto)
    } else if(ctt == 20){
        texto.textContent = 'pfv, eu tenho muitas qualidades :)'
        texto.style = `
            text-align: center;
            color: red;
        `
        fds.appendChild(texto)
    }  else if(ctt == 0){
        
    }
})
