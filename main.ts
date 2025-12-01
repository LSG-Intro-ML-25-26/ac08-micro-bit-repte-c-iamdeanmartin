input.onButtonPressed(Button.A, function () {
    radio.sendString("Python")
    basic.showString("Enviat")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
