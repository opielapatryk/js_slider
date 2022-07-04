import {btnLeft,btnRight,section,img_url,pagination,animation} from './consts.js'
let counter = 0
btnRight.addEventListener('click',()=>{
    counter >= 2 ? counter = 0 : counter += 1
    section.style.backgroundImage=`url(../images/${img_url[counter]})`
})
btnLeft.addEventListener('click',()=>{
    counter <= 0 ? counter = 2 : counter -= 1
    section.style.backgroundImage=`url(../images/${img_url[counter]})`
})
pagination.firstElementChild.addEventListener('click', ()=>{
    section.style.backgroundImage=`url(../images/${img_url[0]})`
    counter = 0
})
pagination.firstElementChild.nextSibling.nextSibling.addEventListener('click', ()=>{
    section.style.backgroundImage=`url(../images/${img_url[1]})`
    counter = 1
})
pagination.firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling.addEventListener('click', ()=>{
    section.style.backgroundImage=`url(../images/${img_url[2]})`
    counter = 2
})
const changeBackground = ()=>{
    counter >= 2 ? counter = 0 : counter += 1
    section.style.backgroundImage=`url(../images/${img_url[counter]})`
}
const start = () => {
        intervalID = setInterval(changeBackground,1000);
}
const stop = () => {
    clearInterval(intervalID);
}
animation.firstElementChild.addEventListener('click', start)
animation.firstElementChild.nextSibling.nextSibling.addEventListener('click', stop)