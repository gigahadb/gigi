const video = document.getElementById('Tornado');

const btnplay = document.getElementById('play');

const btnsound = document.getElementById('sound');
function play(){
	if (video.paused){
		video.play();
		btnplay.innerHTML = 'пауза'
	} else{
		video.pause();
		btnplay.innerHTML = 'запуск'
	}
}
function sound(){
	if (video.muted){
		video.muted = false
		btnsound.innerHTML = 'выключить'
	}else{
		video.muted = true
		btnsound.innerHTML = 'включить'
	}
}