// ---Primitives
// number
let age: number;

age = 12; // can also use float. has to be number! can also just assign at let

// string
let userName: string;

userName = 'TJ';

// boolean
let isInstructor: boolean;

isInstructor = true;

// ---- More complex types
// array
let hobbies: string[];

hobbies = ['sports', 'bakong', 'junk'];

// object
let person: {
    name: string;
    age: number;
};

person = {
    name: 'TJ',
    age: 35
};

// an array of objects

let people: {
    name: string;
    age: number;
}[];  // the array [] states to display not as objects but as an array of those objects

// type inference

let course = 'React - The Complete Guide';

course = 1234; // gets an error since string type was inferred as the variable type. # wont work

// type union

let course1: string | number | boolean = 'React 2, Electric Boogaloo'; // the | allows "or"

course1 = 34343434; // allows to set as a number, string, or boolean

// Type alias?

//          A way to set shortcuts to avoid over-typing same thing
// example below takes the person object above - using "Type" you create the blueprint
    // for what the object is - then assign the variable object to that "Type"

type Person1 = {
    name: string;
    age: number;
};

let person1: Person1; // instead of repeating the blueprint for each "person", see person 2
let person2: Person1; // just needed to create object and set bluprint or "type"
// big difference compoared to above with lines 23-32

person1 = {
    name: 'TJ',
    age: 35
};

person2 = {
    name: 'Jim',
    age: 34
};

// functions & types

function add(a: number, b: number) {
    return a + b; // in this example, the return is inferred due to parameter types
}

// function wtih type declaration

function add1(a: number, b: number): number | string {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
} // no return, this return is a "void" type, which is similar to null or undefined

// generics

function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// notes on generics
//      due to setting type of "any", the inferred type gets in teh way?
// to get around this, add <"someletter"> like <T> in the function line
    // before (array:), and then change "any" to that letter, so T

// example:

function insertAtBeginning1<T>(array: T[], value: T) {
    //code
}
// wtih this, the TS will then look at the VALUE within the array for type
    // allows us to add additoinal functions or methods that would either work on 
        // strings but not numbers. can use same array creater function (insertatbegging)
        // for all options here.


//classes and interfaces

// classes create blueprints for objects, just as in JS

class Student {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    enroll(courseName: string) {
        this.courses.push(courseName); // a method to create a new course for object
    }
}

const student = new Student('TJ', 'Bakon', 35, ['Angular']);
student.enroll('React'); // addds React to list of courses for TJ

// inherently, blue print items of object are "public" and can be accessed outside of ojbect
    // by setting things "private", cannot access that data outside of object
// example -    private courses: string[];
// the only way to access the listing of courses here would be to set another variable
    // inside the object that would "return" this.courses, maybe as
    // listCourses() {}
        // with a "return this.courses.slice();"

// more on classes and constructor
    // common practice to declare properties and types through class, but use values
        // declared through constructor, as we did in lines 125-135 above - there is a
            // shorthand version of this though.... 

// another way to declare class and constructor properties and types

class Student1 {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}
}

const student1 = new Student1('Brady', 'Johnson', 25, ['JavaScript']);

// interfaces feature
    // only in TS, not in Vanila JS
    // will not be complied to JS

// interfaces are just object type definitions?

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let tj: Human;

tj = {
    firstName: 'TJ',
    age: 35,
    greet() {
        console.log("Ummm");
    },
};

// what separates interfaces than just using type?
    // class structure declaration:  property types, methods, so forth

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log("Wave");
    }
}
// in the class above, using "implements" word - the class had red issues until
    // all properties that match that of "Human" were added and filled out!