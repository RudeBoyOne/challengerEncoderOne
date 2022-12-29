import { encrypt, decrypt } from "./encrypt.js";
import { copyText } from "./copyText.js";

const form = document.querySelector("form");
const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDecrypt = document.getElementById("buttonDecrypt");
const textToEncodeOrToDecode = document.getElementById("paraDecodificar");
const textEncodedOrDecoded = document.getElementById("textDecodificado");
const divNoContentText = document.getElementsByClassName("divNoContentText")[0];
const sectionTextEncodedOrDecoded = document.getElementsByClassName("textCopy")[0];
const buttonCopy = document.getElementById("buttonCopy");
const divCopySucess = document.getElementById("divCopySucess");
const validationError = document.getElementById("validationError");
const validation = document.getElementById("validation");
const validationBox = document.getElementsByClassName("validationBox")[0];


!textEncodedOrDecoded.value ? sectionTextEncodedOrDecoded.style.display = "none" : null;


buttonEncrypt.addEventListener("click", (e) => {
    e.preventDefault();

    if (!textToEncodeOrToDecode.value) {
        validation.style.display = "none"
        validationError.style.display = "block"
        validationBox.style.color = "red";
        validationBox.style.fontWeight = 600;
        textToEncodeOrToDecode.focus()
    } else {
        
        let textEncoded = encrypt(textToEncodeOrToDecode.value);
        
        textEncodedOrDecoded.innerText = textEncoded;
        
        if (textEncodedOrDecoded) {
            sectionTextEncodedOrDecoded.style.display = "flex"
            divNoContentText.style.display = "none"
            divCopySucess.style.display = "none"
        }
        
        form.reset();
        
        validation.style.display = "block"
        validationError.style.display = "none"
        validationBox.style.color = "black";
        validationBox.style.fontWeight = 400;
    }

})

buttonDecrypt.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!textToEncodeOrToDecode.value) {
        validation.style.display = "none"
        validationError.style.display = "block"
        validationBox.style.color = "red";
        validationBox.style.fontWeight = 600;
        textToEncodeOrToDecode.focus()
    } else {
        
        let textDecoded = decrypt(textToEncodeOrToDecode.value);
        
        textEncodedOrDecoded.innerText = textDecoded;
        
        if (textEncodedOrDecoded) {
            sectionTextEncodedOrDecoded.style.display = "flex"
            divNoContentText.style.display = "none"
            divCopySucess.style.display = "none"
        }
        
        form.reset();
        
        validation.style.display = "block"
        validationError.style.display = "none"
        validationBox.style.color = "black";
        validationBox.style.fontWeight = 400;
    }
})


buttonCopy.addEventListener("click", async () => {
    copyText(textEncodedOrDecoded.value);

    textEncodedOrDecoded.innerText = "";
    divCopySucess.style.display = "flex";
    sectionTextEncodedOrDecoded.style.display = "none";
})