function enDeCode() {
    let userString = document.getElementById("userMessage").value;
    let encode = document.getElementById("encode");
    let userKey = document.getElementById("userKey").value;
    let cleanString = userString.trim();
    let outputMessage = [];
    let flag = encode.checked;
    for (let i = 0; i < cleanString.length; i++) {
        outputMessage.push(codeCharacter(cleanString[i], userKey, flag));
    }
    document.getElementById("output").value = outputMessage.join("");
}
function convertIndexToCharacter(index) {
    return String.fromCodePoint(index);
}
function convertCharacterToIndex(character) {
    return character.codePointAt(0);
}
function calculateNewIndex(codePoint, userKey, encode) {
    let index = convertCharacterToIndex(codePoint);
    if (encode) {
        index += Number(userKey);
    } else {
        index -= Number(userKey);
    }
    return index;
}
function codeCharacter(character, userKey, flag) {
    if (character === ' ') {
        return ' ';
    } else {
        let newIndex = calculateNewIndex(character, userKey, flag);
        let codedCharacter = convertIndexToCharacter(newIndex);
        return codedCharacter;
    }
};