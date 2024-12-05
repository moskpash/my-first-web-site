var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
var myImage = document.querySelector("img");

myHeading.textContent = "Hello world!";


myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/emotion.png") {
    myImage.setAttribute("src", "images/cripy.jpg");
  } else {
    myImage.setAttribute("src", "images/emotion.png");
  }
};

function setUserName() {
  var myName = prompt("Введите ваше имя:");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Привет, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Привет, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};