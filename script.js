<script>
  const perguntas = [
    {
      texto: "Qual é a capital do Brasil?",
      opcoes: ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador"],
      correta: 0
    },
    {
      texto: "Qual é o maior oceano?",
      opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"],
      correta: 2
    },
    {
      texto: "Qual país tem o formato de uma bota?",
      opcoes: ["Chile", "Itália", "Egito", "Índia"],
      correta: 1
    },
    {
      texto: "Em qual continente está o deserto do Saara?",
      opcoes: ["Ásia", "América", "África", "Europa"],
      correta: 2
    }
    // Adicione mais perguntas aqui
  ];

  let indice = 0;

  function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(d => d.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
  }

  function iniciar() {
    indice = 0;
    mostrarPergunta();
  }

  function mostrarPergunta() {
    const p = perguntas[indice];
    document.getElementById('pergunta-texto').textContent = p.texto;
    const opDiv = document.getElementById('opcoes');
    opDiv.innerHTML = '';

    p.opcoes.forEach((op, i) => {
      const btn = document.createElement('button');
      btn.textContent = op;
      btn.onclick = () => checarResposta(i, btn);
      opDiv.appendChild(btn);
    });

    mostrarTela('tela-pergunta');
  }

  function checarResposta(escolha, botaoClicado) {
    const p = perguntas[indice];

    // Desabilita todos os botões
    const botoes = document.querySelectorAll('#opcoes button');
    botoes.forEach(btn => btn.disabled = true);

    if (escolha === p.correta) {
      botaoClicado.style.backgroundColor = '#66bb6a'; // verde
    } else {
      botaoClicado.style.backgroundColor = '#ef5350'; // vermelho

      // Mostrar a resposta correta
      botoes[p.correta].style.backgroundColor = '#66bb6a'; // verde
    }

    // Avança para próxima pergunta após 1 segundo
    setTimeout(() => {
      indice++;
      if (indice < perguntas.length) {
        mostrarPergunta();
      } else {
        alert('Fim do jogo!');
        mostrarTela('tela-inicial');
      }
    }, 1000);
  }

  function voltar() {
    mostrarTela('tela-inicial');
  }
</script>
