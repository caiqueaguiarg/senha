function liberarSenha(){
    var senha = document.getElementById('senha');
    var botao = document.getElementById('olho');

    if(senha.type === 'password'){
        senha.setAttribute('type','text');
        botao.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    } else{
        senha.setAttribute('type','password');
        botao.classList.replace('bi-eye-slash-fill','bi-eye-fill');
    }
}

let erros = []
function verificarSenha() {
    
    var senhaDigitada = document.getElementById('senha').value;
    console.log(erros);

    if(senhaDigitada.length < 8) {
        var paragrafo = document.getElementById('texto1');
        document.getElementById('botaoVerificador').disabled = true;
        document.getElementById('botaoVerificador').style.backgroundColor = '#808080';
        paragrafo.innerHTML = '- Erro! A senha deve conter pelo menos 8 caracteres!';
        var texto = document.getElementById('texto2');
        texto.innerHTML = '';
        erros = 1;
    } else{ 
        var paragrafo = document.getElementById('texto1');
        paragrafo.innerHTML = '';
    }

    if (!senhaDigitada.match(/[\W|!@#$%^&*_.]/g)) {;
        var texto = document.getElementById('texto2');
        document.getElementById('botaoVerificador').disabled = true;
        document.getElementById('botaoVerificador').style.backgroundColor = '#808080';
        texto.innerHTML = ' - Erro! senha deve conter pelo menos um caractere especial:( !, @, #, $, %, ^, &, *, _.)';
        erros = 2;
    } else{
        var texto = document.getElementById('texto2');
        texto.innerHTML = '';
    }

    if(erros === 0) {
        var titulo = document.getElementById('tituloTexto');
        titulo.innerHTML = 'Parabéns, senha válida!';
        document.getElementById('botaoVerificador').disabled = true;
        document.getElementById('botaoVerificador').style.backgroundColor = '#808080';
    
    } 
}

function reiniciar() {
    var senha = document.getElementById('senha');
    var caixa = document.getElementById('texto1');
    var texto = document.getElementById('texto2');
    var titulo = document.getElementById('tituloTexto');
    document.getElementById('botaoVerificador').disabled = false;
    document.getElementById('botaoVerificador').style.backgroundColor = '#068FFF';
    caixa.innerHTML = ' - A senha deve ter pelo menos 8 caracteres.';
    texto.innerHTML = ' - A senha deve conter pelo menos um caractere especial:( !, @, #, $, %, ^, &, *, _.) ';
    titulo.innerHTML = 'Seja bem-vindo! Digite a sua senha';
    erros = 0;
    senha.value = ""

}
