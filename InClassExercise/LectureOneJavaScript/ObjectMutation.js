const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key', 
    }
}

//pointing to object o
const o2 = o
o.a = 'new value'

//return "new value", passing by reference
console.log(o2.a)

//if we want to get o and o2 has the same value but different references
//shallow cloning the object
const o3 = Object.assign({}, o)  //create a new object o2, and merge value from o to o2
o3.obj.key = "new value"

// this would print new value, because it's a shallow copy which would not create
// new object inside
console.log(o.obj.key)


//deep copy
function deepCopy(obj) {
    //check if vals are objects
    //if so, copy that object (deep copy)
    //else return the value
    const keys = Object.keys(obj);   //return an array of all keys in 'obj'
    const newObject = {};
    for(let i = 0; i < keys.length; i++){
        const key = keys[i]

        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        } else {
            newObject[key] = obj[key];
        }
    }

    return newObject

}

const o4 = deepCopy(o)

o.obj.key = "new key!";
console.log(o4.obj.key)