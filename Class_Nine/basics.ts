// numbers

let numOfStudents: number;
numOfStudents = 13;

// example above of type declaration

//complex stuff

let students: string[];
students = ["John", "Jacob", "Smith"];

let mixedBag: any[];
mixedBag = [1, "Purple", true];

///; type alias objects

type CapitalLetter = {
    age: number;
    name: string;
};

let newThing: CapitalLetter = {
    age: 3443,
    name: "bingo"
}

// function stuff

function add(a: number, b: number) {
    return a + b;
}

// can also set return to be certain type

function add1(a: number, b: number): number {
    return a + b;
}


// generics

function getId<Type>(value: Type): Type {
    return value;
}

let userOne = getId<Number>(12);
let userTwo = getId<String>("hello");


// interfaces! in your face interface

interface StudentInterface {
    first: string;
    last: string;
    enroll: (courseName: string) => void;
    listCourses: () => string[];
}

class StudentA implements StudentInterface {
    constructor(
        public first: string,
        public last: string,
        private courses: string[]
    ){}
    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const studentOne = new StudentA("TJ", "Bakon", ["Angular"])

studentOne.enroll("RubyOnRails");

studentOne.listCourses();

console.log(studentOne);