alert("click on the option you wanna choose ");
let options = document.querySelectorAll(".option");
let button = document.querySelector(".btn");
let myScore = document.querySelector("#my_scr");
let compScore = document.querySelector("#comp_scr");
let my_score_value = 0;
let comp_score_value = 0;
console.log(button.innerText);

// generate computer's choice
const genCompChoice = () => {
  const Choices = ["Rock", "Paper", "Scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return Choices[randomIdx];
};

drawgame = ( userChoice , CompChoice) => {
  button.innerText = `The Game is Draw. You select ${userChoice} and comp selected ${CompChoice}`;
  button.style.backgroundColor = "white";
};

// show winner
showWinner = (userWin , userChoice , compChoice) => {
  if (userWin) {
    button.innerText = `You Win !Your ${userChoice} beats ${compChoice}`;
    my_score_value++;
    myScore.innerText = my_score_value;
    button.style.backgroundColor = "green";
  } else {
    console.log("conputer wins");
    button.innerText = `The computer Wins. Your ${userChoice} was beaten by ${compChoice} `;
    comp_score_value++;
    compScore.innerText = comp_score_value;
    button.style.backgroundColor = "red";
  }
};

// user choice
const play_game = (userChoice) => {
  console.log(`you selected ${userChoice}`);
  let compChoice = genCompChoice();
  console.log(`comp selected ${compChoice}`);
  //draw condition
  if (userChoice === compChoice) {
    drawgame( userChoice , compChoice);
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
      console.log(userWin);
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
      console.log(userWin);
    } else {
      userWin = compChoice === "Rock" ? false : true;
      console.log(userWin);
    }
    showWinner(userWin ,userChoice ,compChoice);
  }
};

// img clicked
options.forEach((option) => {
  option.addEventListener("click", () => {
    let userChoice = option.getAttribute("id");
    play_game(userChoice);
  });
});
