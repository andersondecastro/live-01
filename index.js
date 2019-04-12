var listaDeFrases = [
	"Quando vires um homem bom, tenta imitá-lo; quando vires um homem mau, examina-te a ti mesmo.",
	"Não ser descoberto numa mentira é o mesmo que dizer a verdade.",
	"Para ver muita coisa é preciso despregar os olhos de si mesmo",
	"Não corrigir nossas falhas é o mesmo que cometer novos erros."
]

var posicaoAtual = 0

setInterval(function(){

	Push.create("Frase da Hora!", {
	    body: listaDeFrases[posicaoAtual],
	    icon: 'icons/icon.png',
	    timeout: 4000,
	    onClick: function () {
	        window.focus();
	        this.close();
	    }
	});

	posicaoAtual++
	if( posicaoAtual >= listaDeFrases.length )
		posicaoAtual = 0 
}, 7000)