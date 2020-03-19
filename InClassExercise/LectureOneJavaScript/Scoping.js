//function hoisting
// certain things are hoisted: var, function defination
thisIsHoisted();

//this would return error since const is not able to use until it's defined.
// thisIsNotHoisted;
const thisIsAConst = 50;
// thiIsAConst++  //error, because it's a constant

const constObj = {}

constObj.a = 'a';   //this is ok, because the reference is not changed, just mutated

let thisIsALet = 51;
thisIsALet = 50;

// let thisIsALet = 50;   //error. because it's already declared before

var x = 1;
var x = 2;   //this is allowed, it's an old way of declaring variable, not a lot of protection


function thisIsHoisted(){
    console.log("this is a function declared at the bottom of a file");
}

const thisIsNotHoisted = function() {
    console.log('should this be hoisted?')
}