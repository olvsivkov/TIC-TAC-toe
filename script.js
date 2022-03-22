// add constants

const area = document.querySelector('.area')
let step = 0
let result = ''
let content = document.querySelector('.cont')
let btnClose = document.querySelector('.btn-close')
const areaDark = document.querySelector('.area-dark')

// check steps

function clickBox(event) {
    if (event.target.className = 'box') {
        if (step % 2 === 0) {
            event.target.innerHTML = "X";
        } else event.target.innerHTML = "O";
        step++
        console.log(step)
        check()
    }
}

area.addEventListener('click', clickBox)


//  function that identifies the winner

function check() {
    const boxes = document.querySelectorAll('.box');

    if (step === 9) {
        content.innerHTML = 'Ничья'
        afterWinAreaBlock()
    }

    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            result = 'крестики';
            winner(result);

        } else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O') {
            result = 'нолики';
            winner(result);

        }
    }
}

function afterWinAreaBlock() {
    areaDark.style.display = 'block';
}

function winner(arg) {
    content.innerHTML = `Победили ${arg}!`
    afterWinAreaBlock()

}

// restart game function

function reloadGame() {
    location.reload()
}

btnClose.addEventListener('click', reloadGame)