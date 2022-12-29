export const encrypt = (textToEncode) => {

    let arrayDeString = textToEncode.split(' '); 
    
    let stringEncrypt = arrayDeString.map(letra => 
        letra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat") 
        .replace(/a/g, "ai")
        ).join(" ");
    
    return stringEncrypt;
}

export const decrypt = (textToDencode) => {
    
    let arrayDeString = textToDencode.split(' '); 
    
    let stringDecrypt = arrayDeString.map(letra => 
        letra
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u")
            ).join(" ");
    
    return stringDecrypt;

}