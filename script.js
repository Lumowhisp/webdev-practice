alert("Welcome!");
function greeting() {
  let hour = new Date().getHours();
  let name = "Aditya";
  if (hour > 6 && hour <= 12) {
    alert(`Good Morning ${name}`);
  } else if (hour >= 13 && hour <= 17) {
    alert(`Good Evening ${name}`);
  } else {
    alert(`Good Night ${name}`);
  }
}

function ammusementPark() {
  let age = 3;
  let quota = "";
  if (age <= 6) {
    quota = "kids";
  } else if (age >= 65) {
    quota = "Senior Citizen";
  } else {
    quota = "none";
  }
  const today = new Date(); /*day and time */
  const day = today.getDay(); // 0 is Sunday
  if ((age <= 6 || age >= 65) && day !== 0) {
    console.log(`Discount applicable,Quota:${quota}`);
  } else {
    console.log("Discount not applied");
  }
}

const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};
function coinFlip(playerMove) {
  let flip = Math.random();
  let compMove;
  if (flip < 0.5) {
    compMove = "Tail";
  } else {
    compMove = "Head";
  }
  //comparing
  if (compMove === playerMove) {
    score.wins += 1;
    localStorage.setItem("score", JSON.stringify(score));
    console.log(
      `Computer Move:${compMove}\nPlayer Move:${playerMove}\nYou Win`
    );
    alert(
      `Computer Move:${compMove}\nPlayer Move:${playerMove}\nYou Win\nScore:\nWins:${score.wins},Losses:${score.losses}`
    );
  } else {
    score.losses += 1;
    localStorage.setItem("score", JSON.stringify(score));
    console.log(
      `Computer Move:${compMove}\nPlayer Move:${playerMove}\nYou lose 
      `
    );
    alert(
      `Computer Move:${compMove}\nPlayer Move:${playerMove}\nYou Loose \n Score:\nWins:${score.wins},Losses:${score.losses}`
    );
  }
}
function flipReset() {
  score.wins = 0;
  score.losses = 0;
  localStorage.setItem("score", JSON.stringify(score));
  alert(`Score:\nWins:${score.wins},Losses:${score.losses}`);
}

function subscribe() {
  const result = document.querySelector(".js-subscribe").innerHTML;
  if (result === "Subscribe") {
    document.querySelector(".js-subscribe").innerHTML = "Subscribed";
  } else {
    document.querySelector(".js-subscribe").innerHTML = "Subscribe";
  }
}

const rpsScore = JSON.parse(localStorage.getItem("rpsScore")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
/*Rock Paper Scissor Game*/
function rpsGame(rps_userMove) {
  /*making of computer move*/
  let randNumber = Math.random();
  let compMove = "";
  if (randNumber < 1 / 3) {
    compMove = "Paper";
  } else if (randNumber <= 2 / 3) {
    compMove = "Rock";
  } else {
    compMove = "Scissor";
  }
  /*Condition checker*/
  if (rps_userMove === "Paper" && compMove === "Rock") {
    alert(`User Choice: ${rps_userMove} \n Comp Move
      :${compMove}\n Paper Grab Rock`);
  } else if (rps_userMove === "Rock" && compMove === "Scissor") {
    alert(`User Choice: ${rps_userMove} \n Comp Move
      :${compMove}\n Rock Break Scissor`);
  } else if (rps_userMove === "Paper" && compMove === "Scissor") {
    alert(`User Choice: ${rps_userMove} \n Comp Move
      :${compMove}\n Scissor cut Paper`);
  } else if (rps_userMove === "Rock" && compMove === "Paper") {
    alert(`User Choice: ${rps_userMove} \n Comp Move
      :${compMove}\n Paper Grab Rock`);
  } else if (rps_userMove === "Scissor" && compMove === "Paper") {
    alert(`User Choice: ${rps_userMove} \n Comp Move
      :${compMove}\n Scissor cut Paper`);
  } else if (rps_userMove === "Scissor" && compMove === "Rock") {
    alert(`User Choice: ${rps_userMove} \n Comp Move
      :${compMove}\n Rock Break Scissor`);
  } else {
    console.log("invalid Choice");
  }

  if (compMove === rps_userMove) {
    rpsScore.ties += 1;
    localStorage.setItem("rpsScore", JSON.stringify(rpsScore));
  } else if (
    (rps_userMove === "Paper" && compMove === "Rock") ||
    (rps_userMove === "Rock" && compMove === "Scissor") ||
    (rps_userMove === "Scissor" && compMove === "Paper")
  ) {
    rpsScore.wins += 1;
    localStorage.setItem("rpsScore", JSON.stringify(rpsScore));
  } else {
    rpsScore.losses += 1;
    localStorage.setItem("rpsScore", JSON.stringify(rpsScore));
  }
  alert(
    `Wins:${rpsScore.wins}\nLosses:${rpsScore.losses}\nTies:${rpsScore.ties}`
  );
  document.querySelector(
    ".js-rpsResult"
  ).innerHTML = `Wins:${rpsScore.wins} | Losses:${rpsScore.losses} | Ties:${rpsScore.ties}`;
}
function rpsReset() {
  rpsScore.wins = 0;
  rpsScore.losses = 0;
  rpsScore.ties = 0;
  localStorage.setItem("rpsScore", JSON.stringify(rpsScore));
  alert("Score reset!");
  document.querySelector(
    ".js-rpsResult"
  ).innerHTML = `Wins:${rpsScore.wins}\nLosses:${rpsScore.losses}\nTies:${rpsScore.ties}`;
}
