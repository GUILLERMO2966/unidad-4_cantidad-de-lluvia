let cantidad_lluvia = 0
input.onButtonPressed(Button.A, function () {
    cantidad_lluvia = 0
    for (let index = 0; index < 7; index++) {
        cantidad_lluvia += randint(1, 6)
        basic.showNumber(cantidad_lluvia)
    }
})
