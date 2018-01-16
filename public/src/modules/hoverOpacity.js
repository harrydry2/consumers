import { $, $$ } from "./bling";

const green = $$("a.green");
const yellow = $$("a.yellow");
const blue = $$("a.blue");
const pink = $$("a.pink");
const orange = $$("a.orange");

const green1 = $$("div.green");
const yellow1 = $$("div.yellow");
const blue1 = $$("div.blue");
const pink1 = $$("div.pink");
const orange1 = $$("div.orange");

const tom = $$(".tom");
const jim = $$(".jim");
const austin = $$(".austin");
const mark = $$(".mark");
const james = $$(".james");
const james2 = $$(".james2");

const line1 = $$(".p1line1");
const line2 = $$(".p1line2");
const line3 = $$(".p1line3");
const line4 = $$(".p1line4");
const line5 = $$(".p1line5");
const line6 = $$(".p1line6");

green.on("mouseover", hoverOnGreen);
green.on("mouseleave", hoverOffGreen);
yellow.on("mouseover", hoverOnYellow);
yellow.on("mouseleave", hoverOffYellow);
blue.on("mouseover", hoverOnBlue);
blue.on("mouseleave", hoverOffBlue);
pink.on("mouseover", hoverOnPink);
pink.on("mouseleave", hoverOffPink);
orange.on("mouseover", hoverOnOrange);
orange.on("mouseleave", hoverOffOrange);

green1.on("mouseover", hoverOnGreen1);
green1.on("mouseleave", hoverOffGreen1);
yellow1.on("mouseover", hoverOnYellow1);
yellow1.on("mouseleave", hoverOffYellow1);
blue1.on("mouseover", hoverOnBlue1);
blue1.on("mouseleave", hoverOffBlue1);
pink1.on("mouseover", hoverOnPink1);
pink1.on("mouseleave", hoverOffPink1);
orange1.on("mouseover", hoverOnOrange1);
orange1.on("mouseleave", hoverOffOrange1);

tom.on("mouseover", hoverOnTom);
tom.on("mouseleave", hoverOffTom);
jim.on("mouseover", hoverOnJim);
jim.on("mouseleave", hoverOffJim);
austin.on("mouseover", hoverOnAustin);
austin.on("mouseleave", hoverOffAustin);
mark.on("mouseover", hoverOnMark);
mark.on("mouseleave", hoverOffMark);
james.on("mouseover", hoverOnJames);
james.on("mouseleave", hoverOffJames);
james2.on("mouseover", hoverOnJames2);
james2.on("mouseleave", hoverOffJames2);

function hoverOnGreen() {
  green.forEach(color => {
    color.classList.add("hoverOpacityG");
  });
}

function hoverOffGreen() {
  green.forEach(color => {
    color.classList.remove("hoverOpacityG");
  });
}

function hoverOnGreen1() {
  green1.forEach(color => {
    color.classList.add("hoverOpacityG");
  });
}

function hoverOffGreen1() {
  green1.forEach(color => {
    color.classList.remove("hoverOpacityG");
  });
}

function hoverOnYellow() {
  yellow.forEach(color => {
    color.classList.add("hoverOpacityY");
  });
}

function hoverOffYellow() {
  yellow.forEach(color => {
    color.classList.remove("hoverOpacityY");
  });
}

function hoverOnYellow1() {
  yellow1.forEach(color => {
    color.classList.add("hoverOpacityY");
  });
}

function hoverOffYellow1() {
  yellow1.forEach(color => {
    color.classList.remove("hoverOpacityY");
  });
}

function hoverOnBlue() {
  blue.forEach(color => {
    color.classList.add("hoverOpacityB");
  });
}

function hoverOffBlue() {
  blue.forEach(color => {
    color.classList.remove("hoverOpacityB");
  });
}

function hoverOnBlue1() {
  blue1.forEach(color => {
    color.classList.add("hoverOpacityB");
  });
}

function hoverOffBlue1() {
  blue1.forEach(color => {
    color.classList.remove("hoverOpacityB");
  });
}

function hoverOnPink() {
  pink.forEach(color => {
    color.classList.add("hoverOpacityP");
  });
}

function hoverOffPink() {
  pink.forEach(color => {
    color.classList.remove("hoverOpacityP");
  });
}

function hoverOnPink1() {
  pink1.forEach(color => {
    color.classList.add("hoverOpacityP");
  });
}

function hoverOffPink1() {
  pink1.forEach(color => {
    color.classList.remove("hoverOpacityP");
  });
}

function hoverOnOrange() {
  orange.forEach(color => {
    color.classList.add("hoverOpacityO");
  });
}

function hoverOffOrange() {
  orange.forEach(color => {
    color.classList.remove("hoverOpacityO");
  });
}

function hoverOnOrange1() {
  orange1.forEach(color => {
    color.classList.add("hoverOpacityO");
  });
}

function hoverOffOrange1() {
  orange1.forEach(color => {
    color.classList.remove("hoverOpacityO");
  });
}

// Page1b

function hoverOnTom() {
  tom.forEach(color => {
    color.classList.add("hoverOpacityG");
  });
}
function hoverOffTom() {
  tom.forEach(color => {
    color.classList.remove("hoverOpacityG");
  });
}

function hoverOnJim() {
  jim.forEach(color => {
    color.classList.add("hoverOpacityY");
  });
}

function hoverOffJim() {
  jim.forEach(color => {
    color.classList.remove("hoverOpacityY");
  });
}

function hoverOnAustin() {
  austin.forEach(color => {
    color.classList.add("hoverOpacityB");
  });
}

function hoverOffAustin() {
  austin.forEach(color => {
    color.classList.remove("hoverOpacityB");
  });
}

function hoverOnMark() {
  mark.forEach(color => {
    color.classList.add("hoverOpacityP");
  });
}

function hoverOffMark() {
  mark.forEach(color => {
    color.classList.remove("hoverOpacityP");
  });
}

function hoverOnJames() {
  james.forEach(color => {
    color.classList.add("hoverOpacityO");
  });
}

function hoverOffJames() {
  james.forEach(color => {
    color.classList.remove("hoverOpacityO");
  });
}

function hoverOnJames2() {
  james2.forEach(color => {
    color.classList.add("hoverOpacityM");
  });
}

function hoverOffJames2() {
  james2.forEach(color => {
    color.classList.remove("hoverOpacityM");
  });
}

// Page 1 Highlights
