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
    wd.ell = doc['querySelectorAll']['bind'](doc);
    wd.el = doc['querySelector']['bind'](doc);

    function makeAudio(src) {
        let mp = new wd.Audio()
        mp['src'] = 'mp3/' + src
        mp['preload'] = 'auto'
        mp['currentTime'] = 0;
        return mp;
    }

    const drumKeys = [];

    function makeDrumKey(keyNum, keyName, imgName, typeName, volume = 1, soundName, rate = 1, tripletName = false, semiopen = null) {
        return drumKeys[keyNum] = [{
            key: keyName,
            img: imgName,
            type: typeName,
            vol: volume,
            name: soundName,
            rate: rate,
            triplet: tripletName,
            semiopen: semiopen
        }]
    }
    makeDrumKey(65, "A", '.hh-close', 'crash', 0.4, 'hh-close.mp3')
    makeDrumKey(66, "B", '.kick2', 'drum', 1, 'bass.mp3')
    makeDrumKey(67, "C", '.k-snare', 'drum', 0.4, 'rim2.mp3')
    makeDrumKey(68, "D", '.k-snare', 'drum', 0.8, 'snare4.mp3')
    makeDrumKey(69, "E", '.tom2', 'drum', 1, 'tom2.mp3')
    makeDrumKey(70, "F", '.splash', 'crash', 0.5, 'splash2.mp3')
    makeDrumKey(71, "G", '.k-snare', 'drum', 0.8, 'snare4.mp3')
    makeDrumKey(72, "H", '.hh-close', 'crash', 0.4, 'hh-close.mp3')
    makeDrumKey(73, "I", '.crash1', 'crash', 0.650, 'crash1.mp3')
    makeDrumKey(74, "J", '.hh-close', 'crash', 0.3, 'hh-open.mp3')
    makeDrumKey(75, "K", '.hh-close-right', 'crash', 0.4, 'hh-close.mp3')
    makeDrumKey(76, "L", '.crash3', 'crash', 0.5, 'crispride.mp3')
        // makeDrumKey(77, "M", '.kick2', 'drum', 1, 'bass.mp3')
    makeDrumKey(78, 'N', '.hh-close', 'crash', 0.3, 'hh-open.mp3', 1, false, 300)
    makeDrumKey(79, 'O', '.crash2', 'crash', 0.650, 'crash2.mp3')
    makeDrumKey(80, "P", '.crash3', 'crash', 0.6, 'ride.mp3', 1)
    makeDrumKey(81, "Q", '.crash3', 'crash', 0.5, 'ride.mp3', 1)
    makeDrumKey(82, "R", '.tom3', 'drum', 1, 'tom3.mp3', 1)
    makeDrumKey(83, "S", '.hh-close', 'crash', 0.3, 'hh-open.mp3')
    makeDrumKey(84, "T", '.tom1', 'drum', 1, 'tom1.mp3')
    makeDrumKey(85, "U", '.tom3', 'drum', 1, 'tom3.mp3', 1)
    makeDrumKey(86, "V", '.k-snare', 'drum', 0.2, 'snare4.mp3', 2, true)
    makeDrumKey(87, "W", '.tom1', 'drum', 1, 'tom1.mp3')
    makeDrumKey(88, "X", '.k-snare', 'drum', 0.2, 'snare4.mp3', 2, true)
    makeDrumKey(89, "Y", '.tom2', 'drum', 1, 'tom2.mp3', 1)
    makeDrumKey(90, 'Z', '.kick1', 'drum', 1, 'bass.mp3')

    function imgFade(img) {
        img = el(img)
        img['style'] = '-webkit-transform:scale(1.06);transform:scale(1.06);box-shadow:0px 1px 9px #1C1C1C;'
        setTimeout(() => img['style'] = '-webkit-transform:scale(1);transform:scale(1);box-shadow:none;', 60)
    }

    doc.addEventListener("keydown", setDrum);

    function setDrum(e) {
        if (e.repeat) return;
        const drum = drumKeys[e.keyCode];
        if (typeof(drum) == 'undefined' || e.altKey == true) return;
        let mp = makeAudio(drum[0]['name'])
        mp.onended = async() => await mp.remove();
        mp.volume = drum[0].vol
        mp.playbackRate = drum[0]['rate'] || 1
        if (drum[0]['semiopen']) setTimeout(() => mp.volume = 0, drum[0]['semiopen']);
        if (drum[0]['triplet']) {
            setTimeout(() => {
                mp.currentTime = 0
                mp.play()
            }, 75)
        }
        return mp.play().then(imgFade(drum[0]['img']));
    }

    ell("#drum-ring").forEach(img => {
        img.addEventListener("click", async function(im) {
            im.stopPropagation();
            let tmp;
            Object.entries(drumKeys).forEach((drumKey) => {
                let set_mp = drumKeys[drumKey[0]][0]
                if (el(set_mp.img) == this) tmp = set_mp;
            })
            let mp = await makeAudio(tmp.name);
            return mp.play().then(imgFade(tmp.img))
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

document.addEventListener('readystatechange', (event) => {
    console.log('oke')
    console.log(event)
})

document.addEventListener("DOMContentLoaded", function(e) {

    function makeAudio(src) {
        let mp = new wd.Audio()
        mp['src'] = 'mp3/' + src
        mp['preload'] = 'auto'
        mp['currentTime'] = 0;
        return mp;
    }
    console.log(document.readyState)
    setTimeout(() => makeAudio('hh-close.mp3').play(), 1000)
    console.log(e)
})