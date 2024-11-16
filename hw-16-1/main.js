class Student {
    constructor(firstName, lastName, birthYear, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.maxAttendancesAmount = 25;
        this.attendances = new Array(this.maxAttendancesAmount).fill(null);
        this.attendancesAmount = 0;
        this.minGradePointAverage = 90;
        this.minAverageAttendance = 0.9;
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getGradePointAverage() {
        if (this.grades.length === 0) {
            return 0;
        }
        const gradesSum = this.grades.reduce((sum, grade) => sum + grade, 0);
        return gradesSum / this.grades.length;
    }


    present() {
        if (this.attendancesAmount < this.maxAttendancesAmount) {
            this.attendances[this.attendancesAmount] = true;
            this.attendancesAmount++;
        } else {
            console.warn("Attendance is full. Cannot mark more than 25 records.");
        }
    }

    absent() {
        if (this.attendancesAmount < this.maxAttendancesAmount) {
            this.attendances[this.attendancesAmount] = false;
            this.attendancesAmount++;
        } else {
            console.warn("Attendance is full. Cannot mark more than 25 records.");
        }
    }

    getAverageAttendance() {
        if (this.attendancesAmount === 0) {
            return 0;
        }
        const visitsAmount = this.attendances.slice(0, this.attendancesAmount).filter(Boolean).length;
        return visitsAmount / this.attendancesAmount;
    }


    summary() {
        let gradePointAverage = this.getGradePointAverage();
        let averageAttendance = this.getAverageAttendance();
        if (gradePointAverage >= this.minGradePointAverage && averageAttendance >= this.minAverageAttendance) {
            return 'Well done!';
        } else if (gradePointAverage >= this.minGradePointAverage || averageAttendance >= this.minAverageAttendance) {
            return 'Normal, but you can do better.';
        } else {
            return 'Rediska';
        }
    }
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


const betty = new Student('Betty', 'Treal', 2000, [90, 100, 70, 80, 100, 100]);
betty.absent();
betty.present();
betty.present();
betty.present();
betty.present();
betty.absent();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();
betty.present();

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