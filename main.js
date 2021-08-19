const textArray = [
    "Youtuber",
    "Web Developer",
    "Developer",
    "Programmer"
];

let count = 0;
let index = 0;
let letter = "";
let currentText = "";

(function type(){
    if(count === textArray.length){
        count = 0;
    }

    currentText = textArray[count]
    letter = currentText.slice(0, ++index)

    document.querySelector('.text').textContent = letter;

    if(letter.length === currentText.length){
        count ++;
        index = 0;
    }

    setTimeout(type, 200)
}())