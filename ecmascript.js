let value = document.querySelector("#num");
let count = 0;
let incre = document.querySelector("#incre");
//  let editInp = document.querySelector(".edit");

num.innerHTML = count;
let editV = Number(editInp.value);
function counter(event) {
  event.preventDefault();

  let add = incre.value;
  if (add === "+1") {
    count += 1;
    num.innerHTML = count;
  } else if (add === "+2") {
    count += 2;
    num.innerHTML = count;
    num.innerHTML += "<p>+2</p>";
  } else if (add === "+3") {
    count += 3;
    num.innerHTML = count;
    num.innerHTML += "<p>+3</p>";
  } else if (add === "+4") {
    count += 4;
    num.innerHTML = count;
    num.innerHTML += "<p>+4</p>";
  } else if (add === "+5") {
    count += 5;
    num.innerHTML = count;
    num.innerHTML += "<p>+5</p>";
  } else if (add === "+6") {
    count += 6;
    num.innerHTML = count;
    num.innerHTML += "<p>+6</p>";
  } else if (add === "+7") {
    count += 7;
    num.innerHTML = count;
    num.innerHTML += "<p>+7</p>";
  } else if (add === "+8") {
    count += 8;
    num.innerHTML = count;
    num.innerHTML += "<p>+8</p>";
  } else if (add === "+9") {
    count += 9;
    num.innerHTML = count;
    num.innerHTML += "<p>+9</p>";
  } else if (add === "+10") {
    count += 10;
    num.innerHTML = count;
    num.innerHTML += "<p>+10</p>";
  }
}

function orignal(event) {
  event.preventDefault();
  count = 0;
  num.innerHTML = count;
  num.innerHTML += "<p>Reset to all count</p>";
}

function one(event) {
  event.preventDefault();
  if (count > 0) {
    count--;
    num.innerHTML = count;
  }
}
function edit(event) {
  event.preventDefault();
  num.innerHTML = `<form onsubmit = "update(event)"><input type = "number" class = "edit" value = ${count}></form>`;
  let editInp = document.querySelector(".edit");
  editInp.focus();
}
function update(event) {
  event.preventDefault();
  let editInp = document.querySelector(".edit");
  count = Number(editInp.value);
  editInp.blur();
}
