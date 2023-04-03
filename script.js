const adviceNumber = document.querySelector("#advice-number");
const advice = document.querySelector("#advice-text");
const btn = document.querySelector("#btn");
const apiUrl = "https://api.adviceslip.com/advice";

// async function getAdvice() {
//   try {
//     const response = await fetch(apiUrl);
//     const responseAdvice = await response.json();
//     adviceNumber.textContent = `Advice #${responseAdvice.slip.id}`;
//     advice.textContent = `"${responseAdvice.slip.advice}"`;
//     // console.log(responseAdvice.slip.id);
//     // console.log(responseAdvice.slip.advice);
//   } catch (error) {
//     console.log(error);
//   }
// }

btn.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      adviceNumber.textContent = `Advice #${responseJson.slip.id}`;
      advice.textContent = `"${responseJson.slip.advice}"`;
    });
});
