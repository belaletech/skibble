function sayHello(name) {
  console.log("Hello there, Ayan");
  console.log(`Hello there,${name}.How are you?`);
}
sayHello("Ayan");
sayHello("Belal Ahmad");

function namastey() {
  return "Hello in India";
}

var greetings = namastey;

console.log(greetings);
console.log(namastey());
