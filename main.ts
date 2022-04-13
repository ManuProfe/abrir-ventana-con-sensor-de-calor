basic.clearScreen()
servos.P0.setAngle(0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P10) > 600) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Sword)
    }
    if (pins.analogReadPin(AnalogPin.P10) > 600) {
        servos.P0.setAngle(90)
    }
    if (pins.analogReadPin(AnalogPin.P10) <= 600) {
        servos.P0.setAngle(0)
    }
})
