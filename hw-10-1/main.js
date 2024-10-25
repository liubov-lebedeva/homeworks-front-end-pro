const user = {
    name: 'Dmytro',
    age: 23,
    location: 'Kyiv',

    getUserInfo() {
        return `Name: ${this.name}, age: ${this.age}, location: ${this.location}`;
    }
};
console.log(user.getUserInfo());