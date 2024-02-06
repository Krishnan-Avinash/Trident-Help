const mob = document.querySelector("#mob");
const num = document.querySelector("#num");
const pwd = document.querySelector("#pwd");
function checkInput() {
  if (mob.value == "" || num.value == "" || pwd.value == "") {
    alert("Kindly fill all details");
  }
}
