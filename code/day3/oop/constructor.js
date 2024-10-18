function User(name, age) {
    this.name = name;
    this.age = age;
    this.makeFromInstance = function () {
        console.log('Soy un método de instancia');
    };
    User.count++;
}

User.count = 0;
User.getCount = function () {
    console.log('Hay', User.count, 'instancias');
};

User.prototype.job = 'Finding a job';
User.prototype.greeting = function () {
    console.log('Hola, soy', this.name, this.job);
};

const user1 = new User('Pepe', 22);
const user2 = new User('Ernestina', 25);

console.log(user1);
console.log(user2);

// Plasticidad de los objetos

user1.name = 'Jose';
user1.job = 'Developer';
delete user1.age;
console.log(user1);

user1.greeting();
user2.greeting();
User.getCount();
