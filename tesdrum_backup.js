/*
------------------------------- SASBA DRUM v1.3 ----------------------------------
~o~ Application Name : Sasba~Realdrum
~o~ Author Name      : Dedi sasba
~o~ Date Create      : 18-04-2020
----------------------------------------------------------------------------------
*/

// let req = new XMLHttpRequest();
// 	req.responseType = "text"
// req.onreadystatechange = function(){
// 	if(req.readyState == 4){
// 		window.btoa(req.responseText)
// 	}else{
// 		console.log("false")
// 	}
// }

// req.open("GET", "./mp3/bass.mp3");
// req.send();

(function(doc, wd) {
	'use strict';
	wd.cl = console.log;
	wd.ell = doc.querySelectorAll.bind(doc);
	wd.el = doc.querySelector.bind(doc);

	// step 1
	function makeAudio(src){
		let audio = new wd.Audio('mp3/' + src)
		audio.preload = 'auto'
		audio.currentTime = 0;
		audio.load()
		return audio
	}

	// step 2
	// function makeAudio(src){ 
	// 	let audio = document.createElement('audio') 
	// 	audio.src = 'mp3/' + src 
	// 	audio.preload = 'auto'
	// 	// src="data:audio/mp3;base64,<encoded-file-contents>"
	// 	audio.setAttribute('type','audio/mpeg')
	// 	audio.load()
	// 	return audio
	// }

	const drumset = {
		z: { img:'.kick1', type:'drum', vol:1, item:makeAudio('bass.mp3') },
		b: { img:'.kick2', type:'drum', vol:1, item:makeAudio('bass.mp3') },
		a: { img:'.hh-close', type:'crash', vol:0.6, item:makeAudio('hh-close.mp3') },
		h: { img:'.hh-close', type:'crash', vol:0.6, item:makeAudio('hh-close.mp3') },
		k: { img:'.hh-close-right', type:'crash', vol:0.6, item:makeAudio('hh-close.mp3') },
		n: { img:'.hh-close', type:'crash', vol:0.6, semiopen: 320, item:makeAudio('hh-open.mp3') },
		s: { img:'.hh-close', type:'crash', vol:0.6, item:makeAudio('hh-open.mp3') },
		j: { img:'.hh-close', type:'crash', vol:0.6, item:makeAudio('hh-open.mp3') },
		f: { img:'.splash', type:'crash', vol:0.7, item:makeAudio('splash2.mp3') },
		x: { img:'.k-snare', type:'drum', vol:0.3, rate:2, triplet:true, item:makeAudio('snare4.mp3') },
		v: { img:'.k-snare', type:'drum', vol:0.3, rate:2, triplet:true, item:makeAudio('snare4.mp3') },
		c: { img:'.k-snare', type:'drum', vol:0.7, item:makeAudio('rim2.mp3') },
		d: { img:'.k-snare', type:'drum', vol:0.8, item:makeAudio('snare4.mp3') },
		g: { img:'.k-snare', type:'drum', vol:0.8, item:makeAudio('snare4.mp3') },
		i: { img:'.crash1', type:'crash', vol:0.8, item:makeAudio('crash1.mp3') },
		o: { img:'.crash2', type:'crash', vol:0.7, item:makeAudio('crash2.mp3') },
		p: { img:'.crash3', type:'crash', vol:0.5, rate:1, item:makeAudio('ride.mp3') },
		q: { img:'.crash3', type:'crash', vol:0.5, rate:1, item:makeAudio('ride.mp3') },
		l: { img:'.crash3', type:'crash', vol:0.6, item:makeAudio('crispride.mp3') },
		w: { img:'.tom1', type:'drum', vol:1, item:makeAudio('tom1.mp3') },
		t: { img:'.tom1', type:'drum', vol:1, item:makeAudio('tom1.mp3') },
		e: { img:'.tom2', type:'drum', vol:1, item:makeAudio('tom2.mp3') },
		y: { img:'.tom2', type:'drum', vol:1, rate:1, item:makeAudio('tom2.mp3') },
		r: { img:'.tom3', type:'drum', vol:1, rate:1, item:makeAudio('tom3.mp3') },
		u: { img:'.tom3', type:'drum', vol:1, rate:1, item:makeAudio('tom3.mp3') }
	}

	function imgFade(img) {
		img = el(img)
		img.style = '-webkit-transform:scale(1.06);transform:scale(1.06);box-shadow:0px 1px 9px #1C1C1C;'
		setTimeout(()=>img.style = '-webkit-transform:scale(1);transform:scale(1);box-shadow:none;',60)
	}

	async function playDrum(e){
		let drum = drumset[e.key]
		if(typeof drum === 'undefined' || e.altKey === true) return;
		let mp = await (drum.type === 'crash') ? drum.item.cloneNode(true) : drum.item
		mp.currentTime = 0
		mp.volume = drum.vol
		mp.playbackRate = drum.rate || 1
		if (drum.semiopen) setTimeout(()=> mp.volume = 0, drum.semiopen);
		if(drum.triplet) {
			await setTimeout(()=> {
				mp.currentTime = 0
				mp.play()
			}, 70)
		}
		// await mp.play().then(imgFade(drum.img))
		imgFade(drum.img) mp.play()
		return mp.remove()
	}
	doc.addEventListener("keydown", playDrum)

   ell("#drum-ring").forEach(function(img) {
   	img.addEventListener("click", function(im) {
   		im.stopPropagation();
   		let tmp
         Object.entries(drumset).forEach(ds=> {
             let mp = drumset[ds[0]]
             if (el(mp.img) == this) tmp = mp
         })
         tmp.item.currentTime = 0
         tmp.item.play()
         imgFade(tmp.img)
      })
   })

   el(".mp3-file").onclick = function() {
      this.lastElementChild.click()
      this.lastElementChild.addEventListener('change', function() {
			const file = this.files[0]
			const reader = new FileReader()
			el('.mp-title').textContent = file.name.replace('.mp3','')
			reader.onload = function(em) {
				let mp_audio = el('.mp-audio')
				mp_audio.src = em.target.result
				mp_audio.volume = 0.5
				mp_audio.load()
				el('.mp3-file').value = ''
			}
			reader.readAsDataURL(file)
		})
   }
})(document, typeof window !== "undefined" ? window : this)