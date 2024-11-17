function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.maxAttendancesAmount = 25;
    this.attendances = [];
    this.minGradePointAverage = 90;
    this.minAverageAttendance = 0.9;

    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    };

    this.getGradePointAverage = function () {
        if (this.grades.length === 0) {
            return 0;
        }
        const gradesSum = this.grades.reduce((sum, grade) => sum + grade, 0);
        return gradesSum / this.grades.length;
    };


    this.present = function () {
        if (this.attendances.length < this.maxAttendancesAmount) {
            this.attendances.push(true);
        } else {
            console.warn("Attendance is full. Cannot mark more than 25 records.");
        }
    };

    this.absent = function () {
        if (this.attendances.length < this.maxAttendancesAmount) {
            this.attendances.push(false);
        } else {
            console.warn("Attendance is full. Cannot mark more than 25 records.");
        }
    };

    this.getAverageAttendance = function () {
        if (this.attendances.length === 0) {
            return 0;
        }
        const visitsAmount = this.attendances.filter(Boolean).length;
        return visitsAmount / this.attendances.length;
    };


    this.summary = function () {
        const gradePointAverage = this.getGradePointAverage();
        const averageAttendance = this.getAverageAttendance();
        if (gradePointAverage >= this.minGradePointAverage && averageAttendance >= this.minAverageAttendance) {
            return 'Well done!';
        } else if (gradePointAverage >= this.minGradePointAverage || averageAttendance >= this.minAverageAttendance) {
            return 'Normal, but you can do better.';
        } else {
            return 'Rediska';
        }
    };
}

const john = new Student('John', 'Bahh', 1999, [90, 80, 70, 100, 100, 100]);
john.present();
john.present();
john.present();
john.present();
john.absent();

console.log(john);
console.log(`Age: ${john.getAge()}`);
console.log(`Grade Point Average: ${john.getGradePointAverage()}`);
console.log(`Average Attendance: ${john.getAverageAttendance()}`);
console.log(`Summary: ${john.summary()}`);


const betty = new Student("Betty", "Treal", 1990, [90, 100, 70, 80, 100, 100]);
for (let i = 0; i < 25; i++) {
    if (i < 24) {
        betty.present();
    } else {
        betty.absent();
    }
}


console.log(betty);
console.log(`Age: ${betty.getAge()}`);
console.log(`Grade Point Average: ${betty.getGradePointAverage()}`);
console.log(`Average Attendance: ${betty.getAverageAttendance()}`);
console.log(`Summary: ${betty.summary()}`);


const mark = new Student('Mark', 'Smith', 2001, []);
console.log(mark);
console.log(`Age: ${mark.getAge()}`);
console.log(`Grade Point Average: ${mark.getGradePointAverage()}`);
console.log(`Average Attendance: ${mark.getAverageAttendance()}`);
console.log(`Summary: ${mark.summary()}`);