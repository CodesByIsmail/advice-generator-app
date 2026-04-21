async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice')
  
  const data = await res.json();
  const {advice, id} = data.slip;
  
  updateUI(id, advice)
}

getAdvice()

const idEl = document.querySelector('.adviceId')
const adviceEl = document.querySelector('.adviceText')

function updateUI(id, advice) {
  idEl.innerHTML = id;
  adviceEl.innerHTML = `"${advice}"`
}


const adviceBtn = document.querySelector('button');

adviceBtn.addEventListener('click', getAdvice)
