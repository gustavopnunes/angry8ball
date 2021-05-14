const PAGEBODY = document.getElementById("page-body");
const BALLS = document.querySelectorAll(".balls");
const ANSWERSPACE = document.querySelector(".answer-space");
const TIPSBTN = document.getElementById("tips-btn");
const MODAL = document.getElementById("modal-tips")
const CLOSEMODALBTN = document.getElementById("close-modal-button");
let questionInput = document.getElementById("question-input");
let currentlyQuestion = "";
let previousQuestions = [];
let currentlyAnswer = "";
let clickedBall = "";
let newAnswer = "";

// questionInput.addEventListener("click", function() {
//     this.value = "";
// })

TIPSBTN.addEventListener("click", function() {
    ModalTips();
});

CLOSEMODALBTN.addEventListener("click", function() {
    ModalTips();
})


function ModalTips() {
    if (MODAL.classList.contains("hidden")) {
        console.log("modal oculto, mostrando");
        MODAL.classList.remove("hidden");
    } else {
        console.log("modal visivel");
        MODAL.classList.add("hidden");
    }
}

for (let el of BALLS) {
    el.addEventListener("click", function() {
        clickedBall = this.id;
        currentlyQuestion = questionInput.value.toLowerCase().replace(/ /g,'');

        switch (clickedBall) {

            case "ball4": 
                if (currentlyQuestion === "") {
                    displayAnswer(notAText());
                    break;
                } else if (!currentlyQuestion.includes("?")) {
                    displayAnswer(notAQuestion());
                    break;
                } else if (previousQuestions.includes(currentlyQuestion)) {
                    displayAnswer(repeatedQuestion());
                    break;
                } else {
                    displayAnswer(ball4());
                    previousQuestions.push(currentlyQuestion);
                    break;
                }           

            case "ball8": 
                if (currentlyQuestion === "") {
                    displayAnswer(notAText());
                    break;
                } else if (!currentlyQuestion.includes("?")) {
                    displayAnswer(notAQuestion());
                    break;
                } else if (previousQuestions.includes(currentlyQuestion)) {
                    displayAnswer(repeatedQuestion());
                    break;
                } else {
                    displayAnswer(ball8());
                    previousQuestions.push(currentlyQuestion);
                    break;
                }  

            case "ball7": 
                if (currentlyQuestion === "") {
                    displayAnswer(notAText());
                    break;
                } else if (!currentlyQuestion.includes("?")) {
                    displayAnswer(notAQuestion());
                    break;
                } else if (previousQuestions.includes(currentlyQuestion)) {
                    displayAnswer(repeatedQuestion());
                    break;
                } else {
                    displayAnswer(ball7());
                    previousQuestions.push(currentlyQuestion);
                    break;
                }    
        }
});
}

function notAText() {
    const ANSWERS = [

        "Digita qualquer coisa aí meu, não custa nada!",

        "Eu respondo tudo, mas sem ter o que responder fica difícil...",

        "Obrigado por não digitar nada e me poupar de responder mais uma de suas asneiras.",

        "Tem um negócio aí na sua frente cheio de botões com letras? Ele não morde, viu?",

        "Vai aprender a digitar, depois volta aqui e tenta a sorte.",
        
        "Mas nem se eu estivesse rodando nos computadores da Nasa ia conseguir responder uma pergunta que não existe.",

        "Oi? Acho que você tá tentando dizer algo...",

        "O gato comeu suas mãos, foi?",

        "Não tente expressar o seu vazio existencial em forma de perguntas, por favor.",
    ];
    currentlyAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return currentlyAnswer;
}


function notAQuestion() {

    const ANSWERS = [

        "Você sabe que perguntas são feitas com ponto de interrogação, né?",

        "Eu odeio esse emprego. As pessoas não sabem nem perguntar e ainda querem que eu responda...",

        "Não aprendeu a fazer perguntas? Volta lá no primário.",

        "Beleza. Mas quem perguntou? Ah, você? Porque isso não me pareceu uma pergunta...",

        "Isto não é uma pergunta, é uma afirmação. E eu não concordo nem discordo, muito pelo contrário.",
        
        "Procura aí no teu teclado um símbolo igual esse ó '?'. Aprende usar ele e tenta de novo.",

        "Reveja seus conceitos de pergunta, usuário.",

        "Se você tá afirmando, quem sou eu pra discordar...",

        "Você sabe o que é um ponto de interrogação? Se você conseguiu ler essa pergunta, provavelmente sim. Deixa de preguiça e usa ele aí.",

        "Faltou nas aulas de pontuação, né?"
    ];

    currentlyAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return currentlyAnswer;
}

function ball4() {
    const ANSWERS = [

        "Sei náo véy, pergunta pra bola aí do lado.",

        "Clica mais uma vez aí, talvez esse 4 vire um 8.",

        "Eu só respondo se clicar no 8. Colocar um óculos talvez te ajude.",

        "Oi, eu sou a bola 47. Mas tem uma criatura do outro lado da tela que jura que eu sou a bola 8...",

        "É a preta meu! Clica na preta!",

        "Sei lá meu, eu to aqui só de enfeite. Quem responde essas coisas aí é a bola 8.",

        "Você tem certeza que tá enxergando bem? Não quer tentar dar um zoom no navegador?",

        "Você clicou na metade de 8, e̶n̶t̶ã̶o̶ ̶s̶ó̶ ̶v̶a̶i̶ ̶t̶e̶r̶ ̶m̶e̶t̶a̶d̶e̶ ̶d̶a̶ ̶r̶e̶s̶p̶o̶s̶t̶a̶",

        "A bola 4 tá de folga. Pergunta pra 8.",

        "Vi que você entende de perguntas, mas não entende de bolas. Vou te ajudar. Duas bolas dessa que você clicou é igual a??? Clica na resposta",

        "4 é o car****, meu nome agora é bola 8 por**!",

        "É pra clicar no 8 meu, no 8! Pega uma bola dessa e coloca em cima de outra que você vai ter uma representação visual do que é um 8.",

        "Sua resposta deve estar na bola à direita. Tente novamente quando souber qual lado é o direito.",

        "Essa negócio de resposta aí é com a bola do meio. Eu to aqui só pra enfeitar."
    ];

    currentlyAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return currentlyAnswer;
}

function ball8() {
    
    const ANSWERS = [

        "Sei não. Vo vê e te aviso.",

        "Eu sei lá véy, pergunta lá no posto Ipiranga.",

        "Eu te responderia se não tivesse ocupado pensando no quão idiota foi essa pergunta",

        "To ocupado respondendo outra pessoa. Tenta daqui a pouco.",

        "Eu até te responderia essa, mas meu expediente acabou faz um minuto. Tenta outra hora.",

        "A pergunta é de graça mas a resposta é paga. Faz um pix pro dev e pergunta de novo.",

        "Vou ser sincero: não faço ideia...",

        "Ih, ferrou, não tenho nenhuma resposta programada pra essa pergunta. (Na verdade não tenho pra nenhuma).",

        "Chama um coach, talvez ele saiba te responder...",

        "Sei lá. Já experimentou pesquisar no Google?",

        "Perguntar isso pra mim é igual perguntar pro dev como meu código funciona: só Deus sabe...",

        "Se a resposta pra essa pergunta for questão de vida ou morte, pede pra me avisarem a data do velório.",
    ]
    
    currentlyAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return currentlyAnswer;
}

function ball7() {
    const ANSWERS = [

        "Sei náo véy, pergunta pra bola aí do lado.",

        "É pra clicar no 8, meu, no 8! Pega uma bola dessa e coloca em cima de outra que você vai ter uma representação visual do que eu to falando.",

        "Oi, eu sou a bola 7. Mas tem uma criatura do outro lado da tela que jura que eu sou a bola 8...",

        "Quase que você acerta a bola, só errou por uma...",

        "Um gato tem 7 vidas e eu tenho sete motivos pra não te responder agora.",

        "Sua resposta deve estar na bola à esquerda. Tente novamente quando souber qual lado é o esquerdo.",

        "Essa negócio de resposta aí é com a bola do meio. Eu to aqui só pra enfeitar.",

        "Queria muito ser 8, mas sou apenas um 7 e não vou poder te ajudar.",

        "4 é o car****, meu nome agora é bola 8 por**!",

        "Não é porque eu to aqui do lado do 8 que eu também fico respondendo essas idiotices, viu?"
    ]

    currentlyAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return currentlyAnswer;
}
function repeatedQuestion() {
    const ANSWERS = [

        "Se você não ficasse perguntando a mesma coisa o tempo todo, talvez eu até te respondesse.",

        "Muda o disco, meu!",
        
        "De novo essa? Assim fica difícil hem...",

        "To sabendo que você já perguntou essa pra alguma bola daqui, e eu não vou desmerecer o trabalho dela te respondendo novamente.",

        "Talvez a você consiga uma respota se fizer outra pergunta...",

        "Você tá insistindo tanto nessa pergunta que só de pirraça eu vou responder com outra pergunta: tem certeza que quer que eu responda?",

        "Mas tu é um ser humano ou um papagaio que só repete as palavras?",

        "Tá insistindo demais nessa. Você acha que se eu soubesse já não teria respondido na primeira vez que perguntou?"
    ];

    currentlyAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    return currentlyAnswer;
}

function displayAnswer(answer) {
    ANSWERSPACE.innerHTML = "";
    let answerText = document.createElement("p");
    answerText.textContent = answer;
    ANSWERSPACE.appendChild(answerText);
}

