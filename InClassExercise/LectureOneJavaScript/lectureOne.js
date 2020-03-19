thisIsAGlobalVariable = "hello";   //global variable without var, const, let
                                   //don't use it

const firstName = "Qiaofang";
const lastName = "Deng";

const val = 42
const arr = [
    'string',
    42,
    function() {console.log('hi')},
]

arr[2]()

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

const x = 42
console.log(typeof x)


console.log(typeof null)