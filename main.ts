input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("2B33")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Asleep)
})
basic.forever(function () {
	
})
