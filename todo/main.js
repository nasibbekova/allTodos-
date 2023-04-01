import axios from 'axios'

const BASE_URL = "http://localhost:9100"

let cont = document.querySelector('.container')
let tomorrow_three = document.querySelector('.tomorrow_three')
let later_ten = document.querySelector('.later_ten')

axios.get(BASE_URL + '/users')
  .then(res => reload(res.data))

const allArr = []


function reload(arr) {
  cont.innerHTML = ""
  for (let item of arr) {
    let html = `
    <div class="item">
    <b></b>
    <h3>Buy S Plaid!</h3>
    <p>${item.title}</p>
    <span>
    ${item.left}</span>
  </div>`
    if (item.left <= 5) {
      cont.innerHTML += html
    }
    else if (item.left <= 3 ) {
      tomorrow_three.innerHTML += html
    } else if(item.left <= 10) {
      later_ten.innerHTML += html
    }
  }
}


document.getElementById('b').onclick = changeColor;

function changeColor() {
  document.style.color = "#FFC700";
  return false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault()

  let task = {
    id: Math.random()
  }

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    task[key] = value
  })

  reload(allArr)
})