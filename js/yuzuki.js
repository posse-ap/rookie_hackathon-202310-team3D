//スクロール
window.addEventListener("scroll" , function () {
    const scroll = Array.from(document.querySelectorAll(".scroll-up"));
    scroll.forEach(element => {
        const distance = element.offsetTop;
        const windowHeight = window.innerHeight;
        if (window.scrollY > distance - windowHeight + 200) {
            element.classList.add('on');
        }
    });
});

//tab
document.querySelector('#yuz-tabMU').addEventListener('click', function () {
    tabChange("mu")
});
document.querySelector('#yuz-tabROW').addEventListener('click', function () {
    tabChange("row")
});
document.querySelector('#yuz-tabCOL').addEventListener('click', function () {
    tabChange("col")
});
function tabChange(tab) {
    const ACTmu = document.querySelector('#yuz-ACTmu');
    const ACTrow = document.querySelector('#yuz-ACTrow');
    const ACTcol = document.querySelector('#yuz-ACTcol');
    const ACTul = document.querySelectorAll('.yuz-ACTul');
    ACTul.forEach(element => {
        element.style.display = "none"
    });
    if (tab == "mu") {
        ACTmu.style.display = "block"
    } else if (tab == "row") {
        ACTrow.style.display = "block"
        
    } else if (tab == "col") {
        ACTcol.style.display = "block"
    }
}