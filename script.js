$(function () {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".sleep-button").click(clickedSleepButton);
  $(".notification");
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {
  name: "Sparky",
  weight: 3,
  happiness: 5,
  energy: 10,
  notification: "Hello",
};
var treats_points = 0;

function clickedTreatButton() {
  if (pet_info.weight == 10) pet_info.notification = "I'm full! Chill!";
  else {
    // Increase pet happiness
    // Increase pet weight
    pet_info.happiness++;
    pet_info.weight++;
    pet_info.notification = "Thanks G.";
    document.getElementById("activity").src =
      "assets/sparky-eating.gif";
    setTimeout(function () {
      document.getElementById("activity").src =
        "assets/sparky.png";
    }, 5000);
  }

  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  if (pet_info.energy < 2) {
    pet_info.notification = "I'm tired :(";
    checkAndUpdatePetInfoInHtml();
    return;
  } else {
    // Increase pet happiness
    pet_info.happiness++;
    // Decrease pet weight
    pet_info.weight--;
    pet_info.energy -= 2;
    pet_info.notification = "tweet tweet";
    document.getElementById("activity").src =
      "assets/sparky-play.gif";
    setTimeout(function () {
      document.getElementById("activity").src =
        "assets/sparky.png";
    }, 5000);
    checkAndUpdatePetInfoInHtml();
  }
}

function clickedExerciseButton() {
  if (pet_info.happiness <= 2) {
    pet_info.notification = "I don't want to";
    pet_info.energy--;
    checkAndUpdatePetInfoInHtml();
    return;
  } else if (pet_info.energy < 3) {
    pet_info.notification = "I'm too tired";
    checkAndUpdatePetInfoInHtml();
    return;
  } else if (pet_info.weight <= 2) {
    pet_info.notification = "I'm too hungry.";
    checkAndUpdatePetInfoInHtml();
    return;
  } else {
    // Decrease pet happiness
    // Decrease pet weight
    pet_info.weight -= 2;
    pet_info.happiness--;
    pet_info.energy -= 3;
    pet_info.notification = "UGHHHHHHH";

    document.getElementById("activity").src =
      "assets/sparky-excersise.gif";
    setTimeout(function () {
      document.getElementById("activity").src =
        "assets/sparky.png";
    }, 5000);

    checkAndUpdatePetInfoInHtml();
  }
}
function clickedSleepButton() {
  // refill energy
  pet_info.energy = 10;
  pet_info.notification = "ZZZ ZZZ";
  document.getElementById("activity").src =
    "assets/sparky-sleeping.gif";
  setTimeout(function () {
    document.getElementById("activity").src =
      "assets/sparky.png";
  }, 5000);

  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 1 && pet_info.energy <= 1) {
    pet_info.notification = "Food....";
    pet_info.weight = 1;
    if (pet_info.happiness <= 1 || pet_info.energy <= 1) {
      pet_info.happiness = 0;
      pet_info.energy = 0;
    } else {
      pet_info.happiness--;
      pet_info.energy--;
    }
    return;
  }
  // Add conditional so if weight is lower than zero, set it back to zero
  else if (pet_info.weight < 1 && pet_info.happiness <= 0) {
    pet_info.weight = 1;
    pet_info.notification = "Feed me :(";
    pet_info.happiness = 0;
    if (pet_info.energy <= 0) {
      pet_info.energy = 0;
    } else pet_info.energy--;
    return;
  } else if (pet_info.weight <= 1) {
    pet_info.notification = "Please. Feed. ME.";
    pet_info.weight = 1;
    if (pet_info.happiness <= 1 || pet_info.energy <= 1) {
      pet_info.happiness = 0;
      pet_info.energy = 0;
    } else {
      pet_info.happiness--;
      pet_info.energy--;
    }
    return;
  } else if (pet_info.happiness <= 1) {
    pet_info.notification = "I'm sad. :(";
    if (pet_info.energy <= 1) pet_info.energy = 0;
    else pet_info.energy--;
    pet_info.happiness = 1;
    return;
  } else if (pet_info.energy <= 1) {
    pet_info.energy = 0;
    pet_info.notification = "sleep...";
  }
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
  $(".energy").text(pet_info["energy"]);
  $(".notification").text(pet_info["notification"]);
}
