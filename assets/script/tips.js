function addTips() {

    const TIPSPARAGRAPHS = [
        "As respostas variam conforme a maneira que a pergunta foi feita e a bola que foi clicada.",
        "Sabemos que você está aqui apenas para causar a discórdia, então, para irritar as bolas, você pode: "
    ];
    
    const TIPSLI = [
        "Fazer perguntas em branco;",
        "Fazer perguntas sem ponto de interrogação;",
        "Usar caracteres especiais;",
        "Ou perguntar algo sério..."
    ];

    MODAL.innerHTML = "";
    MODAL.style.textAlign = "unset";
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.textContent = TIPSPARAGRAPHS[0];
    p2.textContent = TIPSPARAGRAPHS[1];
    let list = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    li1.textContent = TIPSLI[0];
    li2.textContent = TIPSLI[1];
    li3.textContent = TIPSLI[2];
    li4.textContent = TIPSLI[3];
    list.append(li1, li2, li3, li4);
    MODAL.append(p1, p2, list);
}

