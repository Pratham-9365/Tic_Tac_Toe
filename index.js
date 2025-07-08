const boxes = document.querySelectorAll('.button')
const result = document.getElementById('result')
const resetBtn = document.getElementById('reset-btn')
const newbtn = document.getElementById('newgame')
const msgcontainer = document.getElementById('msg-container')
const msg = document.getElementById('msg')

let turnO = true
let count = 0

function enableboxes() {
    for (let box of boxes) {
        box.disabled = false
        box.textContent = ''

    }
}

function disableboxes() {
    boxes.forEach(box => {
        box.disabled = true

    });
}
function resetbutton() {
    turnO = true
    count = 0
    enableboxes()
    msgcontainer.classList.add('hide')
    result.classList.add('hide')

}

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

function showwinner(winner) {

    result.innerText = `Congratulations , ${winner} Wins `
    result.classList.remove('hide')

    msgcontainer.classList.remove('hide')
    disableboxes()

}
function checkWinner() {
    for (let combo of winningCombos) {
        const val1 = boxes[combo[0]].innerText
        const val2 = boxes[combo[1]].innerText
        const val3 = boxes[combo[2]].innerText
        console.log(val1, val2, val3)
        if (val1 != '' && val2 != '' && val3 != '') {
            if (val1 === val2 && val2 === val3) {
                showwinner(val1)

            }
        }
    }
}

for (let box of boxes) {
    box.addEventListener('click', function (e) {
        if (turnO) {
            e.target.textContent = 'O'
            e.target.style.color = 'blue'
            turnO = false

        }
        else {
            e.target.textContent = 'X'
            e.target.style.color = 'red'
            turnO = true

        }
        box.disabled = true
        count++
        checkWinner()
        if (count === 9 && msgcontainer.classList.contains('hide')) {
            result.innerText = " It's a Draw"
            result.classList.remove('hide')
            msgcontainer.classList.remove('hide') 
        }
    })
}
newbtn.addEventListener('click', resetbutton)
resetBtn.addEventListener('click', resetbutton)
