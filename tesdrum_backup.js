/*
------------------------------- SASBA DRUM v2 ----------------------------------
~o~ Application Name : Sasba~Realdrum
~o~ Author Name      : Dedi sasba
~o~ Date Create      : 18-04-2020
~o~ Date Update      : 19-09-2023
----------------------------------------------------------------------------------
*/
(function(doc, wd) {
    'use strict';
    wd.cl = console.log;
    wd.ell = doc['querySelectorAll']['bind'](doc);
    wd.el = doc['querySelector']['bind'](doc);

    function makeAudio(src) {
        let mp = new wd.Audio()
        mp.ontimeupdate = function(){
            if(Math.floor(mp.duration) < 1) return;
            let timeStamp = Math.floor ((mp.currentTime / mp.duration) * 100)
            if(timeStamp >= 80) {
		mp.volume = 0;
                mp.remove();
            }
            //console.log(Math.floor(timeStamp), mp.duration)
        }
        mp['src'] = './mp3/' + src;
        mp['preload'] = 'auto';
        mp['currentTime'] = 0;
        return mp;
    }


    const drumset = {
        z: {
            key: "Z",
            img: '.kick1',
            type: 'drum',
            vol: 1,
            name: 'bass.mp3'
        },
        b: {
            img: '.kick2',
            type: 'drum',
            vol: 1,
            name: 'bass.mp3'
        },
        a: {
            img: '.hh-close',
            type: 'crash',
            vol: 0.3,
            name: 'hh-close.mp3'
        },
        h: {
            img: '.hh-close',
            type: 'crash',
            vol: 0.3,
            name: 'hh-close.mp3'
        },
        k: {
            img: '.hh-close-right',
            type: 'crash',
            vol: 0.3,
            name: 'hh-close.mp3'
        },
        // short semi open
        n: {
            img: '.hh-close',
            type: 'crash',
            vol: 0.2,
            semiopen: 250,
            name: 'hh-open.mp3'
                // long semi open
        },
        m: {
            img: '.hh-close',
            type: 'crash',
            vol: 0.2,
            semiopen: 300,
            name: 'hh-open.mp3'
        },
        s: {
            img: '.hh-close',
            type: 'crash',
            vol: 0.2,
            name: 'hh-open.mp3'
        },
        j: {
            img: '.hh-close',
            type: 'crash',
            vol: 0.2,
            name: 'hh-open.mp3'
        },
        f: {
            img: '.splash',
            type: 'crash',
            vol: 0.3,
            name: 'splash2.mp3'
        },
        x: {
            img: '.k-snare',
            type: 'drum',
            vol: 0.200,
            rate: 2,
            triplet: true,
            name: 'snare4.2.mp3'
        },
        v: {
            img: '.k-snare',
            type: 'drum',
            vol: 0.200,
            // rate: 2,
            triplet: true,
            name: 'snare4.2.mp3'
        },
        c: {
            img: '.k-snare',
            type: 'drum',
            vol: 0.3,
            name: 'rim2.mp3'
        },
        d: {
            img: '.k-snare',
            type: 'drum',
            vol: 0.8,
            name: 'snare4.mp3'
        },
        g: {
            img: '.k-snare',
            type: 'drum',
            vol: 0.8,
            name: 'snare4.mp3'
        },
        i: {
            img: '.crash1',
            type: 'crash',
            vol: 0.3,
            name: 'crash1.mp3'
        },
        o: {
            img: '.crash2',
            type: 'crash',
            vol: 0.3,
            name: 'crash2.mp3'
        },
        p: {
            img: '.crash3',
            type: 'crash',
            vol: 0.3,
            rate: 1,
            name: 'ride.mp3'
        },
        q: {
            img: '.crash3',
            type: 'crash',
            vol: 0.3,
            rate: 0.5,
            name: 'cymbal-ride-fienup2.mp3'
        },
        l: {
            img: '.crash3',
            type: 'crash',
            vol: 0.3,
            name: 'crispride.mp3'
        },
        w: {
            img: '.tom1',
            type: 'drum',
            vol: 1,
            name: 'tom1.mp3'
        },
        t: {
            img: '.tom1',
            type: 'drum',
            vol: 1,
            name: 'tom1.mp3'
        },
        e: {
            img: '.tom2',
            type: 'drum',
            vol: 1,
            name: 'tom2.mp3'
        },
        y: {
            img: '.tom2',
            type: 'drum',
            vol: 1,
            rate: 1,
            name: 'tom2.mp3'
        },
        r: {
            img: '.tom3',
            type: 'drum',
            vol: 1,
            rate: 1,
            name: 'tom3.mp3'
        },
        u: {
            img: '.tom3',
            type: 'drum',
            vol: 1,
            rate: 1,
            name: 'tom3.mp3'
        }
    }

    function imgFade(img) {
        img = el(img);
        img['style'] = '-webkit-transform:scale(0.96);transform:scale(0.96);box-shadow:0px 2px 9px #1C1C1C;border:1mm ridge rgb(0 200 255 / .4);';
	// img['style'] = '-webkit-transform:scale(1.06);transform:scale(1.06);box-shadow:0px 2px 9px #1C1C1C;';
        setTimeout(() => img['style'] = '-webkit-transform:scale(1);transform:scale(1);box-shadow:none;', 50);
    }

    //wd.addEventListener("keydown", async function(e) {
    //    await playDrum(e);
    //});

    wd.addEventListener("keydown", playDrum);


    async function playDrum(e) {
        if (e.repeat) return;
        let drum = drumset[e.key];
        if (typeof(drum) == 'undefined' || e.altKey == true) return;
        let mp = makeAudio(drum['name']);
        // mp.onended = async() => await mp.remove();
        mp.volume = drum.vol
        mp.playbackRate = drum.rate || 1
        if (drum.semiopen) setTimeout(() => mp.volume = 0, drum.semiopen);
        if (drum.triplet) {
            setTimeout(() => {
                mp.currentTime = 0
                mp.play();
            }, 70);
        }
        await mp.play().then(() => imgFade(drum.img));
    }

    function resizeDrum() {
        document.querySelector('.oncss').href = window.innerHeight > 750 ? './css/style_resize.css' : './css/style.css';
    }

    resizeDrum();

    document.body.onresize = resizeDrum;

    ell("#drum-ring").forEach(img => {
        img.addEventListener("click", async function(im) {
            im.stopPropagation();
            let tmp
            Object.entries(drumset).forEach((ds) => {
                let set_mp = drumset[ds[0]]
                if (el(set_mp.img) == this) tmp = set_mp;
            })
            let mp = await makeAudio(tmp.name);
            mp.play()
            imgFade(tmp.img)
        })
    })

    el(".mp3-file").onclick = function() {
        this.lastElementChild.click()
        this.lastElementChild.addEventListener('change', function() {
            const file = this.files[0]
            const reader = new FileReader()
            el('.mp-title').textContent = file.name.replace('.mp3', '')
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