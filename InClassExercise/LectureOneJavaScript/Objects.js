const o = new Object();
o. firstName = "Qiaofang";
o.lastName = "Deng";
o. isTeaching = true;
o.greet = function(){
    console.log('hi')
}

//create an object o2
const o2 = {}
o2.firstName = 'Qiaofang'
o2['lastName'] = 'Deng'
const key = "isTeaching"
o2[key] = true
o2['greet'] = function(){
    console.log('hi')
}

//create object o3, different syntax
const o3 = {
    1: "test",
    fisrtName: 'Qiaofang',
    lastName: 'Deng',
    isTeaching: true,
    greet: function() {
        console.log('hi')
    },
    //object within an object
    address: {
        street: 'Main St.',
        number: 123,
    }
}

//access to the attribute
o3.address;
o3.address.number;
o3.address['number']


o3["1"]
//1 is coered into a string "1"
o3[1]

//this will return a "1"
1 + ""
