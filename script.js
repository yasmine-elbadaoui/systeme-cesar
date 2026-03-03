
function encrypt() {
    let message = document.getElementById("mess").value; 
    let decalage = parseInt(document.getElementById("dec").value);  
    let resul = "";  
    
    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        
        if (code >= 65 && code <= 90) {
            let newcode = (code - 65 + decalage) % 26 + 65;
            resul += String.fromCharCode(newcode);
        } else if (code >= 97 && code <= 122) {
            let newcode = (code - 97 + decalage) % 26 + 97;
            resul += String.fromCharCode(newcode);
        } else {
            resul += message[i];
        }
    }
    
    
    document.getElementById("res").value = resul;  
}

function decrypt() {
    let message = document.getElementById("mess2").value; 
    let decalage = parseInt(document.getElementById("dec2").value);
    let resul = "";  
    
    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        
        if (code >= 65 && code <= 90) {
            let newcode = (code - 65 - decalage + 26) % 26 + 65;
            resul += String.fromCharCode(newcode);
        } else if (code >= 97 && code <= 122) {
            let newcode = (code - 97 - decalage + 26) % 26 + 97;
            resul += String.fromCharCode(newcode);
        } else {
            resul += message[i];
        }
    }
    
    
    document.getElementById("res2").value = resul; 
}