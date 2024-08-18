function abc() {
    pogres("a1", 65);
    pogres("b1", 85);
    pogres("c1", 44);
    pogres("d1", 56);
}

function pogres(tol, bar) {
    let a = document.getElementById(tol);
    let b = 0;
    let c = setInterval(ff, 20);

    function ff() {
        if (b >= bar) {
            clearInterval(c);
        } else {
            b++;
            a.style.width = b + "%";
            a.dataset.value = b;
            a.innerHTML = b + "%";
        }
    }
}
abc();
