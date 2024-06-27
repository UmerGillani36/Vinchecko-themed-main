let input = document.getElementById("input");
let caution = document.getElementById("input-caution");
let button = document.getElementById("checkBtn");

input.addEventListener("keyup", () => {
  button.style.cursor = "not-allowed";
  button.style.backgroundColor = "#BDBDBD";
  caution.style.visibility = "visible";
  if (input.value.length == 18) {
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#ee6c4d";
    caution.style.visibility = "hidden";
    button.addEventListener("click", () => {
      alert("hello");
    });
  }
});
