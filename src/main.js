const $ = function (id) {
    return document.getElementById(id);
}

$("guessButton").onclick = function () {
    const guessField = $("guessField");
    let guess = String(guessField.value);
    console.log(guess)
    guessField.value = "";
}

$("hintButton").onclick = function () {

}