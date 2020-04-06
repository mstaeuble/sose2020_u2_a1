input.onGesture(Gesture.TiltRight, function () {
    if (gedrueckt == 0) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (gedrueckt == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    gedrueckt = 1
})
let gedrueckt = 0
gedrueckt = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
