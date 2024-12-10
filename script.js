// let input = document.querySelector("input");

// let btns = document.querySelectorAll("button");

// let string = "";

// btns.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.textContent == "=") {
//       string = eval(string);
//       input.value = string;
//     } else if (e.target.textContent == "AC") {
//       string = "";
//       input.value = string;
//     } else if (e.target.textContent == "DEL") {
//       string = string.substring(0, string.length - 1);
//       input.value = string;
//     } else {
//       string += e.target.textContent;
//       input.value = string;
//     }
//   });
// });

let input = document.querySelector("input");

let btns = document.querySelectorAll("button");

let string = "";

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (value === "AC") {
      string = "";
      input.value = string;
    } else if (value === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      // Prevent consecutive operators
      if (
        ["+", "-", "*", "/"].includes(value) &&
        ["+", "-", "*", "/"].includes(string[string.length - 1])
      ) {
        return; // Do nothing if the last character is already an operator
      }
      string += value;
      input.value = string;
    }
  });
});
