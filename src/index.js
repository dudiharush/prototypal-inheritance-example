// Person constructor function
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

function Manager(name) {
  this.bonus = 10000000;
  Person.call(this, name); // decorating person instance with Manager props  
} 
// logs the Manager function
console.log(Manager.prototype.constructor);
// returns a clone of the person's prototype. with {construcor: Person...}
Manager.prototype = Object.create(Person.prototype);
console.log('name: ' + Manager.prototype.name);
console.log(Manager.prototype.constructor); // Person function
Manager.prototype.constructor = Manager; // point constructpr back to Manager
console.log(Manager.prototype.constructor); //Manager function
Manager.prototype.sayBonus = function() { 
  console.log(this.bonus);
};
const m = new Manager("mike");
console.log('manager instance proto is:',m.__proto__);

m.sayName();
m.sayBonus();
console.log(m.constructor)
