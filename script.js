function verificar() {
    const botao = document.getElementById('botao');
    const mensagem = document.getElementById('mensagem');

    const resultado = Math.floor(Math.random() * 2);

    if (resultado === 0) {
        mensagem.textContent = 'Sucesso! Você pressionou o botão corretamente.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Erro! Pressione o botão novamente.';
        mensagem.style.color = 'red';
    }

    botao.disabled = true;
}