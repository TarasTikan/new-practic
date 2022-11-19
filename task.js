// const paragrafEl = document.querySelectorAll('p')
// const buttonEl = document.querySelector('button')

// buttonEl.addEventListener('click', onBtnClick)

// function onBtnClick (evt) {
//     for(let i = 0; i < paragrafEl.length; i +=1) {
//       paragrafEl[i].textContent = i + 1
//       console.log(paragrafEl.textContent = i + 1)
//     }
    
// }

// const inputNumber = document.querySelector('#test')
// const inputResult = document.querySelector('#result')
// const btn = document.querySelector('button')

// btn.addEventListener('click', onClickResult) 

// function onClickResult (e) {
//     const numberEl = Number(inputNumber.value)
//    if(isNaN(numberEl)) {
//     return alert("Ввели не число")
//    }
//     inputResult.value = numberEl * numberEl
// }

const spantEl = document.querySelectorAll('span')

for(let i = 0; i < spantEl.length; i += 1) {
spantEl[i].addEventListener('click', changeRedBg)
}

function changeRedBg () {
    this.style.background = 'red'
    this.removeEventListener('click', changeRedBg)
    this.addEventListener('click', changeGreenBg)
}

function changeGreenBg () {
    this.style.background = 'green'
    this.removeEventListener('click', changeGreenBg)
    this.addEventListener('click', changeRedBg)
}