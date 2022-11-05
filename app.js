const buttons = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')
const deleteButton = document.querySelector('.delete')
const spaceButton = document.querySelector('.space')
const uppercase = document.querySelector('.upper')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num
        screen.value += value
    })
})
deleteButton.addEventListener('click', function(e){
    screen.value = screen.value.substring(0, (screen.value).length - 1)
})
spaceButton.addEventListener('click', function(){
    screen.value += ' '
})
uppercase.addEventListener('click', function(){
    buttons.classList.add('uppercase')
})