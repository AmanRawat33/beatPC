const displayRules = () => {
  document.querySelector(".rules-container").style.display = "inline-block";
};

const hideRules = () => {
  document.querySelector(".rules-container").style.display = "none";
};

const options = ["stone", "paper", "scissors"];

const pcSelect = (id) => {
  document.querySelector(".rules-container").style.display = "none";
  document.querySelector("#stone").style.display = "none";
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#triangle-side1").style.display = "none";
  document.querySelector("#triangle-side2").style.display = "none";
  document.querySelector("#triangle-side3").style.display = "none";
  setTimeout(() => {
    document.querySelector(".rules-container").style.display = "none";
    document.querySelector("#stone").style.display = "inline-block";
    document.querySelector("#stone").style.left = "40vw";
    document.querySelector("#paper").style.display = "inline-block";
    document.querySelector("#paper").style.left = "46.5vw";
    document.querySelector("#paper").style.bottom = "13vh";
    document.querySelector("#scissors").style.display = "inline-block";
    document.querySelector("#scissors").style.left = "52vw";
    document.querySelector("#triangle-side1").style.display = "inline-block";
    document.querySelector("#triangle-side2").style.display = "inline-block";
    document.querySelector("#triangle-side3").style.display = "inline-block";
    document.querySelector(".you-picked").style.display = "none";
    document.querySelector(".pc-picked").style.display = "none";
  }, 1500);
  let num = Math.floor(Math.random() * 3);
  if (options[num] == id) {
    const el1 = document.getElementById(id);
    document.querySelector(".same-selection").style.display = "inline-block";
    document.querySelector(".same-selection").style.left = "28vw";
    el1.classList.add(id);
    el1.style.display = "inline-block";
    el1.style.left = "30vw";
    el1.style.bottom = "35vh";
    setTimeout(() => {
      document.querySelector(".same-selection").style.display = "none";
      document.getElementById(stone).style.display = "inline-block";
      document.getElementById(stone).style.left = "45vw";
      el1.style.display = "none";
    }, 1500);
  } else {
    if (num === 0) {
      document.querySelector(".you-picked").style.display = "inline-block";
      document.querySelector(".pc-picked").style.display = "inline-block";
      const el1 = document.getElementById(id);
      el1.style.display = "inline-block";
      el1.style.left = "30vw";
      el1.style.bottom = "35vh";
      const s = document.querySelector(".stone");
      s.style.display = "inline-block";
      s.style.left = "60vw";
      s.style.bottom = "35vh";
    } else if (num === 1) {
      document.querySelector(".you-picked").style.display = "inline-block";
      document.querySelector(".pc-picked").style.display = "inline-block";
      const el1 = document.getElementById(id);
      el1.classList.add(id);
      el1.style.display = "inline-block";
      el1.style.left = "30vw";
      el1.style.bottom = "35vh";
      const p = document.querySelector(".paper");
      p.style.display = "inline-block";
      p.style.left = "60vw";
      p.style.bottom = "35vh";
    } else {
      document.querySelector(".you-picked").style.display = "inline-block";
      document.querySelector(".pc-picked").style.display = "inline-block";
      const el1 = document.getElementById(id);
      el1.classList.add(id);
      el1.style.display = "inline-block";
      el1.style.left = "30vw";
      el1.style.bottom = "35vh";
      const sc = document.querySelector(".scissors");
      sc.style.display = "inline-block";
      sc.style.left = "60vw";
      sc.style.bottom = "35vh";
    }
  }
  updateScore(num, id);
};

const updateScore = (num, id) => {
  if (
    Number(document.querySelector("#computer-score").innerText) == 14 ||
    Number(document.querySelector("#player-score").innerText) == 14
  ) {
    if (
      Number(document.querySelector("#computer-score").innerText) == 14 &&
      Number(document.querySelector("#player-score").innerText) == 14
    ) {
      matchTie(num, id);
    } else if (
      Number(document.querySelector("#computer-score").innerText) == 14 &&
      Number(document.querySelector("#player-score").innerText) != 14
    ) {
      computerWin(num, id);
    } else if (
      Number(document.querySelector("#computer-score").innerText) != 14 &&
      Number(document.querySelector("#player-score").innerText) == 14
    ) {
      playerWin(num, id);
    }
  } else {
    if (options[num] == id) {
      let x = Number(document.querySelector("#computer-score").innerText);
      x += 1;
      document.querySelector("#computer-score").innerText = x;
      let y = Number(document.querySelector("#player-score").innerText);
      y += 1;
      document.querySelector("#player-score").innerText = y;
    } else {
      if (options[num] === "stone" && id === "scissors") {
        let x = Number(document.querySelector("#computer-score").innerText);
        x += 1;
        document.querySelector("#computer-score").innerText = x;
      } else if (options[num] === "stone" && id === "paper") {
        let y = Number(document.querySelector("#player-score").innerText);
        y += 1;
        document.querySelector("#player-score").innerText = y;
      } else if (options[num] === "paper" && id === "stone") {
        let x = Number(document.querySelector("#computer-score").innerText);
        x += 1;
        document.querySelector("#computer-score").innerText = x;
      } else if (options[num] === "paper" && id === "scissors") {
        let y = Number(document.querySelector("#player-score").innerText);
        y += 1;
        document.querySelector("#player-score").innerText = y;
      } else if (options[num] === "scissors" && id === "paper") {
        let x = Number(document.querySelector("#computer-score").innerText);
        x += 1;
        document.querySelector("#computer-score").innerText = x;
      } else if (options[num] === "scissors" && id === "stone") {
        let y = Number(document.querySelector("#player-score").innerText);
        y += 1;
        document.querySelector("#player-score").innerText = y;
      }
    }
  }
};

const playerWin = (num, id) => {
  document.querySelector("#next").style.display = "inline-block";
  document.querySelector("#win-para").style.display = "inline-block";
  document.querySelector("#play-again").style.display = "inline-block";
  setTimeout(() => {
    document.getElementById(id).style.display = "none";
    document.getElementById(options[num]).style.display = "none";
  }, 1500);
  setTimeout(() => {
    document.querySelector(".rules-container").style.display = "none";
    document.querySelector("#stone").style.display = "none";
    document.querySelector("#paper").style.display = "none";
    document.querySelector("#scissors").style.display = "none";
    document.querySelector("#triangle-side1").style.display = "none";
    document.querySelector("#triangle-side2").style.display = "none";
    document.querySelector("#triangle-side3").style.display = "none";
    document.querySelector(".you-picked").style.display = "none";
    document.querySelector(".pc-picked").style.display = "none";
  }, 1500);
};

const winPage = () => {
  document.querySelector(".rules-container").style.display = "none";
  document.querySelector("#stone").style.display = "none";
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#triangle-side1").style.display = "none";
  document.querySelector("#triangle-side2").style.display = "none";
  document.querySelector("#triangle-side3").style.display = "none";
  document.querySelector(".score-container").style.display = "none";
  document.querySelector(".win-para").style.display = "none";
  document.querySelector("#next").style.display = "none";
  document.querySelector("#play-again").style.bottom = "10vh";
  document.querySelector("#play-again").style.display = "inline-block";
  document.querySelector(".trophy-container").style.bottom = "15vh";
  document.querySelector("#star1").style.display = "inline-block";
  document.querySelector("#star2").style.display = "inline-block";
  document.querySelector("#star3").style.display = "inline-block";
  document.querySelector("#star4").style.display = "inline-block";
  document.querySelector("#star5").style.display = "inline-block";
  document.querySelector(".trophy-container").style.display = "inline-block";
  document.querySelector(".win-page-text-container").style.display =
    "inline-block";
};

const computerWin = (num, id) => {
  document.querySelector(".computer-win-text-container").style.display =
    "inline-block";
  document.querySelector(".play-again").style.display = "inline-block";
  setTimeout(() => {
    document.getElementById(id).style.display = "none";
    document.getElementById(options[num]).style.display = "none";
  }, 1000);
  setTimeout(() => {
    document.querySelector(".rules-container").style.display = "none";
    document.querySelector("#stone").style.display = "none";
    document.querySelector("#paper").style.display = "none";
    document.querySelector("#scissors").style.display = "none";
    document.querySelector("#triangle-side1").style.display = "none";
    document.querySelector("#triangle-side2").style.display = "none";
    document.querySelector("#triangle-side3").style.display = "none";
    document.querySelector(".you-picked").style.display = "none";
    document.querySelector(".pc-picked").style.display = "none";
    document.querySelector(".computer-win-text-container").style.display =
      "none";
  }, 1500);
};

const matchTie = (num, id) => {
  document.querySelector(".match-tie-text-container").style.display =
    "inline-block";
};

const showText = (id) => {
  if (options[num] == id) {
    const sameText = document.querySelector("#same-selection");
    sameText.style.display = "inline-block";
  }
};

const playAgain = () => {
  document.querySelector("#computer-score").innerText = 0;
  document.querySelector("#player-score").innerText = 0;
  document.querySelector("#play-again").style.display = "none";
  document.querySelector("#next").style.display = "none";
  document.querySelector(".score-container").style.display = "flex";
  document.querySelector(".score-container-score").style.display = "flex";
  document.querySelector("#stone").style.display = "inline-block";
  document.querySelector("#paper").style.display = "inline-block";
  document.querySelector("#scissors").style.display = "inline-block";
  document.querySelector("#triangle-side1").style.display = "inline-block";
  document.querySelector("#triangle-side2").style.display = "inline-block";
  document.querySelector("#triangle-side3").style.display = "inline-block";
  document.querySelector(".win-para").style.display = "none";
  document.querySelector(".win-page-text-container").style.display = "none";
  document.querySelector("#star1").style.display = "none";
  document.querySelector("#star2").style.display = "none";
  document.querySelector("#star3").style.display = "none";
  document.querySelector("#star4").style.display = "none";
  document.querySelector("#star5").style.display = "none";
  document.querySelector(".trophy-container").style.display = "none";
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})