// function fetchData(){
//     console.log("Tushar Gaandu!....");
// }

// setInterval(fetchData,2000);

// if([]){
//     console.log("HI");
// }
// else{
//     console.log("Bye");
// }

const person = {
  firstName: "Ankit",
  lastName: "Sharma",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName); // "Ankit Sharma"

console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

person.fullName = "John Doe";
console.log(person.firstName); // "John"
console.log(person.lastName); // "Doe"

const user = {
  _age: 20,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative!");
    } else {
      this._age = value;
    }
  },
};

const descriptor = Object.getOwnPropertyDescriptor(user, "_age");
console.log(descriptor);

