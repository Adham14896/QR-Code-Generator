const qrBox = document.getElementById("qr-box");
const qrCode = document.getElementById("qr-code");
let qrInput = document.getElementById("qr-input");
const generateBtn = document.querySelector("button");
const container = document.querySelector(".container");
const clearBtn = document.querySelector("svg");

const clearInputAndResults = function () {
  qrInput.value = "";
  container.classList.remove("display");
  qrBox.classList.remove("display-qr");
};

const generateQr = function () {
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
  container.classList.add("display");
  qrBox.classList.add("display-qr");
};

generateBtn.addEventListener("click", function () {
  if (qrInput.value.length === 0) alert("Please Type a URL Or Text");
  else {
    generateQr();
  }
});

qrInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") generateQr();
});

clearBtn.addEventListener("click", clearInputAndResults);
