/*
------------------------------- SASBA DRUM v1.3 ----------------------------------
~o~ Application Name : Sasba~Realdrum
~o~ Author Name      : Dedi sasba
~o~ Date Create      : 18-04-2020
----------------------------------------------------------------------------------
*/

(function(doc, wd) {
	'use strict';
	wd.cl = console.log;
	wd.ell = doc.querySelectorAll.bind(doc);
	wd.el = doc.querySelector.bind(doc);

	let aa = document.createElement('audio');
	aa.src = "data:audio/mpeg;base64, T2dnUwACAAAAAAAAAADcCQAAAAAAAJQo2bUBHgF2b3JiaXMAAAAAAkSsAAAAAAAAbaAHAAAAAAC4AU9nZ1MAAAAAAAAAAAAA3AkAAAEAAAA/zaA9ETv///////////////////9TA3ZvcmJpcysAAABYaXBoLk9yZyBsaWJWb3JiaXMgSSAyMDEyMDIwMyAoT21uaXByZXNlbnQpAAAAAAEFdm9yYmlzK0JDVgEACAAAADFMIMWA0JBVAAAQAABgJCkOk2ZJKaWUoSh5mJRISSmllMUwiZiUicUYY4wxxhhjjDHGGGOMIDRkFQAABACAKAmOo...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"
	aa.className = "maniac"
	el('body').append(aa)

	// step 1
	function makeAudio(src){
		let audio = new window.Audio('mp3/' + src)
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
		o: { img:'.crash2', type:'crash', vol:0.6, item:makeAudio('crash2.mp3') },
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
		img.style = '-webkit-transform:scale(1.04);transform:scale(1.04);box-shadow:0px 1px 9px #1C1C1C;'
		setTimeout(()=>img.style = '-webkit-transform:scale(1);transform:scale(1);box-shadow:none;',60)
	}

	async function playDrum(e){
		let drum = drumset[e.key]
		if(typeof drum === 'undefined' || e.altKey === true) return;
		let audio = (drum.type === 'crash') ? drum.item.cloneNode(true) : drum.item
		audio.currentTime = 0
		audio.volume = drum.vol
		audio.playbackRate = drum.rate || 1
		if (drum.semiopen) setTimeout(()=> audio.volume = 0, drum.semiopen);
		if(drum.triplet) {
			await setTimeout(()=> {
				audio.currentTime = 0
				audio.play()
			}, 70)
		}
		// return await audio.play();
		return await audio.play().then(imgFade(drum.img))
	}
	doc.addEventListener("keydown",playDrum, false)

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
				mp_audio.volume = 0.3
				mp_audio.load()
				el('.mp3-file').value = ''
			}
			reader.readAsDataURL(file)
		})
   }
})(document, typeof window !== "undefined" ? window : this)