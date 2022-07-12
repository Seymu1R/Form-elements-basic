let getFormvalue = document.querySelector("form");

getFormvalue.addEventListener("submit", (e) => {
  let userName = document.querySelector("#user-name").value.trim();
  let pasWord = document.querySelector("#password").value.trim();
  let emaIl = document.querySelector("#email").value.trim();

  e.preventDefault();
  if (userName == "" || pasWord == "" || emaIl == "") {
    if (userName == "") {
      document.querySelector("#user-name").classList.add("warning");
      document.querySelector("#span-user-name").innerHTML =
        "It's empty, please fill it out";
    }
    if (pasWord == "") {
      document.querySelector("#password").classList.add("warning");
      document.querySelector("#span-password").innerHTML =
        "It's empty, please fill it out";
    }
    if (emaIl == "") {
      document.querySelector("#email").classList.add("warning");
      document.querySelector("#span-email").innerHTML =
        "It's empty, please fill it out";
    }
  } else {
    const array = [userName, pasWord, emaIl];
    let a = 0;
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    for (const value of array) {
      if (userName.substring(0, 1) == userName.substring(0, 1).toUpperCase()) {
        document.querySelector("#user-name").classList.add("success");
        document.querySelector("#span-suc-user").style.display = "block";
        document.querySelector("#user-name").classList.remove("warning");
        document.querySelector("#span-user-name").innerHTML = "";
        a++;
      } else {
        document.querySelector("#span-user-name").innerHTML =
          "FIRST LETTER OF USERNAME MUST BE CAPITAL";
        document.querySelector("#user-name").classList.add("warning");
      }
      if (pasWord.length > 5) {
        document.querySelector("#password").classList.add("success");
        document.querySelector("#span-suc-password").style.display = "block";
        document.querySelector("#password").classList.remove("warning");
        document.querySelector("#span-password").innerHTML = "";
        a++;
      } else {
        document.querySelector("#span-password").innerHTML =
          "Password must be 6 characters";
        document.querySelector("#password").classList.add("warning");
      }
      if (regex.test(emaIl)) {
        document.querySelector("#email").classList.add("success");
        document.querySelector("#span-suc-email").style.display = "block";
        document.querySelector("#email").classList.remove("warning");
        document.querySelector("#span-email").innerHTML = "";
        a++;
      } else {
        document.querySelector("#span-email").innerHTML =
          "Email is not written correctly.";
        document.querySelector("#email").classList.add("warning");
      }
      if (a == 3) {
        document.querySelector("#span-button").innerHTML = "ACAUNT CREATED";
      }
      break;
    }
  }
});
