basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.showString("AND")
        basic.pause(1000)
    }
    if (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
        basic.showString("OR")
        basic.pause(1000)
    }
    if (!(input.logoIsPressed())) {
        basic.showString("NOt")
        basic.pause(1000)
    }
    if (!(input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)))) {
        basic.showString("NOR")
        basic.pause(1000)
    }
    if ((input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.showString("NAND")
        basic.pause(1000)
    }
})
