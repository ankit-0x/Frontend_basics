let user1 = { profile: null };
console.log(user1.profile?.age); // undefined (no error)

let user = {
  greet() { return "Hello"; }
};

console.log(user?.greet?.());   // "Hello"
console.log(user.sayBye?.());  // undefined

