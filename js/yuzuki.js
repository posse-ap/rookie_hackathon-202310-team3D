//スクロール
window.addEventListener("scroll" , function () {
    const scroll = Array.from(document.querySelectorAll(".scroll-up"));
    scroll.forEach(element => {
        const distance = element.offsetTop;
        //elementの上端が、親要素の上端からどれだけ離れているかをで取得
        const windowHeight = window.innerHeight;
        if (window.scrollY > distance - windowHeight + 200) {
            element.classList.add('on');
        }
    });
});