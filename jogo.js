var altura, largura
var vidas = 1
var tempo = 15
var dificuldade
var nivel = window.location.search

nivel = nivel.replace('?','')


if(nivel === 'facil'){
	dificuldade = 1800
}
else if(nivel==='normal'){
	dificuldade = 1200
}
else {
	dificuldade = 800
}


function tamanhoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
}

tamanhoJogo()

function criarMosquito(){
	
	if(document.getElementById('mosquito')){
		

		document.getElementById('mosquito').remove()
		if (vidas > 3){
			window.location.href='gameover.html'
		}
		else{
			
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
			vidas++
		}
	}
	var posicaoX = Math.floor(Math.random() * largura) -90
	var posicaoY = Math.floor(Math.random() * altura) -90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	var mosquito = document.createElement('img')

	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()

	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoMosquito(){
	var aleat = Math.floor(Math.random() * 3)

	switch(aleat){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoMosquito(){
	var aleat = Math.floor(Math.random() * 2)

	switch(aleat){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

var cronometro = setInterval(function(){
			tempo--

			if(tempo<0){
				clearInterval(cronometro)
				clearInterval(criaMosquito)

				window.location.href = 'vitoria.html'
			}
			else{
				document.getElementById("cronometro").innerHTML	= tempo
			}
		},1000)
