const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user-result img"),
  roboResult = document.querySelector(".robo-result img"),
  result = document.querySelector(".result"),
  optImages = document.querySelectorAll(".option-img");

optImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = roboResult.src = "images/rock.png";
    result.textContent = "wait...";

    optImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      let imageSrc = e.target.querySelector("img").src;
      console.log(imageSrc);
      userResult.src = imageSrc;

      let randomNum = Math.floor(Math.random() * 3);
      let roboImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      roboResult.src = roboImages[randomNum];

      let roboValue = ["R", "P", "S"][randomNum];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        // === PLAYER CHOOSES ROCK ===
        RR: "Draw", // Rock vs Rock
        RP: "Robo WIN", // Rock vs Paper
        RS: "You  WIN", // Rock vs Scissors

        // === PLAYER CHOOSES PAPER ===
        PR: "You  WIN", // Paper vs Rock
        PP: "Draw", // Paper vs Paper
        PS: "Robo  WIN", // Paper vs Scissors

        // === PLAYER CHOOSES SCISSORS ===
        SR: "Robo  WIN", // Scissors vs Rock
        SP: "You  WIN", // Scissors vs Paper
        SS: "Draw", // Scissors vs Scissors
      };

      let outComeValue = outcomes[userValue + roboValue];

      console.log(outComeValue);

      result.innerHTML = outComeValue;
    }, 2500);
  });
});
