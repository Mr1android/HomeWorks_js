const button_plus_one = document.querySelector('.plus_one')
const button_minusone = document.querySelector('.minus_one')
const num= 0
const plus_minus=1
button_plus_one.onclick = () => {
    console.log(num + plus_minus)
}
button_minusone.onclick = () => {
    console.log(num - plus_minus)
}
