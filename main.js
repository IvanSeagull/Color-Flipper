let btn = document.getElementById('btn');
let out = document.getElementById('out');
let min = 0;
let max = 15;

btn.onclick =  function (){
    // making random string
    let randNum = randomNumber();
    let type = randomType();
    let result;
    if (type===0){
        result = makeString(randNum, 6);
    }
    else{
        result = makeString(randNum, 3);

    }

    out.innerHTML = "Background Color : #" + result;
    document.body.style.backgroundColor = "#" + result;
}


function  makeString(randNum, j){
    let result = "";
    for (let i = 0; i < j; i++) {
        let randNum = randomNumber()
        result += randNum
    }
    return result
}


function randomType(){
    let type = Math.floor(Math.random() * 2);
    return type;
}

function randomNumber(){
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min
    let result = switchFunc(randNum);
    return result
}


function switchFunc(randNum){
    switch (randNum) {
        case 10:
            randNum = "A"
            break;
        case 11:
            randNum = "B"
            break;
        case 12:
            randNum = "C"
            break;
        case 13:
            randNum = "D"
            break;
        case 14:
            randNum = "E"
            break;
        case 15:
            randNum = "F"
            break;
        default:
            randNum = randNum.toString();
            break;
    }
    return randNum
}