input.onButtonPressed(Button.A, function () {
    radio.sendString("PYTHON")
    basic.showString("ENVIAT")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
