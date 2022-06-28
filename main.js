// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// create a new variable to select the hidden class in html file
const displayMsg = document.getElementById('modal')
const errorMsg = document.getElementById('modal-message')
const likeHearts = document.querySelectorAll(".like-glyph");

// function for clicking an empty heart
likeHearts.forEach(element => {
  element.addEventListener('click', () => {
  mimicServerCall()
  .then(() => {
    //(element.innerHTML === EMPTY_HEART)?FULL_HEART : EMPTY_HEART
    if (element.textContent === EMPTY_HEART) {
       element.textContent = FULL_HEART
       element.className = 'activated-heart'
    } else {
      element.textContent = EMPTY_HEART
      elememt.className = 'activated-heart'
    }
  })
  .catch(error => {
    displayMsg.classList.remove('hidden')
    errorMsg.textContent = error
    setTimeout(() => {
      displayMsg.classList.add('hidden')
      errorMsg.textContent = ''
    }, 2000)
  })
  })
  })






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
