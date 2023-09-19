/*
******************************* SASBA DRUM v1.3 **********************************
Application Name : S-Real Drum
Author Name      : Dedi sasba
Date Create      : 18-04-2020
**********************************************************************************
*/

(function(doc, wd) {
    "use strict";
    wd.cl = console.log;
    wd.ell = e => doc.querySelectorAll(e);
    wd.el = e => doc.querySelector(e);
    const set_audio = Audio.bind(doc)

    function getAudio(mp) {
        const audio = new set_audio();
        let name = './mp3/' + mp['name'],
            vol = mp['vol'] || 1,
            rate = mp['rate'] || 1,
            start_time = mp['start_time'] || 0,
            semiopen = mp['semiopen'] || false,
            triplet = mp['triplet'] || false
        audio.src = name; //`mp3/${name}`
        audio.preload = 'true';
        if (semiopen) setTimeout(() => audio.volume = 0, semiopen);
        if (triplet) {
            setTimeout(() => {
                audio.currentTime = start_time;
                audio.play();
            }, 80);
        }
        audio.currentTime = start_time;
        audio.volume = vol;
        audio.playbackRate = rate;
        return audio;
    }

    const drumset = {
        'a': {
            src: "hh-close.mp3",
            vol: 0.3,
            img: el(".hh-close")
        },
        'h': {
            src: "hh-close.mp3",
            vol: 0.3,
            img: el(".hh-close")
        },
        'k': {
            src: "hh-close.mp3",
            vol: 0.5,
            img: el(".hh-close-right")
        },
        'f': {
            src: "splash2.mp3",
            vol: 0.5,
            img: el(".splash")
        },
        's': {
            src: "hh-open.mp3",
            vol: 0.3,
            img: el(".hh-close")
        },
        'j': {
            src: "hh-open.mp3",
            vol: 0.3,
            img: el(".hh-close")
        },
        'n': {
            src: "hh-open.mp3",
            vol: 0.4,
            semiopen: 270,
            img: el(".hh-close")
        },
        'i': {
            src: "crash1.mp3",
            vol: 0.6,
            img: el(".crash1")
        },
        'o': {
            src: "crash2.mp3",
            vol: 0.5,
            rate: 1.030,
            img: el(".crash2")
        },
        'p': {
            src: "ride.mp3",
            vol: 0.6,
            rate: 1,
            img: el(".crash3"),
            triplet: false
        },
        'm': {
            src: "hh-open.mp3",
            vol: 0.4,
            semiopen: 350,
            img: el(".hh-close")
        },
        'q': {
            src: "ride.mp3",
            vol: 0.5,
            // rate: 1,
            img: el(".crash3")
        },
        'l': {
            src: "crispride.mp3",
            vol: 0.6,
            img: el(".crash3")
        },

    }

    const drumset2 = {
        'z': {
            src: "bass.mp3",
            img: el(".kick1")
        },
        'b': {
            src: "bass.mp3",
            img: el(".kick2")
        },
        'd': {
            src: "snare4.mp3",
            vol: 1,
            img: el(".k-snare")
        },
        'g': {
            src: "snare4.2.mp3",
            vol: 1,
            img: el(".k-snare")
        },
        'w': {
            src: "tom1.mp3",
            vol: 0.8,
            img: el(".tom1")
        },
        'e': {
            src: "tom2.mp3",
            vol: 0.9,
            img: el(".tom2")
        },
        'r': {
            src: "tom3.mp3",
            vol: 0.9,
            img: el(".tom3")
        },
        't': {
            src: "tom1.mp3",
            vol: 0.8,
            img: el(".tom1")
        },
        'y': {
            src: "tom2.mp3",
            vol: 0.9,
            img: el(".tom2")
        },
        'u': {
            src: "tom3.mp3",
            vol: 0.9,
            img: el(".tom3")
        },
        'c': {
            src: "rim2.mp3",
            vol: 0.4,
            img: el(".k-snare")
        },
        'x': {
            src: "snare4.mp3",
            vol: 0.2,
            rate: 2,
            triplet: true,
            img: el(".k-snare")
        },
        'v': {
            src: "snare4.mp3",
            vol: 0.2,
            rate: 2,
            triplet: true,
            img: el(".k-snare")
        }
    }

    function imgFade(img) {
        setTimeout(function() {
            img.style = "-webkit-transform : scale(1); transform: scale(1); box-shadow: none;"
        }, 60)
        img.style = "-webkit-transform : scale(1.04); transform: scale(1.04); box-shadow: 0px 1px 9px #1C1C1C;"
    }

    async function getKey(e) {
        // String.fromCharCode(e.which).toLocaleLowerCase()
        let mp = drumset2[e.key];
        if (mp) {
            imgFade(mp.img);
            await getAudio({
                name: mp.src,
                vol: mp.vol,
                rate: mp.rate,
                semiopen: mp.semiopen,
                triplet: mp.triplet
            }).play();
        }
    }

    doc.addEventListener("keydown", async function(e) {
        let mp = drumset[e.key];
        if (mp) {
            imgFade(mp.img);
            await getAudio({
                name: mp.src,
                vol: mp.vol,
                rate: mp.rate,
                semiopen: mp.semiopen,
                triplet: mp.triplet
            }).play();
        }
    });

    doc.addEventListener("keypress", getKey);

    function resizeDrum() {
        document.querySelector('.oncss').href = window.innerHeight > 750 ? 'css/style_resize.css' : 'css/style.css';
    }

    resizeDrum();

    document.body.onresize = resizeDrum;

    ell("#drum-ring").forEach(function(img) {
        img.addEventListener("click", function(im) {
            im.stopPropagation();
            let get_img = this;
            let tmp;
            Object.entries(drumset).forEach(function(ds) {
                let mp = drumset[ds[0]]
                if (mp.img === get_img) {
                    tmp = mp;
                }
            })
            Object.entries(drumset2).forEach(function(ds) {
                let mp = drumset2[ds[0]]
                if (mp.img === get_img) {
                    tmp = mp;
                }
            })
            let drum = getAudio({
                name: tmp.src,
                vol: tmp.vol,
                rate: tmp.rate,
                semiopen: tmp.semiopen,
                triplet: tmp.triplet
            })
            imgFade(tmp.img)
            return drum.play()
        })
    })

    el(".mp3-file").onclick = function() {
        this.lastElementChild.click()
    }

    el('.mp3-file').lastElementChild.addEventListener("change", function() {
        const file = this.files[0]
        const reader = new FileReader()
        el('.mp-title').textContent = file.name
        reader.onload = function(em) {
            let mp_audio = el('.mp-audio')
            mp_audio.src = em.target.result
            mp_audio.volume = 0.4
            mp_audio.load()
            el('.mp3-file').value = ''
        }
        reader.readAsDataURL(file)
    });
})(document, typeof window !== "undefined" ? window : this)