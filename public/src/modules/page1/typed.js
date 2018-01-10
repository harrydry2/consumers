// add Class of Disabled Click to all the names
const skip = document.querySelector(".hcSkipActive");
const p1ptContainer = document.querySelector(".p1ptContainer");
const tom = document.querySelector(".tom");
const jim = document.querySelector(".jim");
const austin = document.querySelector(".austin");
const kirby = document.querySelector(".kirby");
const mark = document.querySelector(".mark");
const james = document.querySelector(".james");
const names = [tom, jim, austin, kirby, mark, james, p1ptContainer];

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

export default function typedWrapperFunction() {
  names.forEach(name => name.classList.add("disableClick"));
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
        { backgroundColor: "rgba(199, 220, 101, .7)", opacity: 1 },
        1000,
        twoanimation
      );
      $(".tom, .p1line1").removeClass("disableClick");
    }, 1000);
  }

  function twoanimation() {
    setTimeout(function() {
      $(".jim, .p1line2").animate(
        { backgroundColor: "rgba(236, 208, 120, .7)", opacity: 1 },
        1000,
        threeanimation
      );
      $(".jim, .p1line2").removeClass("disableClick");
    }, 1000);
  }

  function threeanimation() {
    setTimeout(function() {
      $(".austin, .p1line3").animate(
        { backgroundColor: "rgba(80, 197, 186, 0.7)", opacity: 1 },
        1000,
        fouranimation
      );
      $(".austin, .p1line3").removeClass("disableClick");
    }, 1000);
  }

  function fouranimation() {
    setTimeout(function() {
      $(".kirby, .p1line4").animate(
        { backgroundColor: "rgba(237, 50, 147, 0.6)", opacity: 1 },
        1000,
        fiveanimation
      );
      $(" .kirby, .p1line4").removeClass("disableClick");
    }, 1000);
  }

  function fiveanimation() {
    setTimeout(function() {
      $(".mark, .p1line5").animate(
        { backgroundColor: "rgba(239, 153, 87, 0.8)", opacity: 1 },
        1000,
        sixanimation
      );
      $(".mark, .p1line5").removeClass("disableClick");
    }, 1000);
  }

  function sixanimation() {
    setTimeout(function() {
      $(".james, .p1line6").animate(
        { backgroundColor: "rgba(100,130,400,0.7)", opacity: 1 },
        1000,
        sevenanimation
      );
      $(".james, .p1line6").removeClass("disableClick");
    }, 1000);
  }

  function sevenanimation() {
    skip.style.pointerEvents = "none";
    $(".p1ptContainer").removeClass("disableClick");
    setTimeout(function() {
      $(".p1ptContainer").animate({ opacity: 1 }, 1000);
    }, 500);
  }
}
