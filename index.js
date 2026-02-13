let c = 0;

function inc() {
    if (c < 10) {
        c++;
        document.getElementById("count").textContent = c;
    }
}

function dec() {
    if (c > 0) {
        c--;
        document.getElementById("count").textContent = c;
    }
}

function res() {
    c = 0;
    document.getElementById("count").textContent = c;
}
