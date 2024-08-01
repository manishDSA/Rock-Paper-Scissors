let userscore=0;
let compscore= 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const optionarray =["rock","paper","scissors"]
    const index= Math.floor(Math.random()*3)

    return optionarray[index]
}
const drawgame =()=>{

    console.log("game was draw");
    msg.innerText ="Game Was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userwin,userChoice,compchoice)=>{
    if (userwin) {
        console.log("You Win!");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
       compscorepara.innerText = compscore;
        console.log(" you  are lose!");
        msg.innerText = `You lost. ${userChoice} beats  your ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("user choice =",userChoice);

    const compchoice =genCompChoice();

    console.log("comp choice = ",compchoice);
   
    if (userChoice === compchoice) {
        drawgame();
    }else{
        let userwin = true;
    if(userChoice ==="rock"){

        userwin = compchoice ==="paper" ? false:true; 
    }
    else if(userChoice ==="paper"){
        userwin = compchoice ==="scissors"?false:true;
    }else{
        userwin = compchoice ==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compchoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
  const userChoice=  choice.getAttribute("id")
  playGame(userChoice);
        
    }) 
});