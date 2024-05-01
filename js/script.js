function popup (startSel, popapSel, closeSel) {
    const startBtn = document.querySelector(startSel),
          modal = document.querySelector(popapSel),
          finishBtn = document.querySelector(closeSel),
          body = document.body

    startBtn.addEventListener('click', function(e){
        e.preventDefault()
        body.classList.add('lock')
        modal.classList.remove('hide')
    })
    finishBtn.addEventListener('click', function(e){
        e.preventDefault()
        body.classList.remove('lock')
        modal.classList.add('hide')
    })
    modal.addEventListener('click', function(e){
        if(e.target.classList.contains('block-popup')){
            body.classList.remove('lock')
            modal.classList.add('hide')
        }
    })
}
popup('.footer__text', '.block-popup', '.block-popup__close');
function cards (itemsSel, btnSel) {
    const items = document.querySelectorAll(itemsSel),
          btn = document.querySelector(btnSel)
    let counter = 0

    items.forEach(item => {
        item.addEventListener('click', function(){
            if(item.classList.contains('matches')){
                item.classList.remove('matches')
                counter--
            } else {
                item.classList.add('matches')
                counter++
            }
            if(counter == 6){
                btn.classList.add('formBtn')
            } else {
                btn.classList.remove('formBtn')
            }
        })
    })
}
cards('.block-match__item','.block-match__button');
const form = document.querySelector('form')
const input = document.querySelector('.name-input')
const btn = document.querySelector('.block-match__button')

form.addEventListener('submit', sendMessage)

function sendMessage (e) {
    e.preventDefault()
    let valid = validForm(form)
}
function validForm (form) {
    let counter = 0
    let require = document.querySelectorAll('._req')
    for (let i = 0; i < require.length; i++) {
        const input = require[i]
        removeError (input)
        if(input.value ===''){
            counter++
            addError(input)
        }
    }
}
function addError (input) {
    // input.parentElement.classList.add('_err')
    input.classList.add('_err')
}
function removeError (input) {
    // input.parentElement.classList.remove('_err')
    input.classList.remove('_err')    
}
input.addEventListener('input', function(){
    let number = parseInt(this.value)
    if(number > 111111){
        btn.classList.add('formBtn')
    } else {
        btn.classList.remove('formBtn')
    }
});

