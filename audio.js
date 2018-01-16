function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; //stop function 
    audio.currentTime = 0; //start audio from beginning
    audio.play();
    key.classList.add('playing');
    // console.log(key);
    // console.log(audio);
}

function removeTransition(event) {
  if(event.propertyName !== 'transform') return; //skip if not a 'transform'
  this.classList.remove('playing');
  // console.log(event.propertyName);
  // console.log(this); 
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);