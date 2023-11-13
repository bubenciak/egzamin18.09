const waga = document.querySelector("#waga");
const wzrost = document.querySelector("#wzrost");
const display = document.querySelector("#display");
const kategoria = document.querySelector("#kategoria");
const btn = document.querySelector("#btn");

function fn1(n1) {
  console.log(n1);
}

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const wagaValue = waga.value;
  const wzrostValue = wzrost.value / 100;

  const bmi = wagaValue / (wzrostValue * wzrostValue);

  console.log(bmi.toFixed(2));
  display.innerHTML = `Twoje BMI wynosi: ${bmi.toFixed(2)}`;
  kategoria.style.color = "#f00";
  if (bmi < 18.5) {
    kategoria.innerHTML = "Niedowaga";
  } else if (bmi < 25) {
    kategoria.innerHTML = "Norma";
    kategoria.style.color = "#0F0";
  } else if (bmi < 30) {
    kategoria.innerHTML = "Nadwaga";
  } else if (bmi < 35) {
    kategoria.innerHTML = "Otyłość 1st";
  } else if (bmi < 40) {
    kategoria.innerHTML = "Otyłość 2st";
  } else {
    kategoria.innerHTML = "Otyłość 3st";
  }
});
