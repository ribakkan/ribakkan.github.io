/*
******************************* SASBA DRUM v1.3 **********************************
Application Name : S-Real Drum
Author Name      : Dedi sasba
Date Create      : 18-04-2020
**********************************************************************************
*/
(function (doc, wd) {
	"use strict";
	wd.cl = console.log;
	wd.ell = e => doc.querySelectorAll(e);
	wd.el = e => doc.querySelector(e);
	const set_audio = Audio.bind(doc)
	function getAudio(mp){
		const audio = new set_audio()
		let name = mp.name, vol = mp.vol || 1, rate = mp.rate || 1, start_time = mp.start_time || 0, semiopen = mp.semiopen || false, triplet = mp.triplet || false
		audio.src = `mp3/${name}`
		audio.preload = "auto"
		if(semiopen) setTimeout(function(){ audio.volume = 0 }, semiopen);
		if(triplet){
			setTimeout(function(){
				audio.currentTime = start_time
				audio.play()
			}, 100)
		}
		audio.currentTime = start_time
		audio.volume = vol
		audio.playbackRate = rate
		return audio;
	}

	const drumset = {
		'z' : { src : "bass.mp3", img : el(".kick1") },
		'b' : { src : "bass2.mp3", img : el(".kick2") },
		'a' : { src : "hh-close.mp3", vol : 0.6,  img : el(".hh-close") },
		'h' : { src : "hh-close.mp3", vol : 0.6, img : el(".hh-close") },
		'k' : { src : "hh-close.mp3", vol : 0.6, img : el(".hh-close-right") },
		'd' : { src : "snare_04.mp3", vol : 1, img : el(".k-snare") },
		'g' : { src : "snare_04.mp3", vol : 1, img : el(".k-snare") },
		'f' : { src : "splash2.mp3", vol : 0.8, img : el(".splash") },
		's' : { src : "hh-open.mp3", vol : 0.6, img : el(".hh-close") },
		'j' : { src : "hh-open.mp3", vol : 0.6, img : el(".hh-close") },
		'n' : { src : "hh-open.mp3", vol : 0.6, semiopen : 320, img : el(".hh-close") },
		'i' : { src : "crash1.mp3", vol : 0.8, img : el(".crash1") },
		'o' : { src : "crash2.mp3", vol : 0.5, rate :  1.030, img : el(".crash2") },
		'p' : { src : "ride.mp3", vol : 0.6, rate : 1.05, img : el(".crash3") },
		'q' : { src : "ride.mp3", vol : 0.6, rate : 1.05, img : el(".crash3") },
		'l' : { src : "crispride.mp3", vol : 0.6, img : el(".crash3") },
		'w' : { src : "tom1_00.mp3", vol : 0.9, img : el(".tom1") },
		'e' : { src : "tom2_02.mp3", vol : 0.9, img : el(".tom2") },
		'r' : { src : "tom3_00.mp3", vol : 0.9, img : el(".tom3") },
		't' : { src : "tom1_00.mp3", vol : 0.9, img : el(".tom1") },
		'y' : { src : "tom2_02.mp3", vol : 0.9, img : el(".tom2") },
		'u' : { src : "tom3_00.mp3", vol : 0.9, img : el(".tom3") },
		'c' : { src : "rim2.mp3", vol : 0.5, img : el(".k-snare") },
		'x' : { src : "snare_04.mp3", vol : 0.3, rate : 2.5, triplet : true, img : el(".k-snare") },
		'v' : { src : "snare_04.mp3", vol : 0.3, rate : 2.5, triplet : true, img : el(".k-snare") }
	}

	function imgFade(img){
		setTimeout(function(){img.style = "-webkit-transform : scale(1); transform: scale(1); box-shadow: none;"},60)
		img.style = "-webkit-transform : scale(1.04); transform: scale(1.04); box-shadow: 0px 1px 9px #1C1C1C;"
	}

	function getKey(e) {
		// String.fromCharCode(e.which).toLocaleLowerCase()
		let mp = drumset[e.key]
		if(mp) {
			getAudio({name : mp.src, vol : mp.vol, rate : mp.rate, semiopen : mp.semiopen, triplet : mp.triplet}).play()
			imgFade(mp.img)
		}
	}
	doc.addEventListener("keypress", getKey, false)

	ell("#drum-ring").forEach(function(img){
		img.addEventListener("click", function(im){
			im.stopPropagation();
			let get_img = this
			let tmp
			Object.entries(drumset).forEach(function(ds){
				let mp = drumset[ds[0]]
				if(mp.img == get_img){
					tmp = mp;
				}
			})
			let drum = getAudio({name : tmp.src, vol : tmp.vol, rate : tmp.rate, semiopen : tmp.semiopen, triplet : tmp.triplet})
			imgFade(tmp.img)
			return drum.play()
		})
	})

	el(".mp3-file").onclick = function(){this.lastElementChild.click()}

	el('.mp3-file').lastElementChild.addEventListener("change", function(){
		const file = this.files[0]
		const reader = new FileReader()
		el('.mp-title').textContent = file.name
		reader.onload = function (em) {
			let mp_audio = el('.mp-audio')
			mp_audio.src = em.target.result
			mp_audio.volume = 0.4
			mp_audio.load()
			el('.mp3-file').value = ''
		}
		reader.readAsDataURL(file)
	});
})(document, typeof window !== "undefined" ? window : this)