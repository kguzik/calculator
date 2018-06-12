let result = document.querySelector("#result");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let equate = document.querySelector("#equate");
let del = document.querySelector("#btn-del");
let percent = document.querySelector("#btn-percent");

document.addEventListener('DOMContentLoaded', function() {
  calculate();
});

function calculate() {

  function displayResult(){
    result.innerHTML = eval(operation + result.innerHTML);
    operation = "";
  }
  
  let operation = "";
  let shouldClear = false;
  for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(){
      if (shouldClear == true){
        result.innerHTML = "";
        shouldClear = false;
      }
      result.innerHTML += numbers[i].textContent;
    });
  }
  for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(){
      displayResult();
      operation += result.innerHTML + operators[i].textContent;
      shouldClear = true;
    });
  }

  equate.addEventListener("click", function(){
    displayResult();
  });

  percent.addEventListener("click", function(){
    operation = "/100";
    result.innerHTML = eval(result.innerHTML + operation);
  });

  del.addEventListener("click", function(){
    result.innerHTML = "";
    operation = "";
  });
} 





