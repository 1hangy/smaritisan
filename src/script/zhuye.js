;
! function() {

    function $(sel, all) { //获取元素
        if (!all) {
            return document.querySelector(sel);
        } else {
            return document.querySelectorAll(sel)
        }
    }


    const Oli = $('.listshow ul li', 1);
    console.log(Oli)
    Oli.onmouseover = function() {
        for (let i = 0; i < Oli.length; i++) {
            Oli[i].style.color = ' #666';
        }
        this.style.color = '#5079d9';
        console.log(this)
    }

}()