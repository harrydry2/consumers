// add Class of Disabled Click to all the names

const typedStringsContainer = document.querySelector(".typedStringsContainer");
const wraphighlightsPage1 = document.querySelector(".wraphighlightsPage1");
const p1ptContainer = document.querySelector(".p1ptContainer");
const disableClickSection = [
  typedStringsContainer,
  wraphighlightsPage1,
  p1ptContainer
];

const skip = document.querySelector(".hcSkipActive");

// Style all lines with opacity 0
const line1a = document.querySelectorAll(".p1line1")[0];
const line1b = document.querySelectorAll(".p1line1")[1];
const line2a = document.querySelectorAll(".p1line2")[0];
const line2b = document.querySelectorAll(".p1line2")[1];
const line3a = document.querySelectorAll(".p1line3")[0];
const line3b = document.querySelectorAll(".p1line3")[1];
const line4a = document.querySelectorAll(".p1line4")[0];
const line4b = document.querySelectorAll(".p1line4")[1];
const line5a = document.querySelectorAll(".p1line5")[0];
const line5b = document.querySelectorAll(".p1line5")[1];
const line6a = document.querySelectorAll(".p1line6")[0];
const line6b = document.querySelectorAll(".p1line6")[1];
const lines = [
  line1a,
  line1b,
  line2a,
  line2b,
  line3a,
  line3b,
  line4a,
  line4b,
  line5a,
  line5b,
  line6a,
  line6b,
  p1ptContainer
];

disableClickSection.forEach(section => section.classList.add("disableClick"));
lines.forEach(line => (line.style.opacity = `0`));

// Run typed.js
$(document).ready(function() {
  $("#typed").typed({
    stringsElement: $("#typed-strings"),
    startDelay: 2000,
    typeSpeed: 1.7,
    callback: oneanimation
  });
});

// Series of Animations
function oneanimation() {
  setTimeout(function() {
    $(".tom, .p1line1").animate(
      { backgroundColor: "rgba(150, 240, 75, 0.65)", opacity: 1 },
      1000,
      twoanimation
    );
    $(".tom, .p1line1").removeClass("disableClick");
  }, 1000);
}

function twoanimation() {
  setTimeout(function() {
    $(".jim, .p1line2").animate(
      { backgroundColor: "rgba(266, 238, 110, 0.78)", opacity: 1 },
      1000,
      threeanimation
    );
    $(".jim, .p1line2").removeClass("disableClick");
  }, 1000);
}

function threeanimation() {
  setTimeout(function() {
    $(".austin, .p1line3").animate(
      { backgroundColor: "rgba(80, 205, 236, 0.62)", opacity: 1 },
      1000,
      fouranimation
    );
    $(".austin, .p1line3").removeClass("disableClick");
  }, 1000);
}

function fouranimation() {
  setTimeout(function() {
    $(".mark, .p1line4").animate(
      { backgroundColor: "rgba(277, 80, 210, 0.44)", opacity: 1 },
      1000,
      fiveanimation
    );
    $(" .mark, .p1line4").removeClass("disableClick");
  }, 1000);
}

function fiveanimation() {
  setTimeout(function() {
    $(".james, .p1line5").animate(
      { backgroundColor: "rgba(299, 140, 0, 0.50)", opacity: 1 },
      1000,
      sixanimation
    );
    $(".james, .p1line5").removeClass("disableClick");
  }, 1000);
}

function sixanimation() {
  setTimeout(function() {
    $(".james2, .p1line6").animate(
      { backgroundColor: "rgba(87, 130, 365, 0.53)", opacity: 1 },
      1000,
      sevenanimation
    );
    $(".james2, .p1line6").removeClass("disableClick");
  }, 1000);
}

function sevenanimation() {
  skip.style.pointerEvents = "none";
  disableClickSection.forEach(section =>
    section.classList.remove("disableClick")
  );
  setTimeout(function() {
    $(".p1ptContainer").animate({ opacity: 1 }, 1000);
  }, 500);
}
