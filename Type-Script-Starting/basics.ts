// Primitives: number, string, boolean
// More complex: arrays, objects
// Function types, parameters


// Primitives

let age: number = 24; // okay
age = 23;             // okay
age = 32.2;           // okay


let userName: string;
userName = 'Anuj';


let isInstructor: boolean;
isInstructor = true;




// More complex

let hobbies: string[];
hobbies = ["cric", "football", "12"];  // okay
// hobbies = ["cric", "football", 12]; // error


let person: {};
person = {
    name: "Anuj",
    lovesCricket: true,
    age: 12
}
// the above is okay, but still a flaw
// as we see we have any type of key values in above object, we can also control this

let person2: {
    name: string
    lovesCricket: boolean,
    age: number
};

person2 = {
    name: "Anuj",
    lovesCricket: true,
    age: 12
}

// now the above has strict type


// we can have some more advanced array structure

let hoobies2: {
    sportName: string,
    peopleCount: number
}[];

// now above is the array of object of the same shape and strict types




// Type Inference

let course = "React Course by Max"
// course = 12; // error
// Type 'number' is not assignable to type 'string'.
// Typescript automaticaly infer the type of the variable, so we dont really need to assign everytime by ourself. 




// Type Union
let course2: string | number = "React Course by Max"
course2 = 12; // now okay




// Type Aliases

type Person = {
    name: string,
    isPlayer: boolean,
    age: number
}


let p1: Person;
let p2: Person;
let p3: Person;



// Functions and Return Types

function add2(a: number, b: number): number {

    return a + b;

}



// Generics
/*
function insertAtBeginning(array: any[], value: any){

    const newArray = [value, ...array];
    return newArray;

}

const demoArray = [1, 2, 3];   // type inferred is number
const updatedArray = insertAtBeginning(demoArray, 9);   // type inferred is any
*/


function insertAtBeginning<T>(array: T[], value: T){

    const newArray = [value, ...array];
    return newArray;

}

const demoArray = [1, 2, 3];   // type inferred is number
const updatedArray = insertAtBeginning(demoArray, 9);   // type inferred is now number
const myHobbies = insertAtBeginning(["abc", "def"], "efg");  // type is now string
