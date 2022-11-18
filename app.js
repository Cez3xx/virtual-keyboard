const buttons = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')
const deleteButton = document.querySelector('.delete')
const spaceButton = document.querySelector('.space')
const uppercase = document.querySelectorAll('.upper')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num
        screen.value += value
    })
})

function setUppercase(){
    buttons.forEach(button => button.classList.toggle('uppercase'))
    
}

deleteButton.addEventListener('click', function(){
    screen.value = screen.value.substring(0, (screen.value).length - 1)
})
spaceButton.addEventListener('click', function(){
    screen.value += ' '
})
uppercase.forEach(uppercasebtn => addEventListener('click', setUppercase))