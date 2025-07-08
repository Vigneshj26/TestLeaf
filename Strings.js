
function reverseString() {

    let str = "MADAM"

    let revered = str.split("").reverse().join("")
    console.log(revered)

    if (str === revered) {

        console.log(`${str} is a palidrome`)
    }
    else {
        console.log(`${str} is not a palidrome`)
    }

} reverseString()