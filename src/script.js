function checkNumbers(event) {
    const inputEl = document.querySelector(".display input");
    const inputLength = inputEl.value.length;

    if (inputLength == 0){
        return false
    } else{

        for (var i = 0; i < inputLength; i++) {
            let caracter = inputEl.value.substring(i, (i+1))
            if (caracter != 1 && caracter != 0) {
                return false;
            }
        }
    }
}


function convert() {

    const check = checkNumbers();

    if (check == false){

        alert("caracter invalid")
        const inputEl = document.querySelector(".display input");
        inputEl.value = "";

    } else {
        const inputEl = document.querySelector(".display input");
        const binaryEl = document.querySelector("input.binary");
        const decimalEl = document.querySelector("input.decimal");
        
        const binary = inputEl.value;
        const decimal = parseInt(binary, 2);
        
        binaryEl.value = binary;
        decimalEl.value = decimal;
    }

}
