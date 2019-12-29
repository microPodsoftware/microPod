let LEVEL = 0
let ONOFF = 0
input.onButtonPressed(Button.A, function () {
    LEVEL += -1
})
input.onButtonPressed(Button.B, function () {
    LEVEL += 1
})
basic.forever(function () {
    while (LEVEL == 6) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    while (LEVEL == 1) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    while (LEVEL == 2) {
        music.playTone(131, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(208, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    if (ONOFF == 0) {
        basic.showNumber(LEVEL)
    }
})
basic.forever(function () {
    while (LEVEL == 7) {
        ONOFF = 1
        basic.showString("INPUT TEXT HERE")
        ONOFF = 0
    }
})
basic.forever(function () {
    while (LEVEL == 4) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    while (LEVEL == 3) {
        music.playTone(175, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    while (LEVEL == 5) {
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
