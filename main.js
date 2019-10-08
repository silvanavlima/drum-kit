
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // pegando a div correta
    if (!audio) return //stop the function from running all together
    audio.currentTime = 0 //rewind to the start
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return //skip it if its not a transform
    console.log(this)
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
// console.log(keys)
// O transitionend é acionado quando uma transição de CSS é concluída. No caso em que uma transição é removida antes da conclusão, como se ela transition-property foi removida ou displayconfigurada como none, o evento não será gerado.
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
