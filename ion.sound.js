// Ion.Sound | version 3.0.7 | https://github.com/IonDen/ion.sound
(function(l, e, n, r) {
    l.ion = l.ion || {};
    if (!ion.sound) {
        var m = function(a) {
                a || (a = "undefined");
                if (l.console) {
                    console.warn && "function" === typeof console.warn ? console.warn(a) : console.log && "function" === typeof console.log && console.log(a);
                    var g = n && n("#debug");
                    if (g && g.length) {
                        var b = g.html();
                        g.html(b + a + "<br/>")
                    }
                }
            },
            f = function(a, b) {
                var c;
                b = b || {};
                for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
                return b
            };
        if ("function" !== typeof Audio && "object" !== typeof Audio) e = function() {
                m("HTML5 Audio is not supported in this browser")
            },
            ion.sound = e, ion.sound.play = e, ion.sound.stop = e, ion.sound.pause = e, ion.sound.preload = e, ion.sound.destroy = e, e();
        else {
            e = /iPad|iPhone|iPod/.test(e.appVersion);
            var q = 0,
                c = {},
                d = {},
                b;
            !c.supported && e ? c.supported = ["mp3", "mp4", "aac"] : c.supported || (c.supported = ["mp3", "ogg", "mp4", "aac", "wav"]);
            ion.sound = function(a) {
                f(a, c);
                c.path = c.path || "";
                c.volume = c.volume || 1;
                c.preload = c.preload || !1;
                c.multiplay = c.multiplay || !1;
                c.loop = c.loop || !1;
                c.sprite = c.sprite || null;
                c.scope = c.scope || null;
                c.ready_callback = c.ready_callback || null;
                c.ended_callback = c.ended_callback || null;
                if (q = c.sounds.length)
                    for (b = 0; b < q; b++) {
                        a = c.sounds[b];
                        var g = a.alias || a.name;
                        d[g] || (d[g] = new p(a), d[g].init())
                    } else m("No sound-files provided!")
            };
            ion.sound.VERSION = "3.0.7";
            ion.sound._method = function(a, c, e) {
                if (c) d[c] && d[c][a](e);
                else
                    for (b in d)
                        if (d.hasOwnProperty(b) && d[b]) d[b][a](e)
            };
            ion.sound.preload = function(a, b) {
                b = b || {};
                f({
                    preload: !0
                }, b);
                ion.sound._method("init", a, b)
            };
            ion.sound.destroy = function(a) {
                ion.sound._method("destroy", a);
                if (a) d[a] = null;
                else
                    for (b in d) d.hasOwnProperty(b) &&
                        d[b] && (d[b] = null)
            };
            ion.sound.play = function(a, b) {
                ion.sound._method("play", a, b)
            };
            ion.sound.stop = function(a, b) {
                ion.sound._method("stop", a, b)
            };
            ion.sound.pause = function(a, b) {
                ion.sound._method("pause", a, b)
            };
            ion.sound.volume = function(a, b) {
                ion.sound._method("volume", a, b)
            };
            n && (n.ionSound = ion.sound);
            e = l.AudioContext || l.webkitAudioContext;
            var h;
            e && (h = new e);
            var p = function(a) {
                this.options = f(c);
                delete this.options.sounds;
                f(a, this.options);
                this.request = null;
                this.streams = {};
                this.result = {};
                this.ext = 0;
                this.url = "";
                this.autoplay = this.no_file = this.decoded = this.loaded = !1
            };
            p.prototype = {
                init: function(a) {
                    a && f(a, this.options);
                    this.options.preload && this.load()
                },
                destroy: function() {
                    var a;
                    for (b in this.streams)(a = this.streams[b]) && a.destroy();
                    this.streams = {};
                    this.result = null;
                    this.options = this.options.buffer = null;
                    this.request && (this.request.removeEventListener("load", this.ready.bind(this), !1), this.request.removeEventListener("error", this.error.bind(this), !1), this.request.abort(), this.request = null)
                },
                createUrl: function() {
                    var a =
                        (new Date).valueOf();
                    this.url = this.options.path + encodeURIComponent(this.options.name) + "." + this.options.supported[this.ext] + "?" + a
                },
                load: function() {
                    this.no_file ? m('No sources for "' + this.options.name + '" sound :(') : this.request || (this.createUrl(), this.request = new XMLHttpRequest, this.request.open("GET", this.url, !0), this.request.responseType = "arraybuffer", this.request.addEventListener("load", this.ready.bind(this), !1), this.request.addEventListener("error", this.error.bind(this), !1), this.request.send())
                },
                reload: function() {
                    this.ext++;
                    this.options.supported[this.ext] ? this.load() : (this.no_file = !0, m('No sources for "' + this.options.name + '" sound :('))
                },
                ready: function(a) {
                    this.result = a.target;
                    4 !== this.result.readyState ? this.reload() : 200 !== this.result.status && 0 !== this.result.status ? (m(this.url + " was not found on server!"), this.reload()) : (this.request.removeEventListener("load", this.ready.bind(this), !1), this.request.removeEventListener("error", this.error.bind(this), !1), this.request = null, this.loaded = !0, this.decode())
                },
                decode: function() {
                    h && h.decodeAudioData(this.result.response, this.setBuffer.bind(this), this.error.bind(this))
                },
                setBuffer: function(a) {
                    this.options.buffer = a;
                    this.decoded = !0;
                    a = {
                        name: this.options.name,
                        alias: this.options.alias,
                        ext: this.options.supported[this.ext],
                        duration: this.options.buffer.duration
                    };
                    this.options.ready_callback && "function" === typeof this.options.ready_callback && this.options.ready_callback.call(this.options.scope, a);
                    if (this.options.sprite)
                        for (b in this.options.sprite) this.options.start =
                            this.options.sprite[b][0], this.options.end = this.options.sprite[b][1], this.streams[b] = new k(this.options, b);
                    else this.streams[0] = new k(this.options);
                    this.autoplay && (this.autoplay = !1, this.play())
                },
                error: function() {
                    this.reload()
                },
                play: function(a) {
                    delete this.options.part;
                    a && f(a, this.options);
                    if (!this.loaded) this.autoplay = !0, this.load();
                    else if (!this.no_file && this.decoded)
                        if (this.options.sprite)
                            if (this.options.part) this.streams[this.options.part].play(this.options);
                            else
                                for (b in this.options.sprite) this.streams[b].play(this.options);
                    else this.streams[0].play(this.options)
                },
                stop: function(a) {
                    if (this.options.sprite)
                        if (a) this.streams[a.part].stop();
                        else
                            for (b in this.options.sprite) this.streams[b].stop();
                    else this.streams[0].stop()
                },
                pause: function(a) {
                    if (this.options.sprite)
                        if (a) this.streams[a.part].pause();
                        else
                            for (b in this.options.sprite) this.streams[b].pause();
                    else this.streams[0].pause()
                },
                volume: function(a) {
                    if (a)
                        if (f(a, this.options), this.options.sprite)
                            if (this.options.part)(a = this.streams[this.options.part]) && a.setVolume(this.options);
                            else
                                for (b in this.options.sprite)(a = this.streams[b]) && a.setVolume(this.options);
                    else(a = this.streams[0]) && a.setVolume(this.options)
                }
            };
            var k = function(a, b) {
                this.alias = a.alias;
                this.name = a.name;
                this.sprite_part = b;
                this.buffer = a.buffer;
                this.start = a.start || 0;
                this.end = a.end || this.buffer.duration;
                this.multiplay = a.multiplay || !1;
                this.volume = a.volume || 1;
                this.scope = a.scope;
                this.ended_callback = a.ended_callback;
                this.setLoop(a);
                this.gain = this.source = null;
                this.paused = this.playing = !1;
                this.time_offset = this.time_played =
                    this.time_ended = this.time_started = 0
            };
            k.prototype = {
                destroy: function() {
                    this.stop();
                    this.source = this.buffer = null;
                    this.gain && this.gain.disconnect();
                    this.source && this.source.disconnect();
                    this.source = this.gain = null
                },
                setLoop: function(a) {
                    this.loop = !0 === a.loop ? 9999999 : "number" === typeof a.loop ? +a.loop - 1 : !1
                },
                update: function(a) {
                    this.setLoop(a);
                    "volume" in a && (this.volume = a.volume)
                },
                play: function(a) {
                    a && this.update(a);
                    if (this.multiplay || !this.playing) this.gain = h.createGain(), this.source = h.createBufferSource(), this.source.buffer =
                        this.buffer, this.source.connect(this.gain), this.gain.connect(h.destination), this.gain.gain.value = this.volume, this.source.onended = this.ended.bind(this), this._play()
                },
                _play: function() {
                    var a, b;
                    this.paused ? (a = this.start + this.time_offset, b = this.end - this.time_offset) : (a = this.start, b = this.end);
                    0 >= b ? this.clear() : ("function" === typeof this.source.start ? this.source.start(0, a, b) : this.source.noteOn(0, a, b), this.playing = !0, this.paused = !1, this.time_started = (new Date).valueOf())
                },
                stop: function() {
                    this.playing && this.source &&
                        ("function" === typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0));
                    this.clear()
                },
                pause: function() {
                    this.paused ? this.play() : this.playing && (this.source && this.source.stop(0), this.paused = !0)
                },
                ended: function() {
                    this.playing = !1;
                    this.time_ended = (new Date).valueOf();
                    this.time_played = (this.time_ended - this.time_started) / 1E3;
                    this.time_offset += this.time_played;
                    if (this.time_offset >= this.end || .015 > this.end - this.time_offset) this._ended(), this.clear(), this.loop && (this.loop--, this.play())
                },
                _ended: function() {
                    var a = {
                        name: this.name,
                        alias: this.alias,
                        part: this.sprite_part,
                        start: this.start,
                        duration: this.end
                    };
                    this.ended_callback && "function" === typeof this.ended_callback && this.ended_callback.call(this.scope, a)
                },
                clear: function() {
                    this.time_offset = this.time_played = 0;
                    this.playing = this.paused = !1
                },
                setVolume: function(a) {
                    this.volume = a.volume;
                    this.gain && (this.gain.gain.value = this.volume)
                }
            };
            h || (function() {
                var a = new Audio,
                    b = a.canPlayType("audio/mpeg"),
                    e = a.canPlayType("audio/ogg"),
                    a = a.canPlayType('audio/mp4; codecs="mp4a.40.2"'),
                    d, f;
                for (f = 0; f < c.supported.length; f++) d = c.supported[f], b || "mp3" !== d || c.supported.splice(f, 1), e || "ogg" !== d || c.supported.splice(f, 1), a || "aac" !== d || c.supported.splice(f, 1), a || "mp4" !== d || c.supported.splice(f, 1)
            }(), p.prototype = {
                init: function(a) {
                    a && f(a, this.options);
                    this.inited = !0;
                    this.options.preload && this.load()
                },
                destroy: function() {
                    var a;
                    for (b in this.streams)(a = this.streams[b]) && a.destroy();
                    this.streams = {};
                    this.inited = this.loaded = !1
                },
                load: function() {
                    var a;
                    this.options.preload = !0;
                    this.options._ready = this.ready;
                    this.options._scope = this;
                    if (this.options.sprite)
                        for (b in this.options.sprite) a = this.options.sprite[b], this.options.start = a[0], this.options.end = a[1], this.streams[b] = new k(this.options, b);
                    else this.streams[0] = new k(this.options)
                },
                ready: function(a) {
                    this.loaded || (this.loaded = !0, a = {
                        name: this.options.name,
                        alias: this.options.alias,
                        ext: this.options.supported[this.ext],
                        duration: a
                    }, this.options.ready_callback && "function" === typeof this.options.ready_callback && this.options.ready_callback.call(this.options.scope,
                        a), this.autoplay && (this.autoplay = !1, this.play()))
                },
                play: function(a) {
                    if (this.inited)
                        if (delete this.options.part, a && f(a, this.options), console.log(1), this.loaded)
                            if (this.options.sprite)
                                if (this.options.part) this.streams[this.options.part].play(this.options);
                                else
                                    for (b in this.options.sprite) this.streams[b].play(this.options);
                    else this.streams[0].play(this.options);
                    else this.options.preload ? this.autoplay = !0 : (this.autoplay = !0, this.load())
                },
                stop: function(a) {
                    if (this.inited)
                        if (this.options.sprite)
                            if (a) this.streams[a.part].stop();
                            else
                                for (b in this.options.sprite) this.streams[b].stop();
                    else this.streams[0].stop()
                },
                pause: function(a) {
                    if (this.inited)
                        if (this.options.sprite)
                            if (a) this.streams[a.part].pause();
                            else
                                for (b in this.options.sprite) this.streams[b].pause();
                    else this.streams[0].pause()
                },
                volume: function(a) {
                    if (a)
                        if (f(a, this.options), this.options.sprite)
                            if (this.options.part)(a = this.streams[this.options.part]) && a.setVolume(this.options);
                            else
                                for (b in this.options.sprite)(a = this.streams[b]) && a.setVolume(this.options);
                    else(a =
                        this.streams[0]) && a.setVolume(this.options)
                }
            }, k = function(a, b) {
                this.name = a.name;
                this.alias = a.alias;
                this.sprite_part = b;
                this.multiplay = a.multiplay;
                this.volume = a.volume;
                this.preload = a.preload;
                this.path = c.path;
                this.start = a.start || 0;
                this.end = a.end || 0;
                this.scope = a.scope;
                this.ended_callback = a.ended_callback;
                this._scope = a._scope;
                this._ready = a._ready;
                this.setLoop(a);
                this.url = this.sound = null;
                this.loaded = !1;
                this.played_time = this.paused_time = this.start_time = 0;
                this.init()
            }, k.prototype = {
                init: function() {
                    this.sound =
                        new Audio;
                    this.sound.volume = this.volume;
                    this.createUrl();
                    this.sound.addEventListener("ended", this.ended.bind(this), !1);
                    this.sound.addEventListener("canplaythrough", this.can_play_through.bind(this), !1);
                    this.sound.addEventListener("timeupdate", this._update.bind(this), !1);
                    this.load()
                },
                destroy: function() {
                    this.stop();
                    this.sound.removeEventListener("ended", this.ended.bind(this), !1);
                    this.sound.removeEventListener("canplaythrough", this.can_play_through.bind(this), !1);
                    this.sound.removeEventListener("timeupdate",
                        this._update.bind(this), !1);
                    this.sound = null;
                    this.loaded = !1
                },
                createUrl: function() {
                    var a = (new Date).valueOf();
                    this.url = this.path + encodeURIComponent(this.name) + "." + c.supported[0] + "?" + a
                },
                can_play_through: function() {
                    this.preload && this.ready()
                },
                load: function() {
                    this.sound.src = this.url;
                    this.sound.preload = this.preload ? "auto" : "none";
                    this.preload && this.sound.load()
                },
                setLoop: function(a) {
                    this.loop = !0 === a.loop ? 9999999 : "number" === typeof a.loop ? +a.loop - 1 : !1
                },
                update: function(a) {
                    this.setLoop(a);
                    "volume" in a && (this.volume =
                        a.volume)
                },
                ready: function() {
                    !this.loaded && this.sound && (this.loaded = !0, this._ready.call(this._scope, this.sound.duration), this.end || (this.end = this.sound.duration))
                },
                play: function(a) {
                    a && this.update(a);
                    !this.multiplay && this.playing || this._play()
                },
                _play: function() {
                    if (this.paused) this.paused = !1;
                    else try {
                        this.sound.currentTime = this.start
                    } catch (a) {}
                    this.playing = !0;
                    this.start_time = (new Date).valueOf();
                    this.sound.volume = this.volume;
                    this.sound.play()
                },
                stop: function() {
                    if (this.playing) {
                        this.paused = this.playing = !1;
                        this.sound.pause();
                        this.clear();
                        try {
                            this.sound.currentTime = this.start
                        } catch (a) {}
                    }
                },
                pause: function() {
                    this.paused ? this._play() : (this.playing = !1, this.paused = !0, this.sound.pause(), this.paused_time = (new Date).valueOf(), this.played_time += this.paused_time - this.start_time)
                },
                _update: function() {
                    this.start_time && (this.played_time + ((new Date).valueOf() - this.start_time)) / 1E3 >= this.end && this.playing && (this.stop(), this._ended())
                },
                ended: function() {
                    this.playing && (this.stop(), this._ended())
                },
                _ended: function() {
                    this.playing = !1;
                    var a = {
                        name: this.name,
                        alias: this.alias,
                        part: this.sprite_part,
                        start: this.start,
                        duration: this.end
                    };
                    this.ended_callback && "function" === typeof this.ended_callback && this.ended_callback.call(this.scope, a);
                    this.loop && setTimeout(this.looper.bind(this), 15)
                },
                looper: function() {
                    this.loop--;
                    this.play()
                },
                clear: function() {
                    this.paused_time = this.played_time = this.start_time = 0
                },
                setVolume: function(a) {
                    this.volume = a.volume;
                    this.sound && (this.sound.volume = this.volume)
                }
            })
        }
    }
})(window, navigator, window.jQuery || window.$);