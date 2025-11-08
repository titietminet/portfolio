const header = document.querySelector("header");
const bordertop = document.querySelector(".borderheadertop");
const borderbottom = document.querySelector(".borderheaderbottom");

function typeWriter(text, elementId, delay = 100) {
  const element = document.getElementById(elementId);
  let index = 0;
  let str = "";

  function type() {
    if (index < text.length) {
      strele = element.innerHTML;
      if (strele.substring(strele.length - 10, strele.lengt) === "&lt;br&gt;") {
        element.innerHTML = strele.substring(0, strele.length - 10) + "<br>";
        element.innerHTML += text[index];
        str += '<br>'
      } else {
        element.innerHTML += text[index];
      }
      index++;
      setTimeout(type, delay);
    }
    else {
      element.innerHTML = text;
    }
  }

  type();
}

if (document.getElementById("txtauto") != null) {
  typeWriter('titouan rault<br>20 ans<br>développeur informatique full stack<br>3eme année BUT informatique<br><a class="gocontact" href="contact.html">contact</a>', 'txtauto', 20);
}

window.addEventListener("scroll", function (e) {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 10) {
    header.classList.add("scroll");
    bordertop.classList.add("scroll");
    borderbottom.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
    bordertop.classList.remove("scroll");
    borderbottom.classList.remove("scroll");
  }
});

const headerresp = document.querySelector('.headerrep');
const closeBtn = document.querySelector('a.close-btn');
const openBtn = document.querySelector('a.open-btn');
const back = document.querySelector('.backresp');
const headerhide = document.querySelector('header');
const body = document.querySelector('body');
const linkheader = document.querySelectorAll('.nav a');

console.log(headerresp, closeBtn, openBtn, back, headerhide, linkheader);

openBtn.addEventListener('click', function (e) {
  e.preventDefault();
  headerresp.classList.add('visible');
  back.classList.add('visible');
  headerhide.classList.add('hide');
  body.classList.add('hide');
});

closeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  headerresp.classList.remove('visible');
  back.classList.remove('visible');
  headerhide.classList.remove('hide');
  body.classList.remove('hide');
});

for (var i = 0; i < linkheader.length; i++) {
  linkheader[i].addEventListener("click", endTel(i));
}

function endTel(i) {
  return function () {
    headerresp.classList.remove('visible');
    back.classList.remove('visible');
    headerhide.classList.remove('hide');
    body.classList.remove('hide');
  }
}

function addScrollAnimation(targetId, scrollnumber) {
  const targetSection = document.getElementById(targetId);
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= scrollnumber) {
      targetSection.classList.add("transit");
    }
  });
}

if (window.screen.width >= 993) {
  addScrollAnimation("timelineiut", 3600);
  addScrollAnimation("timelinelycee", 3500);
  addScrollAnimation("timelinecollege", 3300);
}
else {
  addScrollAnimation("timelineiut", 4300);
  addScrollAnimation("timelinelycee", 4100);
  addScrollAnimation("timelinecollege", 3850);
}

navoroject = document.getElementById("go");

if (navoroject != null) {
  window.addEventListener("scroll", function () {
    if (window.innerWidth > 992) {
      var scrollPosition = window.scrollY;
      if (scrollPosition >= 125) {
        navoroject.style.position = "fixed";
        navoroject.style.padding = "0px";
      }
      else {
        navoroject.style.position = "absolute";
        navoroject.style.padding = "18vh 0px 0px 0px";
      }
    }
  });
}

const a = document.getElementsByClassName("linkprojet");
for (const el of a) {
  el.addEventListener("mouseover", function () {
    el.parentElement.style.boxShadow = "0px 10px 10px grey";
  });
  el.addEventListener("mouseout", function () {
    el.parentElement.style.boxShadow = "0px 0px 0px 0px";
  });
}