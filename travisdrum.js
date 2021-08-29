var _0x921f = [
    "use strict",
    "ms",
    "moz",
    "webkit",
    "o",
    "length",
    "requestAnimationFrame",
    "RequestAnimationFrame",
    "cancelAnimationFrame",
    "CancelAnimationFrame",
    "CancelRequestAnimationFrame",
    "getTime",
    "max",
    "setTimeout",
    "now",
    "href",
    "location",
    ".location='",
    "value",
    "selectedIndex",
    "options",
    "'",
    "onload",
    "onresize",
    "hihat1",
    "open1",
    "splash1",
    "crash1",
    "crash2",
    "bell1",
    "ride1",
    "china1",
    "https://www.virtualdrumming.com/drums/virtual-drum-sounds/",
    "sound",
    "volumeCustom",
    "getItem",
    "parse",
    "stringify",
    "setItem",
    "removeItem",
    "slider1",
    "getElementById",
    "slider2",
    "innerHTML",
    "out1",
    "round",
    "out2",
    "slider-thin",
    "getElementsByClassName",
    "vol-settings",
    "style",
    "visibility:visible",
    "setAttribute",
    "drum-menu-icon",
    "Lstick",
    "Rstick",
    "crash1back",
    "crash2back",
    "splash1back",
    "hihat1holder",
    "pedalhihat1",
    "beaterkik1",
    "pedalkik1",
    "className",
    "remove",
    "classList",
    "offsetWidth",
    "L",
    "add",
    "R",
    "hitPedal",
    "hitBeater",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "keysCustom",
    "key-led",
    "&nbsp;",
    "DS",
    "key-settings",
    "onkeydown",
    "keyCode",
    " is already assigned to another element.",
    "target",
    "body",
    "preventDefault",
    "onkeyup",
    "opacity",
    "display",
    "block",
    "none",
    "onclick",
    "settings",
    "1",
    "drum-game-menu",
    "drum-menu-hidden",
    "drum-menu-out",
    "onmouseover",
    "key-set",
    "key-red",
    "stopPropagation",
    "id",
    "getAttribute",
    "custom",
    "custom2",
    "reset",
    "reset2",
    "default",
    "play",
    "close",
    "drum-settings",
    "close2",
    "sets",
    "visibility:hidden",
    "keys",
    "volume",
    "visibility",
    "hidden",
    "visible",
    "drum-menu-in",
    "drum-set",
    "onmouseout",
    "virtual-drummer-icon",
    "drum-games-button",
    "drum-games-zoom",
    "travis-barker",
    "clientWidth",
    "documentElement",
    "innerWidth",
    "height:",
    "px",
    "virtual-games-drums",
    "virtual-games-cymbals",
    "height:36px",
    "height:64px",
    "height:96px",
    "height:360px",
    "height:72px",
    "kik",
    "snare1",
    "snare2",
    "tom1", "tom2", "https://www.virtualdrumming.com/drums/virtual-drum-sounds/travis-barker/", "onmousedown", "splash1-touch", "crash1-touch", "bell1-touch", "ride1-touch", "crash2-touch", "china1-touch", "open1L-touch", "open1R-touch", "hihat1L-touch", "hihat1R-touch", "tom1-touch", "tom2-touch", "snare1L-touch", "snare1R-touch", "snare2-touch", "kik1-touch", "kik2-touch", "kik3-touch", "open1L", "hihat1L", "open1R", "hihat1R", "snare1L", "snare1R", "tom3", "kik1", "2", "hitCrash", "hitCrashBack", "3", "hitHat", "hihat-up", "4", "hitHi", "5", "6", "7", "8", "9", "10", "11", "12", "13", "hitRide", "14", "15", "16", "hitChina", "17"];
"use strict",
function() {
    for (var f = 0, o = ["ms", "moz", "webkit", "o"], x = 0; x < o["length"] && !window["requestAnimationFrame"]; ++x)
        window["requestAnimationFrame"] = window[o[x] + "RequestAnimationFrame"],
        window["cancelAnimationFrame"] = window[o[x] + "CancelAnimationFrame"] || window[o[x] + "CancelRequestAnimationFrame"];
    window["requestAnimationFrame"] || (window["requestAnimationFrame"] = function(o, x) {
        var _ = (new Date)["getTime"]()
          , e = Math[_0x921f[12]](0, 16 - (_ - f))
          , t = window[_0x921f[13]](function() {
            o(_ + e)
        }, e);
        return f = _ + e,
        t
    }
    ),
    window["cancelAnimationFrame"] || (window["cancelAnimationFrame"] = function(f) {
        clearTimeout(f)
    }
    )
}();
var fps = 50, now, then = Date["now"](), interval = 1e3 / fps, delta, Mdyn, Mvol, MvolMin, MvolAdd, MvolHelp, Lvol, Rvol, KLvol, KRvol, Lpos, Rpos;
function volumeUp() {
    requestAnimationFrame(volumeUp),
    now = Date["now"](),
    (delta = now - then) > interval && (then = now - delta % interval,
    Lvol < Mvol && (Lvol += MvolAdd),
    Rvol < Mvol && (Rvol += MvolAdd),
    KLvol < Mvol && (KLvol += MvolAdd),
    KRvol < Mvol && (KRvol += MvolAdd))
}
function MM_jumpMenu(_0xa8d2x10, _0xa8d2x11, _0xa8d2x12) {
    eval(_0xa8d2x10 + _0x921f[17] + _0xa8d2x11["options"][_0xa8d2x11["selectedIndex"]][_0x921f[18]] + _0x921f[21]),
    _0xa8d2x12 && (_0xa8d2x11["selectedIndex"] = 0)
}
volumeUp(),
window != top && (top["location"]["href"] = window["location"]["href"]),
window[_0x921f[22]] = function() {
    resizing(),
    keysLoad(),
    volumeLoad()
}
,
window[_0x921f[23]] = function() {
    resizing()
}
,
ion[_0x921f[33]]({
    sounds: [{
        name: _0x921f[24]
    }, {
        name: _0x921f[25]
    }, {
        name: _0x921f[26]
    }, {
        name: _0x921f[27]
    }, {
        name: _0x921f[28]
    }, {
        name: _0x921f[29]
    }, {
        name: _0x921f[30]
    }, {
        name: _0x921f[31]
    }],
    path: _0x921f[32],
    preload: !0,
    multiplay: !0
});
var volumeCustom = [];
function volumeLoad() {
    if (null == JSON[_0x921f[36]](localStorage[_0x921f[35]](_0x921f[34])))
        for (var f = 0; f < 101; f++)
            volumeCustom[f] = 1;
    else
        volumeCustom = JSON[_0x921f[36]](localStorage[_0x921f[35]](_0x921f[34]));
    volumeSet()
}
function volumeSave() {
    localStorage[_0x921f[38]](_0x921f[34], JSON[_0x921f[37]](volumeCustom)),
    volumeSet()
}
function volumeReset() {
    localStorage[_0x921f[39]](_0x921f[34]),
    volumeLoad()
}
function volumeSet() {
    document[_0x921f[41]](_0x921f[40])[_0x921f[18]] = 100 * volumeCustom[0],
    document[_0x921f[41]](_0x921f[42])[_0x921f[18]] = 50 * volumeCustom[100],
    document[_0x921f[41]](_0x921f[44])[_0x921f[43]] = Math[_0x921f[45]](100 * volumeCustom[0]),
    document[_0x921f[41]](_0x921f[46])[_0x921f[43]] = Math[_0x921f[45]](50 * volumeCustom[100]);
    for (var f = document[_0x921f[48]](_0x921f[47]), o = 0; o < f[_0x921f[5]]; ++o)
        f[o][_0x921f[18]] = 100 * volumeCustom[o + 1];
    Mdyn = volumeCustom[100] / 4,
    Mvol = volumeCustom[0],
    Lvol = volumeCustom[0],
    Rvol = volumeCustom[0],
    KLvol = volumeCustom[0],
    KRvol = volumeCustom[0],
    updateVolumeSet()
}
function volumeClose() {
    fadeOut(document[_0x921f[41]](_0x921f[49]), 240),
    document[_0x921f[41]](_0x921f[53])[_0x921f[52]](_0x921f[50], _0x921f[51])
}
function updateVolumeSet() {
    MvolHelp = Mvol - 8 * (MvolAdd = (Mvol - (MvolMin = Mvol / 2 - Mdyn * Mvol)) / 15)
}
function updateVolume(f) {
    document[_0x921f[41]](_0x921f[44])[_0x921f[43]] = f,
    Mvol = f / 100,
    volumeCustom[0] = f / 100,
    updateVolumeSet(),
    Lvol = Mvol,
    Rvol = Mvol,
    KLvol = Mvol,
    KRvol = Mvol
}
function updateDynamics(f) {
    document[_0x921f[41]](_0x921f[46])[_0x921f[43]] = f,
    Mdyn = f / 200,
    volumeCustom[100] = f / 50,
    updateVolumeSet()
}
function updateVolumeChannel(f, o) {
    volumeCustom[f] = o / 100
}
var Lstick = document[_0x921f[41]](_0x921f[54])
  , Rstick = document[_0x921f[41]](_0x921f[55])
  , crash1 = document[_0x921f[41]](_0x921f[27])
  , crash1b = document[_0x921f[41]](_0x921f[56])
  , crash2 = document[_0x921f[41]](_0x921f[28])
  , crash2b = document[_0x921f[41]](_0x921f[57])
  , splash1 = document[_0x921f[41]](_0x921f[26])
  , splash1b = document[_0x921f[41]](_0x921f[58])
  , ride1 = document[_0x921f[41]](_0x921f[30])
  , china1 = document[_0x921f[41]](_0x921f[31])
  , hihat1 = document[_0x921f[41]](_0x921f[24])
  , hihat1h = document[_0x921f[41]](_0x921f[59])
  , hihat1p = document[_0x921f[41]](_0x921f[60])
  , beaterkik1 = document[_0x921f[41]](_0x921f[61])
  , pedalkik1 = document[_0x921f[41]](_0x921f[62]);
function strokeL(f, o) {
    Lstick[_0x921f[65]][_0x921f[64]](Lstick[_0x921f[63]]),
    Lstick[_0x921f[66]],
    Lstick[_0x921f[65]][_0x921f[68]](_0x921f[67] + o),
    Lpos = f,
    Lvol = MvolMin
}
function strokeR(f, o) {
    Rstick[_0x921f[65]][_0x921f[64]](Rstick[_0x921f[63]]),
    Rstick[_0x921f[66]],
    Rstick[_0x921f[65]][_0x921f[68]](_0x921f[69] + o),
    Rpos = f,
    Rvol = MvolMin
}
function swing(f, o) {
    f[_0x921f[65]][_0x921f[64]](o),
    f[_0x921f[66]],
    f[_0x921f[65]][_0x921f[68]](o)
}
function kikR() {
    pedalkik1[_0x921f[65]][_0x921f[64]](_0x921f[70]),
    pedalkik1[_0x921f[66]],
    pedalkik1[_0x921f[65]][_0x921f[68]](_0x921f[70]),
    beaterkik1[_0x921f[65]][_0x921f[64]](_0x921f[71]),
    beaterkik1[_0x921f[66]],
    beaterkik1[_0x921f[65]][_0x921f[68]](_0x921f[71]),
    KRvol = MvolMin + 3 * MvolAdd
}
var keys = []
  , keysCustom = [];
keys[65] = [!1, _0x921f[72], 0],
keys[66] = [!1, _0x921f[73], 0],
keys[67] = [!1, _0x921f[74], 0],
keys[68] = [!1, _0x921f[75], 0],
keys[69] = [!1, _0x921f[76], 0],
keys[70] = [!1, _0x921f[77], 0],
keys[71] = [!1, _0x921f[78], 0],
keys[72] = [!1, _0x921f[79], 0],
keys[73] = [!1, _0x921f[80], 0],
keys[74] = [!1, _0x921f[81], 0],
keys[75] = [!1, _0x921f[82], 0],
keys[76] = [!1, _0x921f[67], 0],
keys[77] = [!1, _0x921f[83], 0],
keys[78] = [!1, _0x921f[84], 0],
keys[79] = [!1, _0x921f[85], 0],
keys[80] = [!1, _0x921f[86], 0],
keys[81] = [!1, _0x921f[87], 0],
keys[82] = [!1, _0x921f[69], 0],
keys[83] = [!1, _0x921f[88], 0],
keys[84] = [!1, _0x921f[89], 0],
keys[85] = [!1, _0x921f[90], 0],
keys[86] = [!1, _0x921f[91], 0],
keys[87] = [!1, _0x921f[92], 0],
keys[88] = [!1, _0x921f[93], 0],
keys[89] = [!1, _0x921f[94], 0],
keys[90] = [!1, _0x921f[95], 0];
var keysSet = !1
  , elemToChange = null;
function keysLoad() {
    if (null == JSON[_0x921f[36]](localStorage[_0x921f[35]](_0x921f[96])))
        keysDefault();
    else {
        keysCustom = JSON[_0x921f[36]](localStorage[_0x921f[35]](_0x921f[96]));
        for (var f = 65; f < keys[_0x921f[5]]; f++)
            keys[f][2] = keysCustom[f - 65];
        keysDisplay()
    }
}
function keysReset() {
    for (var f = 65; f < keys[_0x921f[5]]; f++)
        keys[f][2] = 0,
        keysCustom[f - 65] = 0;
    keysDisplay()
}
function keysDefault() {
    for (var f = 65; f < keys[_0x921f[5]]; f++)
        keys[f][2] = keysCustom[f - 65] = keysPreset[f - 65];
    localStorage[_0x921f[39]](_0x921f[96]),
    keysDisplay()
}
function keysSave() {
    localStorage[_0x921f[38]](_0x921f[96], JSON[_0x921f[37]](keysCustom))
}
function keysDisplay() {
    for (var f = document[_0x921f[48]](_0x921f[97]), o = 0; o < f[_0x921f[5]]; ++o)
        f[o][_0x921f[43]] = _0x921f[98];
    for (o = 65; o < keys[_0x921f[5]]; o++)
        0 != keys[o][2] && (document[_0x921f[41]](_0x921f[99] + keysPos[keys[o][2]])[_0x921f[43]] = keys[o][1])
}
function keysClose() {
    keysSet = !1,
    fadeOut(document[_0x921f[41]](_0x921f[100]), 240),
    document[_0x921f[41]](_0x921f[53])[_0x921f[52]](_0x921f[50], _0x921f[51])
}
function fadeIn(f, o) {
    var x = f[_0x921f[50]]
      , _ = 25 / (o || 300);
    x[_0x921f[108]] = x[_0x921f[108]] || 0,
    x[_0x921f[109]] = _0x921f[110],
    function f() {
        (x[_0x921f[108]] = parseFloat(x[_0x921f[108]]) + _) > 1 ? x[_0x921f[108]] = 1 : setTimeout(f, 25)
    }()
}
function fadeOut(f, o) {
    var x = f[_0x921f[50]]
      , _ = 25 / (o || 300);
    x[_0x921f[108]] = x[_0x921f[108]] || 1,
    function f() {
        (x[_0x921f[108]] -= _) < 0 ? x[_0x921f[109]] = _0x921f[111] : setTimeout(f, 25)
    }()
}
window[_0x921f[101]] = function(f) {
    var o = f[_0x921f[102]];
    if (o > 64 && o < 91) {
        if (0 == keysSet && 0 == keys[o][0])
            keys[o][0] = !0,
            stroke(keys[o][2]);
        else if (null != elemToChange)
            if (0 == keys[o][2]) {
                for (var x = 65; x < keys[_0x921f[5]]; x++)
                    keys[x][2] == elemToChange && (keys[x][2] = 0,
                    keysCustom[x - 65] = 0);
                keys[o][2] = elemToChange,
                document[_0x921f[41]](_0x921f[99] + keysPos[elemToChange])[_0x921f[43]] = keys[o][1],
                keysCustom[o - 65] = elemToChange
            } else
                elemToChange != keys[o][2] && alert(keys[o][1] + _0x921f[103])
    } else if (f[_0x921f[104]] == document[_0x921f[105]] && (32 == o || 9 == o))
        return f[_0x921f[106]](),
        !1
}
,
window[_0x921f[107]] = function(f) {
    var o = f[_0x921f[102]];
    o > 64 && o < 91 && (keys[o][0] = !1)
}
,
document[_0x921f[112]] = function() {
    for (var f = document[_0x921f[48]](_0x921f[113]), o = 0; o < f[_0x921f[5]]; ++o)
        f[o][_0x921f[50]][_0x921f[108]] == _0x921f[114] && fadeOut(f[o], 240);
    document[_0x921f[41]](_0x921f[53])[_0x921f[52]](_0x921f[50], _0x921f[51]),
    clearSet(),
    keysSet = !1,
    elemToChange = null;
    var x = document[_0x921f[41]](_0x921f[115]);
    x[_0x921f[63]] != _0x921f[116] && (x[_0x921f[63]] = _0x921f[117])
}
,
document[_0x921f[118]] = function() {
    var f = document[_0x921f[41]](_0x921f[115]);
    f[_0x921f[63]] != _0x921f[116] && (f[_0x921f[63]] = _0x921f[117])
}
;
var kslist = document[_0x921f[48]](_0x921f[119]);
function clearSet() {
    for (var f = 0; f < kslist[_0x921f[5]]; ++f)
        kslist[f][_0x921f[65]][_0x921f[64]](_0x921f[120])
}
for (var i = 0; i < kslist[_0x921f[5]]; ++i)
    kslist[i][_0x921f[112]] = function(f) {
        f[_0x921f[121]]();
        var o = this[_0x921f[123]](_0x921f[122]);
        clearSet(),
        this[_0x921f[65]][_0x921f[68]](_0x921f[120]);
        for (var x = 1; x < keysPos[_0x921f[5]]; x++)
            _0x921f[88] + keysPos[x] == o && (elemToChange = x)
    }
    ;
document[_0x921f[41]](_0x921f[124])[_0x921f[112]] = function() {
    keysSave(),
    keysClose()
}
,
document[_0x921f[41]](_0x921f[125])[_0x921f[112]] = function() {
    volumeSave(),
    volumeClose()
}
,
document[_0x921f[41]](_0x921f[126])[_0x921f[112]] = function() {
    keysReset()
}
,
document[_0x921f[41]](_0x921f[127])[_0x921f[112]] = function() {
    volumeReset()
}
,
document[_0x921f[41]](_0x921f[128])[_0x921f[112]] = function() {
    keysDefault()
}
,
document[_0x921f[41]](_0x921f[129])[_0x921f[112]] = function() {
    keysClose()
}
,
document[_0x921f[41]](_0x921f[130])[_0x921f[112]] = function() {
    keysSet = !1,
    fadeOut(document[_0x921f[41]](_0x921f[131]), 240),
    document[_0x921f[41]](_0x921f[53])[_0x921f[52]](_0x921f[50], _0x921f[51])
}
,
document[_0x921f[41]](_0x921f[132])[_0x921f[112]] = function() {
    volumeClose()
}
,
document[_0x921f[41]](_0x921f[115])[_0x921f[118]] = function(f) {
    f[_0x921f[121]]()
}
,
document[_0x921f[41]](_0x921f[115])[_0x921f[112]] = function(f) {
    f[_0x921f[121]]()
}
,
document[_0x921f[41]](_0x921f[133])[_0x921f[112]] = function() {
    fadeIn(document[_0x921f[41]](_0x921f[131]), 150),
    document[_0x921f[41]](_0x921f[115])[_0x921f[52]](_0x921f[50], _0x921f[134]),
    document[_0x921f[41]](_0x921f[53])[_0x921f[52]](_0x921f[50], _0x921f[134]),
    keysSet = !0
}
,
document[_0x921f[41]](_0x921f[135])[_0x921f[112]] = function() {
    fadeIn(document[_0x921f[41]](_0x921f[100]), 150),
    document[_0x921f[41]](_0x921f[115])[_0x921f[52]](_0x921f[50], _0x921f[134]),
    document[_0x921f[41]](_0x921f[53])[_0x921f[52]](_0x921f[50], _0x921f[134]),
    keysSet = !0
}
,
document[_0x921f[41]](_0x921f[136])[_0x921f[112]] = function() {
    fadeIn(document[_0x921f[41]](_0x921f[49]), 150),
    document[_0x921f[41]](_0x921f[115])[_0x921f[52]](_0x921f[50], _0x921f[134]),
    document[_0x921f[41]](_0x921f[53])[_0x921f[52]](_0x921f[50], _0x921f[134])
}
,
document[_0x921f[41]](_0x921f[100])[_0x921f[112]] = function(f) {
    f[_0x921f[121]](),
    clearSet(),
    elemToChange = null
}
,
document[_0x921f[41]](_0x921f[131])[_0x921f[112]] = function(f) {
    f[_0x921f[121]]()
}
,
document[_0x921f[41]](_0x921f[49])[_0x921f[112]] = function(f) {
    f[_0x921f[121]]()
}
,
document[_0x921f[41]](_0x921f[53])[_0x921f[112]] = function(f) {
    f[_0x921f[121]]();
    var o = document[_0x921f[41]](_0x921f[115]);
    o[_0x921f[50]][_0x921f[137]] == _0x921f[138] ? (o[_0x921f[50]][_0x921f[137]] = _0x921f[139],
    o[_0x921f[63]] = _0x921f[140]) : o[_0x921f[63]] == _0x921f[140] ? o[_0x921f[63]] = _0x921f[117] : o[_0x921f[63]] = _0x921f[140]
}
;
for (var drumsetlist = document[_0x921f[48]](_0x921f[141]), i = 0; i < drumsetlist[_0x921f[5]]; ++i)
    drumsetlist[i][_0x921f[142]] = function() {
        var f = document[_0x921f[41]](_0x921f[143]);
        f[_0x921f[65]][_0x921f[64]](f[_0x921f[63]]),
        f[_0x921f[65]][_0x921f[68]](drummer)
    }
    ;
for (var dgblist = document[_0x921f[48]](_0x921f[144]), i = 0; i < dgblist[_0x921f[5]]; ++i)
    dgblist[i][_0x921f[118]] = function() {
        this[_0x921f[65]][_0x921f[68]](_0x921f[145])
    }
    ,
    dgblist[i][_0x921f[142]] = function() {
        this[_0x921f[65]][_0x921f[64]](_0x921f[145])
    }
    ;
function rollover(f) {
    var o = document[_0x921f[41]](_0x921f[143]);
    o[_0x921f[65]][_0x921f[64]](o[_0x921f[63]]),
    o[_0x921f[65]][_0x921f[68]](f)
}
var drummer = _0x921f[146];
function resizing() {
    var f = document[_0x921f[148]][_0x921f[147]] || document[_0x921f[105]][_0x921f[147]] || window[_0x921f[149]];
    if (f < 980) {
        splash1[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 3.67) + _0x921f[151]),
        splash1b[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 3.67) + _0x921f[151]),
        crash1[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 6.53) + _0x921f[151]),
        crash1b[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 6.53) + _0x921f[151]),
        ride1[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 9.79) + _0x921f[151]),
        crash2[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 6.53) + _0x921f[151]),
        crash2b[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 6.53) + _0x921f[151]),
        china1[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 9.79) + _0x921f[151]),
        Lstick[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 36.73) + _0x921f[151]),
        Rstick[_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 36.73) + _0x921f[151]);
        for (var o = document[_0x921f[48]](_0x921f[152]), x = 0; x < o[_0x921f[5]]; ++x)
            o[x][_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 9.8) + _0x921f[151]);
        var _ = document[_0x921f[48]](_0x921f[153]);
        for (x = 0; x < _[_0x921f[5]]; ++x)
            _[x][_0x921f[52]](_0x921f[50], _0x921f[150] + Math[_0x921f[45]](f / 100 * 7.35) + _0x921f[151])
    } else {
        splash1[_0x921f[52]](_0x921f[50], _0x921f[154]),
        splash1b[_0x921f[52]](_0x921f[50], _0x921f[154]),
        crash1[_0x921f[52]](_0x921f[50], _0x921f[155]),
        crash1b[_0x921f[52]](_0x921f[50], _0x921f[155]),
        ride1[_0x921f[52]](_0x921f[50], _0x921f[156]),
        crash2[_0x921f[52]](_0x921f[50], _0x921f[155]),
        crash2b[_0x921f[52]](_0x921f[50], _0x921f[155]),
        china1[_0x921f[52]](_0x921f[50], _0x921f[156]),
        Lstick[_0x921f[52]](_0x921f[50], _0x921f[157]),
        Rstick[_0x921f[52]](_0x921f[50], _0x921f[157]);
        for (o = document[_0x921f[48]](_0x921f[152]),
        x = 0; x < o[_0x921f[5]]; ++x)
            o[x][_0x921f[52]](_0x921f[50], _0x921f[156]);
        for (_ = document[_0x921f[48]](_0x921f[153]),
        x = 0; x < _[_0x921f[5]]; ++x)
            _[x][_0x921f[52]](_0x921f[50], _0x921f[158])
    }
}
ion[_0x921f[33]]({
    sounds: [{
        name: _0x921f[159]
    }, {
        name: _0x921f[160]
    }, {
        name: _0x921f[161]
    }, {
        name: _0x921f[162]
    }, {
        name: _0x921f[163]
    }],
    path: _0x921f[164],
    preload: !0,
    multiplay: !0
}),
document[_0x921f[41]](_0x921f[166])[_0x921f[165]] = function() {
    stroke(2)
}
,
document[_0x921f[41]](_0x921f[167])[_0x921f[165]] = function() {
    stroke(7)
}
,
document[_0x921f[41]](_0x921f[168])[_0x921f[165]] = function() {
    stroke(12)
}
,
document[_0x921f[41]](_0x921f[169])[_0x921f[165]] = function() {
    stroke(13)
}
,
document[_0x921f[41]](_0x921f[170])[_0x921f[165]] = function() {
    stroke(15)
}
,
document[_0x921f[41]](_0x921f[171])[_0x921f[165]] = function() {
    stroke(16)
}
,
document[_0x921f[41]](_0x921f[172])[_0x921f[165]] = function() {
    stroke(3)
}
,
document[_0x921f[41]](_0x921f[173])[_0x921f[165]] = function() {
    stroke(5)
}
,
document[_0x921f[41]](_0x921f[174])[_0x921f[165]] = function() {
    stroke(4)
}
,
document[_0x921f[41]](_0x921f[175])[_0x921f[165]] = function() {
    stroke(6)
}
,
document[_0x921f[41]](_0x921f[176])[_0x921f[165]] = function() {
    stroke(8)
}
,
document[_0x921f[41]](_0x921f[177])[_0x921f[165]] = function() {
    stroke(11, !0)
}
,
document[_0x921f[41]](_0x921f[178])[_0x921f[165]] = function() {
    stroke(9)
}
,
document[_0x921f[41]](_0x921f[179])[_0x921f[165]] = function() {
    stroke(10)
}
,
document[_0x921f[41]](_0x921f[180])[_0x921f[165]] = function() {
    stroke(1)
}
,
document[_0x921f[41]](_0x921f[181])[_0x921f[165]] = function() {
    stroke(17)
}
,
document[_0x921f[41]](_0x921f[182])[_0x921f[165]] = function() {
    stroke(17)
}
,
document[_0x921f[41]](_0x921f[183])[_0x921f[165]] = function() {
    stroke(17)
}
;
var keysPos = [];
keysPos[1] = _0x921f[161],
keysPos[2] = _0x921f[26],
keysPos[3] = _0x921f[184],
keysPos[4] = _0x921f[185],
keysPos[5] = _0x921f[186],
keysPos[6] = _0x921f[187],
keysPos[7] = _0x921f[27],
keysPos[8] = _0x921f[162],
keysPos[9] = _0x921f[188],
keysPos[10] = _0x921f[189],
keysPos[11] = _0x921f[163],
keysPos[12] = _0x921f[29],
keysPos[13] = _0x921f[30],
keysPos[14] = _0x921f[190],
keysPos[15] = _0x921f[28],
keysPos[16] = _0x921f[31],
keysPos[17] = _0x921f[191],
Lpos = 9,
Rpos = 10;
var keysPreset = [0, 17, 9, 1, 2, 8, 11, 14, 16, 0, 0, 0, 5, 6, 0, 0, 0, 7, 0, 12, 15, 10, 0, 4, 13, 3];
function stroke(f, o) {
    f == _0x921f[114] ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[161], {
        volume: Lvol * volumeCustom[1]
    }),
    strokeL(f, keysPos[f])) : f == _0x921f[192] ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[26], {
        volume: Mvol * volumeCustom[7]
    }),
    strokeL(f, keysPos[f]),
    swing(splash1, _0x921f[193]),
    swing(splash1b, _0x921f[194])) : f == _0x921f[195] ? (f != Lpos && Lvol < MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[25], {
        volume: Rvol * volumeCustom[6]
    }),
    strokeR(5, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[25], {
        volume: Lvol * volumeCustom[6]
    }),
    strokeL(f, keysPos[f])),
    swing(hihat1, _0x921f[196]),
    swing(hihat1h, _0x921f[197]),
    hihat1p[_0x921f[50]][_0x921f[109]] = _0x921f[110]) : f == _0x921f[198] ? (f != Lpos && Lvol < MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[24], {
        volume: Rvol * volumeCustom[6]
    }),
    strokeR(6, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[24], {
        volume: Lvol * volumeCustom[6]
    }),
    strokeL(f, keysPos[f])),
    swing(hihat1, _0x921f[199]),
    hihat1[_0x921f[65]][_0x921f[64]](_0x921f[196]),
    hihat1h[_0x921f[65]][_0x921f[64]](_0x921f[197]),
    hihat1p[_0x921f[50]][_0x921f[109]] = _0x921f[111]) : f == _0x921f[200] ? (f != Rpos && Rvol < MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[25], {
        volume: Lvol * volumeCustom[6]
    }),
    strokeL(3, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[25], {
        volume: Rvol * volumeCustom[6]
    }),
    strokeR(f, keysPos[f])),
    swing(hihat1, _0x921f[196]),
    swing(hihat1h, _0x921f[197]),
    hihat1p[_0x921f[50]][_0x921f[109]] = _0x921f[110]) : f == _0x921f[201] ? (f != Rpos && Rvol < MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[24], {
        volume: Lvol * volumeCustom[6]
    }),
    strokeL(4, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[24], {
        volume: Rvol * volumeCustom[6]
    }),
    strokeR(f, keysPos[f])),
    swing(hihat1, _0x921f[199]),
    hihat1[_0x921f[65]][_0x921f[64]](_0x921f[196]),
    hihat1h[_0x921f[65]][_0x921f[64]](_0x921f[197]),
    hihat1p[_0x921f[50]][_0x921f[109]] = _0x921f[111]) : f == _0x921f[202] ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[28], {
        volume: Mvol * volumeCustom[8]
    }),
    f <= Lpos || f < Rpos && Lvol >= MvolHelp ? strokeL(f, keysPos[f]) : strokeR(f, keysPos[f]),
    swing(crash1, _0x921f[193]),
    swing(crash1b, _0x921f[194])) : f == _0x921f[203] ? f <= Lpos || f < Rpos && Lvol >= MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[162], {
        volume: Lvol * volumeCustom[4]
    }),
    strokeL(f, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[162], {
        volume: Rvol * volumeCustom[4]
    }),
    strokeR(f, keysPos[f])) : f == _0x921f[204] ? f != Lpos && Lvol < MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[160], {
        volume: Rvol * volumeCustom[2]
    }),
    strokeR(10, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[160], {
        volume: Lvol * volumeCustom[2]
    }),
    strokeL(f, keysPos[f])) : f == _0x921f[205] ? f != Rpos && Rvol < MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[160], {
        volume: Lvol * volumeCustom[2]
    }),
    strokeL(9, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[160], {
        volume: Rvol * volumeCustom[2]
    }),
    strokeR(f, keysPos[f])) : f == _0x921f[206] ? f >= Rpos || f > Lpos && Rvol >= MvolHelp ? o ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[163], {
        volume: Rvol * volumeCustom[5]
    }),
    strokeR(f, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[162], {
        volume: Rvol * volumeCustom[4]
    }),
    strokeR(f, keysPos[8])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[163], {
        volume: Lvol * volumeCustom[5]
    }),
    strokeL(f, keysPos[f])) : f == _0x921f[207] ? f >= Rpos || f > Lpos && Rvol >= MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[29], {
        volume: Rvol * volumeCustom[9]
    }),
    strokeR(f, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[29], {
        volume: Lvol * volumeCustom[9]
    }),
    strokeL(f, keysPos[f])) : f == _0x921f[208] ? (f >= Rpos || f > Lpos && Rvol >= MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[30], {
        volume: Rvol * volumeCustom[9]
    }),
    strokeR(f, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[30], {
        volume: Lvol * volumeCustom[9]
    }),
    strokeL(f, keysPos[f])),
    swing(ride1, _0x921f[209])) : f == _0x921f[210] ? f >= Rpos || f > Lpos && Rvol >= MvolHelp ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[163], {
        volume: Rvol * volumeCustom[5]
    }),
    strokeR(f, keysPos[f])) : (ion[_0x921f[33]][_0x921f[129]](_0x921f[163], {
        volume: Lvol * volumeCustom[5]
    }),
    strokeL(f, keysPos[f])) : f == _0x921f[211] ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[27], {
        volume: Mvol * volumeCustom[10]
    }),
    f >= Rpos || f > Lpos && Rvol >= MvolHelp ? strokeR(f, keysPos[f]) : strokeL(f, keysPos[f]),
    swing(crash2, _0x921f[193]),
    swing(crash2b, _0x921f[194])) : f == _0x921f[212] ? (ion[_0x921f[33]][_0x921f[129]](_0x921f[31], {
        volume: Mvol * volumeCustom[11]
    }),
    strokeR(f, keysPos[f]),
    swing(china1, _0x921f[213])) : f == _0x921f[214] && (ion[_0x921f[33]][_0x921f[129]](_0x921f[159], {
        volume: KRvol * volumeCustom[3]
    }),
    kikR())
}
