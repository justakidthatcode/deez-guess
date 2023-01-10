input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
let index = 0
let text_list: string[] = []
game.addLife(5)
text_list = [
"DOG",
"CAT",
"ZANN",
"nut",
"bird",
"skunk",
"mouy",
"tokyo",
"Ai",
"lion",
"tiger",
"robot",
"blender",
"house",
"blue",
"red",
"purple"
]
game.startCountdown(60000)
basic.forever(function () {
	
})
