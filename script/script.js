/*
var btnElementValue = document.getElementById('btn');
btnElementValue.onclick = function () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName =firstName+' '+lastName;
    document.getElementById('fullName').value = fullName;

};
*/

/*
var btnElementValue = document.getElementById('btn');
btnElementValue.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var fullNumber =firstNumber+' '+secondNumber;
    document.getElementById('fullNumber').value = fullNumber;

};
*/

/*
var AddValue = document.getElementById('add');
AddValue.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var res =firstNumber+secondNumber;
    document.getElementById('result').value = res;

};

var subValue = document.getElementById('sub');
subValue.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var res =firstNumber-secondNumber;
    document.getElementById('result').value = res;

};

var mulValue = document.getElementById('mul');
mulValue.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var res =firstNumber*secondNumber;
    document.getElementById('result').value = res;

};

var divValue = document.getElementById('div');
divValue.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var res =firstNumber/secondNumber;
    document.getElementById('result').value = res;

};

var modValue = document.getElementById('mod');
modValue.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var res =firstNumber%secondNumber;
    document.getElementById('result').value = res;

};

*/

var redBtnElement = document.getElementById('redBtn');
redBtnElement.onmouseover = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'class-one';
};

var blueBtnElement = document.getElementById('blueBtn');
blueBtnElement.onmouseover = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'class-two';
};

var orangeBtnElement = document.getElementById('orangeBtn');
orangeBtnElement.onmouseover = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'class-three';
};

var navyBtnElement = document.getElementById('navyBtn');
navyBtnElement.onmouseover = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'class-four';
};

var greenBtnElement = document.getElementById('greenBtn');
greenBtnElement.onblur = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'class-five';
};
