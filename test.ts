input.onButtonPressed(Button.A, () => {
    DS1307.setSecond(0)
})
DS1307.start()
basic.forever(() => {
    basic.showString(DS1307.getInfo(timeData.second))
    basic.pause(100)
})