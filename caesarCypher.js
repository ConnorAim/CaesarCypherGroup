function enDeCode() {
    let userString = document.getElementById("userMessage").value;
    let encode = document.getElementById("encode");
    let userKey = document.getElementById("userKey").value;
    let cleanString = (userString.trim()).toLowerCase();
    let outputMessage = [];
    let flag = true;

    if (encode.checked) {
        flag = true;
    } else {
        flag = false;
    }
    for (let i = 0; i < cleanString.length; i++) {
        outputMessage.push(codeLetter(cleanString[i], userKey, flag));
    }

    document.getElementById("output").value = outputMessage.join("");
}


function convertIndexToLetter(index) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0","1","2","3","4","5","6","7","8","9"];
    let letter = alphabet[index];
    return letter;
}

function convertLetterToIndex(letter) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0","1","2","3","4","5","6","7","8","9"];
    index = alphabet.indexOf(letter);
    return index;
}

function calculateNewIndex(letter, userKey, encode) {
    let index = Number(convertLetterToIndex(letter));

    if (encode) {
        index = index + Number(userKey);
    } else {
        index = index - Number(userKey);
    }

    if (index > 25) {
        index = index - 26;
    } else if (index < 0) {
        index = index + 26;
    }
    return index;
}

function codeLetter(letter, userKey, flag) {
    if (letter === " ") {
        return " "; // Return space character as is
    } else {
        let letterRegEx = /[a-z]/;
        if (letterRegEx.test(letter)) {
            let newIndex = calculateNewIndex(letter, userKey, flag);
            let codedLetter = convertIndexToLetter(newIndex);
            return codedLetter;
        } else {
            // Special characters case
            if (flag) {
                // Encoding
                let encodedSpecial = String.fromCharCode(letter.charCodeAt(0) + userKey);
                return encodedSpecial;
            } else {
                // Decoding
                let decodedSpecial = String.fromCharCode(letter.charCodeAt(0) - userKey);
                return decodedSpecial;
            }
        }
    }
};