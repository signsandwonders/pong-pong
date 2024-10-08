input.onButtonPressed(Button.A, function () {
    if (paddle > 0) {
        paddle += -1
        plotPaddle()
    }
})
function plotPaddle () {
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
    led.plot(paddle, 4)
    led.plot(paddle + 1, 4)
}
input.onButtonPressed(Button.B, function () {
    if (paddle < 3) {
        paddle += 1
        plotPaddle()
    }
})
function plotBall () {
    if (ball[0] == -1) {
        ball = [randint(0, 4), 0]
    } else if (ball[1] == 4) {
        if (ball[0] == paddle || ball[0] == paddle + 1) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
            reset()
        } else {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            reset()
        }
    } else {
        pball = ball
        ball = [ball[0], ball[1] + 1]
    }
    led.unplot(pball[0], pball[1])
    led.plot(ball[0], ball[1])
}
function reset () {
    music.play(music.stringPlayable("C D E F G A E C5 ", 352), music.PlaybackMode.UntilDone)
    paddle = 0
    ball = [-1, -1]
    pball = [-1, -1]
    plotPaddle()
    plotBall()
}
let pball: number[] = []
let ball: number[] = []
let paddle = 0
reset()
basic.forever(function () {
    basic.pause(1000)
    plotBall()
})
