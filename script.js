let qna =[{
    quantity: 2,
    question: "2 + 2 = 4?",
    option1: "true",
    option2: "false",
    correctAnswer: "true",
},{
    quantity: 4,
    question: "2 + 1 = ?",
    option1: "1", 
    option2: "21",
    option3: "3",
    option4: "4", 
    correctAnswer: "3"
},{
    quantity: 2,
    question: "2 + 3 = 5?",
    option1: "true", 
    option2: "false",
    correctAnswer: "true"
},{
    quantity: 2,
    question: "2 + 4 = 6?",
    option1: "true", 
    option2: "false",
    correctAnswer: "true"
},{
    quantity: 2,
    question: "2 + 6 = 8?",
    option1: "false",
    option2: "true",
    correctAnswer: "true"
},{
    quantity: 2,
    question: "2 + 5 = 25?",
    option1: "true",
    option2: "false",
    correctAnswer: "false"
},{
    quantity: 4,
    question: "2 + 0 = ?",
    option1: "20", 
    option2: "2",
    option3: "0",
    option4: "22",
    correctAnswer: "2"
},{
    quantity: 2,
    question: "2 + 8 = 10?",
    option1: "true",
    option2: "false",
    correctAnswer: "true"
},{
    quantity: 2,
    question: "2 + 9 = 11?",
    option1: "true", 
    option2: "false",
    correctAnswer: "true"
},{
    quantity: 2,
    question: "2 + 10 = 12?",
    option1: "true", 
    option2: "false",
    correctAnswer: "true"
}];

let currentQuestion = 0;
let score = 0;
let questions = 1;
let correctAnswer = qna[0].correctAnswer;
let highscore = qna.length;
  
const answers = document.querySelector("#answers").children;
const nextButton = document.getElementById("next");
const answer = document.querySelectorAll(".answer");
const modes = document.querySelector("#mode")
console.log(answer[3])
let correctOpt = document.querySelector(".correct");
//let answer = document.getElementsByClassName("answer");
let question = document.querySelector("h2").innerText = qna[0].question;
let optionA = document.querySelector("#answer1").value = qna[0].option1;
let optionB = document.querySelector("#answer2").value = qna[0].option2;
let optionC = document.querySelector("#answer3").value = qna[0].option3;
let optionD = document.querySelector("#answer4").value = qna[0].option4;
let progress = document.querySelector("#progress").innerText = `Fråga ${questions} av ${qna.length}`;


    let nextQuestion = () => {
        currentQuestion++
        questions++  

        if(currentQuestion < qna.length && qna[currentQuestion].quantity === 4) { 
                console.log(correctAnswer)
                document.querySelector("#answer3").style.display = "block";
                document.querySelector("#answer4").style.display = "block";
            } else if(currentQuestion < qna.length ){
                document.querySelector("#answer3").style.display = null;
                document.querySelector("#answer4").style.display = null;
            } else {
                question = document.querySelector("h2").innerText = "Slut på frågor!";
                document.querySelector("#next").disabled = true;
                
                progress = document.querySelector("#progress").innerText = `Du fick ${score} rätt av ${qna.length} möjliga`;
                
                getScore();
            };
correctAnswer = qna[currentQuestion].correctAnswer;
        

question = document.querySelector("h2").innerText = qna[currentQuestion].question;

optionA = document.querySelector("#answer1").value = qna[currentQuestion].option1;
optionB = document.querySelector("#answer2").value = qna[currentQuestion].option2;
optionC = document.querySelector("#answer3").value = qna[currentQuestion].option3;
optionD = document.querySelector("#answer4").value = qna[currentQuestion].option4;

    
    progress = document.querySelector("#progress").innerText = `Fråga ${questions} av ${qna.length}`;
    
    

    for (let btn of answers) {
        btn.classList.remove("correct"); 
        btn.disabled = false
    if (correctAnswer === btn.value){
        btn.classList.add("correct");
    };
    if (modes.ariaPressed === "true") {
            btn.style.color = "#E6DBBA";
            btn.style.backgroundColor = "#0A223D";
            btn.style.border = "#E6DBBA solid 2px";             
        } else {
                btn.style.color = null;
                btn.style.backgroundColor = null;
                btn.style.border = null;             

            }
        };
        
        
        
        
        
    };
    answer[0].addEventListener('click', () => {
        if (document.querySelector("#answer1").value === correctAnswer) {
            score++
                answer[0].style.border = "5px solid #00B435";
                answer[0].style.backgroundColor = "#33DE66";
                answer[0].style.color = "#196B31";
                
                console.log("optionA");
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            } else {
                answer[0].style.border = "5px solid #BD0215";
                answer[0].style.backgroundColor = "#F24129";
                answer[0].style.color = "#690215";
                document.querySelector(".correct").style.border = "5px solid #00B435";
                console.log("wrong");
                
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            }
        });
        answer[1].addEventListener('click', () => {
            if (document.querySelector("#answer2").value === correctAnswer) {
                score++
                answer[1].style.border = "5px solid #00B435";
                answer[1].style.backgroundColor = "#33DE66";
                answer[1].style.color = "#196B31";
                
                console.log("optionA");
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            } else {
                answer[1].style.border = "5px solid #BD0215";
                answer[1].style.backgroundColor = "#F24129";
                answer[1].style.color = "#690215";
                document.querySelector(".correct").style.border = "5px solid #00B435";
                console.log("wrong");
                
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            }
        });
        answer[2].addEventListener('click', () => {
            if (document.querySelector("#answer3").value === correctAnswer) {
                score++
                answer[2].style.border = "5px solid #00B435";
                answer[2].style.backgroundColor = "#33DE66";
                answer[2].style.color = "#196B31";
                
                console.log("optionA");
                answer.forEach(btn => {
                    btn.disabled = true;
                });
            } else {
                answer[2].style.border = "5px solid #BD0215";
            answer[2].style.backgroundColor = "#F24129";
            answer[2].style.color = "#690215";
            document.querySelector(".correct").style.border = "5px solid #00B435";
            console.log("wrong");
            
            answer.forEach(btn => {
                btn.disabled = true;
            });
        }
    });
    answer[3].addEventListener('click', () => {
        if (document.querySelector("#answer4").value === correctAnswer) {
            score++
            answer[3].style.border = "5px solid #00B435";
            answer[3].style.backgroundColor = "#33DE66";
            answer[3].style.color = "#196B31";
            
            console.log("optionD");
            answer.forEach(btn => {
                btn.disabled = true;
            });
        } else {
            answer[3].style.border = "5px solid #BD0215";
            answer[3].style.backgroundColor = "#F24129";
            answer[3].style.color = "#690215";
            document.querySelector(".correct").style.border = "5px solid #00B435";
            console.log("wrong");
            
            answer.forEach(btn => {
                btn.disabled = true;
            });
        }
    });
  
    
    let getScore = () => {
        if (modes.ariaPressed === "false") {
            document.querySelector("#container").style.border = "2px solid black";
            document.querySelector("#container").style.borderRadius = "20px";
        } else {
            document.querySelector("#container").style.border = "2px solid #E6DBBA";
            document.querySelector("#container").style.borderRadius = "20px";
        }
        
        document.querySelector("#answer1").style.display = "none";
        document.querySelector("#answer2").style.display = "none";
        document.querySelector("#answer3").style.display = "none";
        document.querySelector("#answer4").style.display = "none";
        document.getElementById("next").style.display = "none";
        
        if(score > highscore * 0.75) {
            document.querySelector("#result").innerText = "MYCKET VÄL GODKÄNT";
            document.querySelector("#result").style.color = "#00B435";
        } else if (score > highscore * 0.5) {
            document.querySelector("#result").innerText = "GODKÄNT";
            document.querySelector("#result").style.color = "#FF8D0D";
        } else {
            document.querySelector("#result").innerText = "UNDERKÄNT";
            document.querySelector("#result").style.color = "#BD0114";
        }
        
    };
    let switchModes = () => {
        if (modes.ariaPressed === "false") {
            modes.ariaPressed = "true";
            modes.innerText = "Light mode"
           for (let btn of answers) {
                btn.style.color = "#E6DBBA";
                btn.style.backgroundColor = "#0A223D";
                btn.style.border = "#E6DBBA solid 2px";
            };    
            document.querySelector("body").style.backgroundColor = "#00011F";
            document.querySelector("body").style.color = "#E6DBBA";  
        } else if (modes.ariaPressed === "true"){
            modes.ariaPressed = "false";
            modes.innerText = "Dark mode"          
            answer.forEach((btn) => {
                btn.style.color = null;
                btn.style.backgroundColor = null;
                btn.style.border = null;
            });
            
            document.querySelector("body").style.backgroundColor = null;
            document.querySelector("body").style.color = null;
        };
    };
    nextButton.addEventListener('click', nextQuestion);
    modes.addEventListener('click', switchModes);

    