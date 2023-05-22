input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
        basic.pause(pause_after_plot_LED)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, index)
        basic.pause(pause_after_plot_LED)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
        basic.pause(pause_after_plot_LED)
        led.plot(4 - index, index)
        basic.pause(pause_after_plot_LED)
    }
})
let pause_after_plot_LED = 0
led.setBrightness(125)
basic.showIcon(IconNames.Heart)
pause_after_plot_LED = 300
basic.forever(function () {
	
})
