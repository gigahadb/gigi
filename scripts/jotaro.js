let iris = document.querySelectorAll('.medazinit_item')[0]
let button = document.createElement('button')
let спорса = document.createTextNode('гиги за шаги')
button.appendChild(спорса)
button.setAttribute('onclick','kameni()')

let dio = document.createElement('li')


dio.classList.add('medazinit_item')
let tif = document.createElement('h1')
let rak = document.createTextNode('jorno')
tif.appendChild(rak)
let BIBA =document.createElement('p')
let valve = document.createTextNode('0,00000001')
BIBA.appendChild(valve)
let spawn = document.querySelector('.medazinit_list')
let cilylit = document.createElement('img')
cilylit.src = 'Rectangle 7.6.png'
function bdate(){
 console.log('ну а что')
 iris.classList.add('none')
 spawn.appendChild(dio)
 dio.appendChild(tif)
 dio.appendChild(BIBA)
 dio.appendChild(cilylit)
 dio.appendChild(button)

}

function kameni(){
   button.parentNode.remove();
   iris.classList.remove('none')
}