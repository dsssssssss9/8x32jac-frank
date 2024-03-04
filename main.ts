modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    matrix.scrollText(
    "Jason.",
    10,
    0,
    neopixel.colors(NeoPixelColors.Green)
    )
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    matrix.scrollText(
    "Bye ",
    10,
    0,
    neopixel.colors(NeoPixelColors.Violet)
    )
})
let matrix: SmartMatrix.Matrix = null
basic.showIcon(IconNames.Pitchfork)
matrix = SmartMatrix.create(
DigitalPin.P2,
32,
8,
NeoPixelMode.RGB
)
matrix.Brightness(32)
matrix.scrollText(
"HiYa",
10,
0,
neopixel.colors(NeoPixelColors.Blue)
)
matrix.show()
basic.forever(function () {
	
})
