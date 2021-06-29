/*maniac
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

	function makeAudio(src){
		let audio = document.createElement('audio')
		audio.src = 'mp3/' + src
		audio.preload = 'auto'
		audio.setAttribute('type','audio/mpeg')
		audio.load()
		return audio
	}

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
		x: { img:'.k-snare', type:'drum', vol:0.3, rate:2, triplet:true, item:makeAudio('snare_04.mp3') },
		v: { img:'.k-snare', type:'drum', vol:0.3, rate:2, triplet:true, item:makeAudio('snare_04.mp3') },
		c: { img:'.k-snare', type:'drum', vol:0.7, item:makeAudio('rim2.mp3') },
		d: { img:'.k-snare', type:'drum', vol:0.8, item:makeAudio('snare_04.mp3') },
		g: { img:'.k-snare', type:'drum', vol:0.8, item:makeAudio('snare_04.mp3') },
		i: { img:'.crash1', type:'crash', vol:0.8, item:makeAudio('crash1.mp3') },
		o: { img:'.crash2', type:'crash', vol:0.6, item:makeAudio('crash2.mp3') },
		p: { img:'.crash3', type:'crash', vol:0.5, rate:1, item:makeAudio('ride.mp3') },
		q: { img:'.crash3', type:'crash', vol:0.5, rate:1, item:makeAudio('ride.mp3') },
		l: { img:'.crash3', type:'crash', vol:0.6, item:makeAudio('crispride.mp3') },
		w: { img:'.tom1', type:'drum', vol:1, item:makeAudio('tom1_00.mp3') },
		t: { img:'.tom1', type:'drum', vol:1, item:makeAudio('tom1_00.mp3') },
		e: { img:'.tom2', type:'drum', vol:1, item:makeAudio('tom2_02.mp3') },
		y: { img:'.tom2', type:'drum', vol:1, rate:1, item:makeAudio('tom2_02.mp3') },
		r: { img:'.tom3', type:'drum', vol:1, rate:1, item:makeAudio('tom3_00.mp3') },
		u: { img:'.tom3', type:'drum', vol:1, rate:1, item:makeAudio('tom3_00.mp3') }
	}

	function imgFade(img) {
		img = el(img)
		img.style = '-webkit-transform:scale(1.04);transform:scale(1.04);box-shadow:0px 1px 9px #1C1C1C;'
		setTimeout(()=>img.style = '-webkit-transform:scale(1);transform:scale(1);box-shadow:none;',60)
	}

	function playDrum(e){
		let drum = drumset[e.key]
		if(typeof drum === 'undefined' || e.altKey === true) return;
		let audio = (drum.type === 'crash') ? drum.item.cloneNode(true) : drum.item
		audio.currentTime = 0
		audio.volume = drum.vol
		audio.playbackRate = drum.rate || 1
		if (drum.semiopen) setTimeout(()=> audio.volume = 0, drum.semiopen);
		if(drum.triplet) {
			setTimeout(()=> {
				audio.currentTime = 0
				audio.play()
			}, 70)
		}
		return audio.play().then(imgFade(drum.img))
	}
	doc.addEventListener("keydown", playDrum, false)

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