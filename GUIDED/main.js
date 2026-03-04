function ganjilGenap(input){
    if(input % 2 == 0){
        return true;
    }

    return false;
}

function absoultValue(input){
if (input < 0){
    return -input;
}
}

let apakahGenap = absoultValue(145);
console.log(apakahGenap);