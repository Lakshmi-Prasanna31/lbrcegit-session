let c = 0;

function inc() {
    document.getElementById("count").innerHTML = ++c;
}

function dec() {
    document.getElementById("count").innerHTML = --c;
}

function res() {
    c = 0;
    document.getElementById("count").innerHTML = c;
}
