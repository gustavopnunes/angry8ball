// ######################################################################################################################################
// OH MA GOSH IS THIS REALLY JAVASCRIPT? AND I DID THIS?  OH GOD I'M SO REALIZED!                                                       #
// HOPE I GET HOW IT WORKS NEXT TIME I SEE IT                                                                                           #
//                                                                                                                                      #
// this code was made with lot of coffee, unsleeped nights, google searchs and several hours of spotify rock 'n' roll playlists.        #
// None of this would be possible without the biggest help of my friends from Kenzie Academy Brasil.                                    #
//                                                                                                                                      #
// -- SPECIAL THANKS TO--                                                                                                               #
// ## Nicholas Feliciano, the most incredible Kenzie's facilitator (my apologize to the others, but it's true).                         #    
// ## Davis Peixoto, with her amazing day-demos and patience with the newbies                                                           #
// ## Lucas Rocha, who showed some js events that made my life easier.                                                                  #
// ## All my friends from #teamNicholas                                                                                                 #    
//                                                                                                                                      #     
// This project's purpose is just train the content seen so far on Kenzie's web development course.                                     #       
// The main goal was to generate random numbers.                                                                                        #    
// In this case, I used random numbers to search for adequate answers in arrays (defined in 'answers' script).                          #    
//                                                                                                                                      #
// If you are an employer, I swear I'm looking for ways to fix all the workarounds.                                                     #
//                                                                                                                                      #
// If you wish give me some feedback about that, my linkedin is:                                                                        #
//  ##  linkedin:   https://www.linkedin.com/in/gustavopnunes/                                                                          #
// ######################################################################################################################################


// setting all project vars (yeah, we no more use 'var', we use 'let' now, you dinosaur)
const ROOT = document.querySelector(":root");
const QUESTIONINPUT = document.getElementById("question-input");
const OPENTIPSBTN = document.getElementById("open-tips-btn");
const SHOWCREDITS = document.getElementById("show-credits-link");
const MODAL = document.getElementById("modal");
const BALLOON = document.getElementById("balloon");
const BALLS = document.querySelectorAll(".balls");
const BALL4 = document.getElementById("ball4");
const BALL8 = document.getElementById("ball8");
const BALL7 = document.getElementById("ball7");
const SPECIALCHARS =  /[@#$%^&*()_+\-=\[\]{};':"\\|<>\/]+/;  //if some character on input match with one of theese, specific answers will be showed.
let currentlyQuestion = "";
let repeatedInputs = [];
let ballsSpace = document.getElementById("balls-space");
let clickedBall = "";
let ball4Opacity = "";
let ball8Opacity = "";
let ball7Opacity = "";

// defining button to open tips modal
OPENTIPSBTN.addEventListener("click", function() {
    openModal(addTips());
});

SHOWCREDITS.addEventListener("click", function() {
    openModal(addCredits());
})


// this event detect which ball was clicked and take specific actions for them
BALLS.forEach(item => {
    item.addEventListener("click", event => {
        // some vars who will be used in this event
        ball4Opacity = BALL4.style.opacity;
        ball8Opacity = BALL8.style.opacity;
        ball7Opacity = BALL7.style.opacity;
        clickedBall = item.id;
        currentlyQuestion = QUESTIONINPUT.value.toLowerCase().replace(/ /g,'');

        if ((ball4Opacity === "0") && (ball8Opacity === "0") && (ball7Opacity === "0")) { //detect if all the balls are hidden and finish the game if true;
            let span = document.createElement("span");
            ballsSpace.innerHTML = "";
            span.style.fontWeight = "bold";
            span.style.marginTop = "40px";
            span.textContent = "VOCÊ IRRITOU TODAS AS BOLAS :(";
            QUESTIONINPUT.classList.add("hidden");
            BALLOON.classList.add("hidden");
            ballsSpace.appendChild(span);
        } else { // if any ball are still visible, event will detect what ball was clicked and call her function
            switch (clickedBall) {
                case "ball4":
                    chooseAnswer(currentlyQuestion, ball4Answers, "20%");
                    break;

                case "ball8":
                    chooseAnswer(currentlyQuestion, ball8Answers, "55%");
                    break;

                case "ball7": 
                chooseAnswer(currentlyQuestion, ball7Answers, "92%");
                break;
            }
        }
    });
});
// end of 'clicking balls' event

// function choosing answers, will show messages according to input kind

// input kinds detected by this function are:
//  ##  empty input;
//  ##  no question mark input; 
//  ##  repeated input;
//  ##  inputs with special characters
//  ##  'normal' input (with question marks, not repeated and not empty)
//  someday I'll be adding more handles, hope to find a better way to to this without this bunch of if /else.

function chooseAnswer(currentlyQuestion, ballAnswers, arrowPosition)  {
    if (currentlyQuestion === "") {
        if (emptyQuestion.length === 0) {
            currentlyAnswer = "Já que você não fala nada, eu é que não vou ficar falando sozinho. Falow!"
            ballLeaving(clickedBall);
        } else {
            currentlyAnswer = emptyQuestion[Math.floor(Math.random() * emptyQuestion.length)];
            emptyQuestion.splice(emptyQuestion.indexOf(currentlyAnswer), 1);
        }
    } else if (SPECIALCHARS.test(currentlyQuestion)) {
        if (specialQuestions.length === 0) {
            currentlyAnswer = "Enquanto você se diverte com esses caracteres aí eu vou fazer outra coisa mais interessante. Adeus."
            ballLeaving(clickedBall);
        } else {
            currentlyAnswer = specialQuestions[Math.floor(Math.random() * specialQuestions.length)];
            specialQuestions.splice(specialQuestions.indexOf(currentlyAnswer), 1);
        }
    } else if (!currentlyQuestion.includes("?")) {
        if (notAQuestion.length === 0) {
            currentlyAnswer = "Vai aprender usar ponto de interrogação e volta aqui depois. Falow!"
            ballLeaving(clickedBall);
        } else {
            currentlyAnswer = notAQuestion[Math.floor(Math.random() * notAQuestion.length)];
            notAQuestion.splice(notAQuestion.indexOf(currentlyAnswer), 1);
        }
    } else if (repeatedInputs.includes(currentlyQuestion)) {
        if (repeatedQuestions.length === 0) {
            currentlyAnswer = "Quando você aprender digitar algo diferente, talvez eu volte aqui. Falow!";
            ballLeaving(clickedBall);
        } else {
            currentlyAnswer = repeatedQuestions[Math.floor(Math.random() * repeatedQuestions.length)];
            repeatedQuestions.splice(repeatedQuestions.indexOf(currentlyAnswer), 1);
        }
    } else {
        if (ballAnswers.length === 0) {
            currentlyAnswer = "Cansei de você. Até qualquer hora!";
            ballLeaving(clickedBall);
        } else {
            currentlyAnswer = ballAnswers[Math.floor(Math.random() * ballAnswers.length)];
            ballAnswers.splice(ballAnswers.indexOf(currentlyAnswer), 1);
        }
    }
    return displayAnswer(currentlyAnswer, arrowPosition );
}

// function to write and show choosed answer inside the balloon.
// it takes the choosed answer from choosed ball function and, after display it, insert it in an array with for answers.
function displayAnswer(answer, arrowPosition) {
    BALLOON.classList.remove("hidden");
    // that var for balloon arrow position in css is changed here. I'm proud I found a good way to do this. 
    // It takes the ideal arrow position on balloon for each ball when ball's event call.
    ROOT.style.setProperty("--balloon-position", arrowPosition) 
    BALLOON.innerHTML = "";
    let p = document.createElement("p");
    p.textContent = answer;
    BALLOON.appendChild(p);
    repeatedInputs.push(currentlyQuestion);
}

// a little function to make a ball go away when angry
function ballLeaving(ballId) {
    let ball = document.getElementById(clickedBall);
    ball.style.transition = "2s ease";
    ball.style.opacity = "0";
}

function openModal(content) {
    MODAL.style.display = "flex";
    let closeBtn = document.createElement("input");
    closeBtn.value = "Fechar";
    closeBtn.type = "button";
    closeBtn.id = "close-modal-btn"
    closeBtn.classList.add("modal__close-btn");
    MODAL.appendChild(closeBtn);

    const CLOSEMODALBTN = document.getElementById("close-modal-btn");

    CLOSEMODALBTN.addEventListener("click", function() {
        MODAL.style.display = "none";
    });
}

