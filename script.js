const result = document.getElementById('display');
const size = document.getElementById('size');
const uppercase = document.getElementById('upper');
const lowercase = document.getElementById('lower');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('special');
const cop = document.getElementById('copy');
const generate = document.getElementById('generate');
const memorable = document.getElementById('memorable');

// ¨Passwords.
let symbolstr = '&_)$*%^!=-/<>(@``ç#|@\&';
let upercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
let numbersStr = '0123456789';


/* Every time you click on the generate btn it is going to check if the checkbox is checked 
 then it gives you the checked result */
 generate.addEventListener('click', () =>{
    // All Probabilities. a lot of if statements but that's the easy way to do it.
    if(uppercase.checked && lowercase.checked && symbols.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&hA5$jL9@sB5_mP1&nV6)cR5L*gF32';
        result.value = allStr.slice(random, random + +size.value);

    }else if(uppercase.checked && lowercase.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'hA5jL9sB5mP1nV6cR5LgF32Lo5Fd18';
        result.value = allStr.slice(random, random + +size.value);

    }else if(symbols.checked && numbers.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&h5$j9@s5_m1&n6)c5*g32)5l@9p#0';
        result.value = allStr.slice(random, random + +size.value);

    }else if(uppercase.checked && lowercase.checked && symbols.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'jY=Sn@Vt$&hA$jL@sB_mP&nV)cRL*gF';
        result.value = allStr.slice(random, random + +size.value);
    }
    else if(uppercase.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'hAjLsBmPnVcRLgFkGvEjIgOpScTnY';
        result.value = allStr.slice(random, random + +size.value);
    }else if(symbols.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&5$9@5_1&6)5*32@4\&=9!5<0#3}0+';
        result.value = allStr.slice(random, random + +size.value);
    }
    else if(symbols.checked){
        let random = Math.floor(Math.random() * 5);
        result.value = symbolstr.slice(random, random + +size.value);

    }
    else if(numbers.checked){
        let random = Math.floor(Math.random() * 5);
        result.value = numbersStr.slice(random, random + +size.value);

    }else if(lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        result.value = lowercaseStr.slice(random, random + +size.value);

    }else if(upercase.checked){
        let random = Math.floor(Math.random() * 10);
        result.value = upercaseStr.slice(random, random + +size.value);
    }
});

// Ability to copy the Text.
function copyText(){
    result.select();
    result.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Text has been copied to clipboard.");
}