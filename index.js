var firstNumber = ''
var secondNumber = ''
var operators = ''

// nampilin value
function display(value) {
    document.getElementById("result").value += value;
}

// clear all
function clearAll() {
    document.getElementById("result").value = "";
}

// hapus depan
function clearFront() {
    const del = document.getElementById("result").value;
    const hapus = del.slice(0, -2);
    document.getElementById("result").value = hapus;
}

// persen
function percentage() {
    const persen = document.getElementById("result").value;
    const has = persen/100
    document.getElementById("result").value = has;  // return / output di layar
 } 

// euqal
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q
}

