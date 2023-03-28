const form = document.querySelector(".form__authorization ");
const userPassFirst = document.querySelector("#password1");
const userPassSecond = document.querySelector("#password2");
let flagPas = false;
let flagEmptyPole = false;
const listener = () => {
  const style =
    userPassFirst.value === userPassSecond.value
      ? "border: 1px solid green"
      : "border: 1px solid red";
  userPassFirst.style = style;
  userPassSecond.style = style;
  flagPas = userPassFirst.value === userPassSecond.value;
};
userPassSecond.addEventListener("input", listener);
form.addEventListener("submit", (e) => {
  for (let field of form.querySelectorAll(".form__auth")) {
    if (!field.value) {
      field.style.border = "1px solid red";
      flagEmptyPole = false;
    }
  }
  if (!flagPas || !flagEmptyPole) {
    e.preventDefault();
    alert("поля незаполнены/некорректный пароль");
  }
});
form.addEventListener("click", (e) => {
  if (e.target.classList.contains("form__auth")) {
    e.target.style.border = "1px solid #d9d9d9";
    flagEmptyPole = true;
  }
});
const raiting = document.querySelector(".rating-area");
raiting.addEventListener("click", (e) => {
  if (e.target.type === "radio") {
    alert(`Спасибо за  ${e.target.id}`);
  }
});
