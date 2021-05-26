// somehow in the future I should know how to use databases and disappear with all these bunch of arrays.
// but by now, this arrays contains all balls answers for each kind of input

// answers for 'normal' questions on ball 8
let ball4Answers = [

    "Sei náo véy, pergunta pra bola aí da direita.",

    "Clica mais uma vez aí, talvez esse 4 vire um 8.",

    "Essa negócio de respostas aí é com a bola da direita. Eu to aqui só pra enfeitar.",

    "Oi, eu sou a bola 4. Mas tem uma criatura do outro lado da tela que jura que eu sou a bola 8...",

    "É a preta meu! Clica na preta!",

    "Você tem certeza que tá enxergando bem? Não quer tentar dar um zoom no navegador?",

    "Você clicou na metade de 8, e̶n̶t̶ã̶o̶ ̶s̶ó̶ ̶v̶a̶i̶ ̶t̶e̶r̶ ̶m̶e̶t̶a̶d̶e̶ ̶d̶a̶ ̶r̶e̶s̶p̶o̶s̶t̶a̶",

    "A bola 4 tá de folga. Pergunta pra 8.",

    "Vi que você entende de perguntas, mas não entende de bolas. Vou te ajudar. Duas bolas dessa que você clicou é igual a??? Clica na resposta",

    "4 é o car****, meu nome agora é bola 8 por**!",

    "É pra clicar no 8 meu, no 8! Pega uma bola dessa e coloca em cima de outra que você vai ter uma representação visual do que é um 8.",

    "Sua resposta deve estar na bola à direita. Tente novamente quando souber qual lado é o direito.",
];

// answers for 'normal' questions on ball 8
let ball8Answers = [

    "Sei não. Vo vê e te aviso.",
    
    "Eu sei lá véy, pergunta lá no posto Ipiranga.",
    
    "Eu te responderia se não tivesse ocupado pensando no quão idiota foi essa pergunta",
    
    "To ocupado respondendo outra pessoa. Tenta daqui a pouco.",
    
    "Eu até te responderia essa, mas meu expediente acabou faz um minuto. Tenta outra hora.",
    
    "A pergunta é de graça mas a resposta é paga. Faz um pix pro dev e pergunta de novo.",
    
    "Sinceramente? Não faço ideia...",
    
    "Ih, ferrou! Não tenho nenhuma resposta programada pra essa pergunta. (Na verdade não tenho pra nenhuma).",
    
    "Chama um coach, talvez ele saiba te responder...",
    
    "Sei lá. Já experimentou pesquisar no Google?",
    
    "Perguntar isso pra mim é igual perguntar pro dev como meu código funciona: só Deus sabe...",
    
    "Se a resposta pra essa pergunta for questão de vida ou morte, pede pra me avisarem a data do velório.",

    "Não sei, não quero saber e tenho raiva de quem sabe."
];

// answers for 'normal' questions on ball 7
let ball7Answers = [

    "Sei náo véy, pergunta pra bola aí da esquerda.",
            
    "É pra clicar no 8, meu, no 8! Pega uma bola dessa e coloca em cima de outra que você vai ter uma representação visual do que eu to falando.",
            
    "Quase que você acerta a bola, só errou por uma...",
            
    "Um gato tem 7 vidas e eu tenho sete motivos pra não te responder agora. Um deles é que eu não sou a bola 8.",
            
    "Sua resposta deve estar na bola à esquerda. Tente novamente quando souber qual lado é o esquerdo.",
            
    "Queria muito ser 8, mas sou apenas um 7 e não vou poder te ajudar.",
            
    "Não é porque eu to aqui do lado da 8 que eu também fico respondendo essas idiotices, viu?",

    "Arrasta o mouse pra esquerda pra ter sua resposta.",

    "Sei lá. Na verdade só me pediram pra ficar chacoalhando aqui."
]

// answers for repeated questions
let repeatedQuestions = [

    "Se eu não te respondi essa na primeira vez, por que diabos você acha que vou responder na segunda?",

    "Se você não ficasse perguntando a mesma coisa o tempo todo, talvez eu até te respondesse.",

    "Muda o disco, meu!",
            
    "De novo essa? Assim fica difícil hem...",
    
    "To sabendo que você já perguntou essa pra alguma bola daqui, e eu não vou desmerecer o trabalho dela te respondendo novamente.",
    
    "Talvez eu te responda se você mudar a pergunta...",
    
    "Você tá insistindo tanto nessa pergunta que só de pirraça eu vou responder com outra pergunta: tem certeza que quer que eu responda?",
    
    "Mas tu é um ser humano ou um papagaio que só repete as palavras?"
];

// answers for empty inputs
let emptyQuestion = [

    "Você vai ficar só olhando pra minha cara esperando que eu te responda algo sem perguntar nada?",

    "Digita qualquer coisa aí meu, não custa nada!",

    "Eu respondo tudo, mas sem ter o que responder fica difícil...",

    "Obrigado por não digitar nada e me poupar de ler mais uma de suas asneiras.",

    "Tem um negócio aí na sua frente cheio de botões com letras? Ele não morde, viu?",

    "Vai aprender a digitar, depois volta aqui e tenta a sorte.",
        
    "Mas nem se eu estivesse rodando nos computadores da Nasa ia conseguir responder uma pergunta que não existe.",

    "Oi? Acho que você tá tentando dizer algo...",

    "O gato comeu suas mãos, foi?",

    "Não tente expressar o seu vazio existencial em forma de perguntas, por favor.",
]

// answers fot questions without quote mark
let notAQuestion = [

    "Você sabe que perguntas são feitas com ponto de interrogação, né?",

    "Eu odeio esse emprego. As pessoas não sabem perguntar e ainda querem que eu responda...",

    "Não aprendeu a fazer perguntas? Volta lá no primário.",

    "Beleza. Mas quem perguntou? Ah, você? Porque isso não me pareceu uma pergunta...",

    "Isto não é uma pergunta, é uma afirmação. E eu não concordo nem discordo, muito pelo contrário.",
        
    "Procura aí no teu teclado um símbolo igual esse ó '?'. Aprende usar ele e tenta de novo.",

    "Reveja seus conceitos de pergunta, usuário.",

    "Se você tá afirmando, quem sou eu pra discordar...",

    "Você sabe o que é um ponto de interrogação? Se você conseguiu ler essa pergunta, provavelmente sim. Deixa de preguiça e usa ele aí.",

    "Faltou nas aulas de pontuação, né?"
];

// answers for inputs with special characters, defined SPECIALCHARS const.
let specialQuestions = [
    "Sei que eu sou um algoritmo muito bem escrito, mas não é por isso que eu entendo esses troços que você tá digitando...", 

    "Você tá digitando ou batendo no teclado?",

    "Tem certeza que isso aí é uma pergunta?",

    "Você digitou algum troço aí que eu não to conseguindo entender. Faz favor de arrumar e tentar de novo.",

    "Eu só preciso de algumas palavras que sequencialmente façam sentido e um ponto de interrogação. Não tem necessidade de digitar esses negócio esquisito aí!"
];