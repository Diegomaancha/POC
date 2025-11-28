fetch("/Classes/Footer/Footer.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("footer-container").innerHTML = html;
    });
