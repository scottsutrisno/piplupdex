let myBtn = document.querySelector("#btn");
let myInput = document.querySelector("#username");
let myMsg = document.querySelector("#desc");

myBtn.addEventListener("click", myFunction);
function myFunction() {
  myMsg.innerHTML = "What? " + myInput.value + "<br><br> is Evolving!";

}
