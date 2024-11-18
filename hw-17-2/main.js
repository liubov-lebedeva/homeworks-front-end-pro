class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }


    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`)
    }
}


const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();
coach2.displayInfo();