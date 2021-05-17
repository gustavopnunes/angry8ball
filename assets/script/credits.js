function addCredits() {

    const THANKS = [
        " - ATIVIDADE KENZIE ACADEMY BRASIL -",
    
        "CONSTRUINDO UM JOGO DE AZAR",
    
        "Nesta atividade, o objetivo principal era desenvolver um jogo de azar, dadas algumas opções, que fizesse uso de números aleatórios. Me baseei na opção 'Magic 8  Ball', e neste caso, o objetivo foi cumprido através da busca aleatória de respostas em arrays pré definidos para cada tipo de pergunta.",

        "AGRADECIMENTOS ESPECIAIS: ",
    
        "## Nicholas Feliciano, o facilitador mais cabuloso da Kenzie Academy Brasil (os outros que me perdoem, mas é verdade);",
    
        "## Davis Peixoto, e sua paciência incrível com os novatos;",
    
        "## Lucas Rocha, por ter me mostrado algumas funções em js que fizeram minha vida mais fácil.",
    
        "## Todos os meus amigos do #teamNicholas e da Kenzie Academy Brasil.",
    ];

    MODAL.innerHTML = "";
    MODAL.style.textAlign = "center";
    let p1 = document.createElement("p");
    p1.classList.add("center");
    let p2 = document.createElement("p");
    p2.classList.add("center");
    let p3 = document.createElement("p");
    p3.classList.add("center");
    let p4 = document.createElement("p");
    p4.classList.add("center");
    let pThanks1 = document.createElement("p");
    let pThanks2 = document.createElement("p");
    let pThanks3 = document.createElement("p");
    let pThanks4 = document.createElement("p");
    p1.textContent = THANKS[0];
    p2.textContent = THANKS[1];
    p3.textContent = THANKS[2];
    p4.textContent = THANKS[3];
    pThanks1.textContent = THANKS[4]
    pThanks2.textContent = THANKS[5] 
    pThanks3.textContent = THANKS[6] 
    pThanks4.textContent = THANKS[7] 
    p3.classList.add("credits__paragraph3")
    MODAL.append(p1, p2, p3, p4, pThanks1, pThanks2, pThanks3, pThanks4);
}

