const title = document.querySelector('.work_h')
let txt = title.innerHTML
title.innerHTML = ''

function typing(i = 0) {
    title.innerHTML += txt[i]
    i++
    if (i < txt.length) {
        setTimeout(() => {
            typing(i)
        }, 300);
    }
}
typing()

