var sentence = "the first time use js";
var words = sentence.split(" ");
for (var i=0; i<words.length; i++) {
    console.log(words[i]);
}
console.log(Array.isArray(words));