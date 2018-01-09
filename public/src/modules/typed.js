// add Class of Disabled Click to all the names
const skip = document.querySelector(".hcSkipActive");
const tom = document.querySelector(".tom");
const jim = document.querySelector(".jim");
const austin = document.querySelector(".austin");
const kirby = document.querySelector(".kirby");
const mark = document.querySelector(".mark");
const james = document.querySelector(".james");
const ptContainer = document.querySelector(".ptContainer");
const names = [tom, jim, austin, kirby, mark, james, ptContainer];

names.forEach(name => name.classList.add("disableClick"));

// Style all lines with opacity 0
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const line4 = document.querySelector(".line4");
const line5 = document.querySelector(".line5");
const line6 = document.querySelector(".line6");
const lines = [line1, line2, line3, line4, line5, line6, ptContainer];

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
    $(".tom, .line1").animate(
      { backgroundColor: "rgba(199, 220, 101, .7)", opacity: 1 },
      1000,
      twoanimation
    );
    $(".tom, .line1").removeClass("disableClick");
  }, 1000);
}

function twoanimation() {
  setTimeout(function() {
    $(".jim, .line2").animate(
      { backgroundColor: "rgba(236, 208, 120, .7)", opacity: 1 },
      1000,
      threeanimation
    );
    $(".jim, .line2").removeClass("disableClick");
  }, 1000);
}

function threeanimation() {
  setTimeout(function() {
    $(".austin, .line3").animate(
      { backgroundColor: "rgba(80, 197, 186, 0.7)", opacity: 1 },
      1000,
      fouranimation
    );
    $(".austin, .line3").removeClass("disableClick");
  }, 1000);
}

function fouranimation() {
  setTimeout(function() {
    $(".kirby, .line4").animate(
      { backgroundColor: "rgba(237, 50, 147, 0.6)", opacity: 1 },
      1000,
      fiveanimation
    );
    $(" .kirby, .line4").removeClass("disableClick");
  }, 1000);
}

function fiveanimation() {
  setTimeout(function() {
    $(".mark, .line5").animate(
      { backgroundColor: "rgba(239, 153, 87, 0.8)", opacity: 1 },
      1000,
      sixanimation
    );
    $(".mark, .line5").removeClass("disableClick");
  }, 1000);
}

function sixanimation() {
  setTimeout(function() {
    $(".james, .line6").animate(
      { backgroundColor: "rgba(100,130,400,0.7)", opacity: 1 },
      1000,
      sevenanimation
    );
    $(".james, .line6").removeClass("disableClick");
    skip.style.pointerEvents = "none";
    skip.style.cursor = "default";
  }, 1000);
}

function sevenanimation() {
  setTimeout(function() {
    $(".ptContainer").animate({ opacity: 1 }, 1000);
    $(".ptContainer").removeClass("disableClick");
  }, 500);
}

module.exports = {
  oneanimation,
  twoanimation,
  threeanimation,
  fouranimation,
  fiveanimation,
  sixanimation,
  sevenanimation
};
