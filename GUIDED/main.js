function ganjilGenap(input){
    if(input % 2 === 0){
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

let nama = "Marta";
console.log(`Helo, nama`);

const user = {
    firstName: "Marta",
    lastName: "Safitri",
    age: 19
};

console.log(user["age"]);