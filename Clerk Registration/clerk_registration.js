const txt = document.getElementsByClassName("txt");
console.log(txt);
console.log(txt.length);
function checkInput() {
  let len = txt.length;
  while (len >= 0) {
    if (txt[len] == "") {
      alert("Kindly fill all necessary data");
    } else {
      console.log("OK");
    }
    len--;
  }
}
