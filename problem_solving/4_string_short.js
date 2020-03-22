/*
integer "11231230" convert to shorter string
and decode to original
*/

//create dictionary to use in encoding
var DICTIONARY = "tarun7350298640".split('');
console.log("DICTIONARY: "+DICTIONARY)

//encoder
function encoder(num){
    var base = DICTIONARY.length;
    var encoded = '';
    console.log("Base: "+base)

    if(num === 0){
        return DICTIONARY[0];
    }

    while(num>0){
        encoded += DICTIONARY[(num%base)];
        console.log("dict value: "+DICTIONARY[(num%base)]);
        num = Math.floor(num/base);
        console.log("num in while: "+num);
    }
    console.log("encoded: "+encoded);
    return reverseWord(encoded);
}

function reverseWord(str){
    var reversed = '';
    for(var i=str.length-1; i>=0; i--){
        reversed += str.charAt(i);
    }
    console.log(reversed);
    return reversed;
}
encoder(1234567);

//decoder
function decoder(encodedStr){
    var base = DICTIONARY.length;
    var decoded = 0 ;

    for(var index=0; index<encodedStr.split('').length; index++){
        decoded = decoded * base + DICTIONARY.indexOf(encodedStr.charAt(index));
    }

    console.log(decoded);
    return decoded;
}

decoder(encoder(1234567));