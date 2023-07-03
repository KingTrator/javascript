var realTime = new Date() // Call the class
var time = realTime.getHours() //Cal a method from the class
console.log(`Hello! It's ${time} hours.`)
if (time < 12 && time > 6) {
    console.log(`Good morning, sunshine!`)
} else if (time >= 12 && time < 18) {
    console.log(`Good afternoon, sunshine!`)
} else if (time >= 18) {
    console.log(`Night, baby!`)
} else {
    console.log(`You're a damn thief, aren't you?`)
}