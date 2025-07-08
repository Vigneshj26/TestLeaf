
let str = "Hello World"
const data = str.trim() // Remove leading and trailing spaces("Hello", "World")
const word = data.split(" ")
const lastWord = word[word.length - 1]
console.log(lastWord.length);


// Task: Find the length of the last word in a string

let fly = "fly me to the moon"
const flyData = fly.trim()
const flyWord = flyData.split(" ")
const flyLateWord = flyWord[flyWord.length - 1]
console.log(flyLateWord.length);

//Write a function to check if two strings are anagrams.
function isAnagram(str1, str2) {

    const str11 = str1.replace(/\s/g, '').toLowerCase();
    const str21 = str2.replace(/\s/g, '').toLowerCase();


    str11Sorted = str1.split('').sort().join('')
    str21Sorted = str2.split('').sort().join('')

    if (str11Sorted !== str21Sorted) {
        console.log(`${str1} and ${str2} are not anagrams`);
        return false;

    }
    console.log(`${str1} and ${str2} are anagrams`);
    return true;
}
isAnagram("listen", "silent")