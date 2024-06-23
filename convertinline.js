function convertinline() {
    Array.from(document.querySelectorAll('[onclick]')).forEach(function (t) {
        let code = t.getAttribute('onclick');
        t.removeAttribute('onclick');
        t.addEventListener('click', function () {
            console.log(code);
            eval.apply(this, [code])
        });
    })
}
setInterval(convertinline, 400);