const email = document.getElementById("email");
const btn = document.getElementById("btn");
const err = document.getElementById("error");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let eml = email.value;
  if (!emailVal(eml) || eml == "") {
    console.log("gresit");
    err.style.opacity = "1";
    email.style.border = "1px solid red";
  } else {
    err.style.opacity = "0";
    email.style.border = "1px solid hsl(223, 100%, 88%)";
  }
});

function emailVal(eml) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(eml);
}
