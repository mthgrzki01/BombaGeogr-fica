const questions = [
  { question: "Qual foi a principal razão alegada pelos EUA para invadir o Iraque em 2003?", options: ["Produção de armas químicas", "Apoio ao terrorismo", "Expansão do regime comunista", "Violação de direitos humanos"], correct: 0 },
  { question: "Quando os EUA iniciaram a invasão do Afeganistão?", options: ["1998", "2001", "2003", "2005"], correct: 1 },
  { question: "Qual grupo rebelde se tornou o principal inimigo do governo sírio durante a guerra civil?", options: ["Al-Qaeda", "Estado Islâmico", "FARC", "PKK"], correct: 1 },
  { question: "O que provocou o início da Guerra de 1948 entre Israel e países árabes vizinhos?", options: ["Ataque do Egito a Israel", "Declaração de Independência de Israel", "Ataque de Israel ao Egito", "Apoio dos EUA a Israel"], correct: 1 },
  { question: "Em que ano teve início a Guerra do Vietnã?", options: ["1954", "1965", "1972", "1975"], correct: 1 },
  { question: "O que foi o Tratado de Paz de Paris, assinado em 1973?", options: ["Paz entre a Coreia do Norte e Coreia do Sul", "Paz entre EUA e Vietnã", "Paz entre EUA e Rússia", "Paz entre os países da União Europeia"], correct: 1 },
  { question: "Qual foi o principal motivo do conflito na Ucrânia em 2014?", options: ["Invasão da Rússia", "Luta pela independência da Ucrânia", "Conflito étnico interno", "Intervenção militar dos EUA"], correct: 0 },
  { question: "Quando a Guerra Civil Síria começou?", options: ["2007", "2009", "2011", "2013"], correct: 2 },
  { question: "Qual foi o nome da operação militar dos EUA que resultou na captura de Saddam Hussein em 2003?", options: ["Operação Liberdade Duradoura", "Operação Tempestade no Deserto", "Operação Iraque Livre", "Operação Escudo de Proteção"], correct: 2 },
  { question: "Quem foi o líder da Líbia durante o conflito civil de 2011?", options: ["Muammar Gaddafi", "Hosni Mubarak", "Saddam Hussein", "Bashar al-Assad"], correct: 0 },
  { question: "Em qual região a Guerra do Darfur ocorreu?", options: ["África Ocidental", "África Central", "África do Norte", "África Oriental"], correct: 1 },
  { question: "Quem foram os principais envolvidos na Guerra do Kosovo?", options: ["Sérvios e Kosovo", "Sérvios e EUA", "Kosovo e Albânia", "Albânia e EUA"], correct: 0 },
  { question: "Qual foi o principal fator que levou à Guerra do Iraque de 2003?", options: ["Alegação de armas de destruição em massa", "O assassinato de Saddam Hussein", "Revoltas internas no Iraque", "Interferência iraniana"], correct: 0 },
  { question: "Em que ano a União Soviética se dissolveu, causando um grande impacto nos conflitos da Europa Oriental?", options: ["1989", "1991", "1993", "1995"], correct: 1 },
  { question: "Quem foram os principais aliados dos EUA na Guerra do Vietnã?", options: ["França e Japão", "Austrália e Nova Zelândia", "Reino Unido e Canadá", "Coreia do Sul e Japão"], correct: 1 },
  { question: "O que foi a Guerra Fria?", options: ["Conflito armado entre EUA e URSS", "Disputa ideológica e política entre EUA e URSS", "Conflito entre potências europeias", "Conflito armado entre Coreias"], correct: 1 },
  { question: "A Guerra da Geórgia com a Rússia ocorreu em que ano?", options: ["2005", "2008", "2010", "2012"], correct: 1 },
  { question: "Qual foi a principal causa da crise no Sudão?", options: ["Conflitos étnicos e religiosos", "A invasão do Egito", "A intervenção de potências estrangeiras", "A divisão do Sudão em dois países"], correct: 0 },
  { question: "Quem foi o líder da Revolução Egípcia de 2011?", options: ["Hosni Mubarak", "Muammar Gaddafi", "Anwar Sadat", "Mohamed Morsi"], correct: 0 },
  { question: "Onde ocorreu o massacre de Srebrenica em 1995?", options: ["Bosnia", "Kosovo", "Serbia", "Montenegro"], correct: 0 },
  { question: "Em qual país ocorreu a Revolução de 2014 que resultou na queda do presidente Viktor Yanukovych?", options: ["Rússia", "Ucrânia", "Bielorrússia", "Geórgia"], correct: 1 },
  { question: "Qual país foi invadido pela Rússia em 2022, gerando um grande conflito internacional?", options: ["Ucrânia", "Geórgia", "Polônia", "Estônia"], correct: 0 },
  { question: "Quem foi o líder do Estado Islâmico (ISIS) até sua morte em 2019?", options: ["Abu Bakr al-Baghdadi", "Osama bin Laden", "Ayman al-Zawahiri", "Abu Bakr al-Baghdadi"], correct: 0 },
  { question: "O que é o Boko Haram?", options: ["Grupo terrorista islâmico", "Movimento separatista na África", "Movimento de resistência no Oriente Médio", "Organização internacional de paz"], correct: 0 },
  { question: "Quem era o presidente da Síria durante o início da guerra civil?", options: ["Bashar al-Assad", "Muammar Gaddafi", "Hosni Mubarak", "Saddam Hussein"], correct: 0 },
  { question: "Onde ocorreu o massacre de Tiananmen?", options: ["Hong Kong", "Pequim", "Xangai", "Taiwan"], correct: 1 },
  { question: "Em que ano o governo de Bashar al-Assad começou a perder o controle de várias áreas da Síria?", options: ["2008", "2010", "2011", "2013"], correct: 2 },
  { question: "Qual foi o nome do grupo que tomou o controle do norte da Síria e do Iraque durante a Guerra Civil?", options: ["Al-Qaeda", "Estado Islâmico", "FARC", "Hamas"], correct: 1 },
  { question: "Qual foi o nome da operação que resultou na morte de Osama Bin Laden?", options: ["Operação Liberdade Duradoura", "Operação Gerônimo", "Operação Tempestade no Deserto", "Operação Escudo de Defesa"], correct: 1 },
  { question: "Onde ocorreu o golpe de estado que resultou no afastamento do presidente Nicolás Maduro?", options: ["Venezuela", "Colômbia", "Brasil", "Equador"], correct: 0 },
  { question: "Quando o regime de apartheid foi oficialmente abolido na África do Sul?", options: ["1984", "1990", "1994", "2000"], correct: 2 },
  { question: "O que provocou a guerra civil no Iémen?", options: ["Conflitos entre sunitas e xiitas", "Invasão saudita", "Revoltas populares contra o governo", "Apoio dos EUA ao governo",], correct: 0 },
  { question: "Quem foi o principal aliado dos EUA na guerra do Afeganistão?", options: ["Reino Unido", "França", "Israel", "Canadá"], correct: 0 },
  // Continue adicionando até 60 perguntas, como o modelo acima
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;
  const buttons = document.querySelectorAll(".answer-btn");
  question.options.forEach((option, index) => {
    buttons[index].innerText = option;
  });
  document.getElementById("result").innerText = '';
  document.getElementById("next-btn").style.display = 'none';
}

function checkAnswer(selected) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  const resultDiv = document.getElementById("result");

  if (selected === correctAnswer) {
    resultDiv.innerText = "Correto!";
    resultDiv.style.color = "#28a745";
    score++;
    document.getElementById("next-btn").style.display = 'inline-block';
  } else {
    resultDiv.innerText = "Errado! O quiz será reiniciado.";
    resultDiv.style.color = "#dc3545";

    // Reinicia o quiz
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("next-btn").style.display = 'none';

    // Volta à primeira pergunta
    setTimeout(() => {
      loadQuestion();
    }, 2000); // Aguarda 2 segundos antes de reiniciar
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h1>Quiz Finalizado!</h1>
      <p>Você acertou ${score} de ${questions.length} perguntas.</p>
    `;
  }
}

// Iniciar o quiz
loadQuestion();
