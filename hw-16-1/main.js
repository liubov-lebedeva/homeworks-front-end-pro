class Student {
    constructor(firstName, lastName, birthYear, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.maxAttendancesAmount = 25;
        this.attendances = new Array(this.maxAttendancesAmount);
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
        let gradesSum = 0;
        let gradeIndex = 0;
        while (gradeIndex <= this.grades.length - 1) {
            gradesSum += this.grades[gradeIndex];
            gradeIndex++;
        }
        return gradesSum / this.grades.length;
    }

    present() {
        if (this.attendancesAmount < this.maxAttendancesAmount) {
            this.attendances[this.attendancesAmount] = true;
            this.attendancesAmount++;
        }
    }

    absent() {
        if (this.attendancesAmount < this.maxAttendancesAmount) {
            this.attendances[this.attendancesAmount] = false;
            this.attendancesAmount++;
        }
    }

    getAverageAttendance() {
        let visitsAmount = 0;
        for (let visitIndex = 0; visitIndex < this.attendancesAmount; visitIndex++) {
            if (this.attendances[visitIndex]) {
                visitsAmount++;
            }
        }
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

console.log(john.getAge());
console.log(john.getGradePointAverage());
console.log(john.getAverageAttendance());
console.log(john.summary());


const betty = new Student('Betty', 'Treal', 2000, [90, 100, 70, 80, 100, 100]);
betty.absent();
betty.present();

console.log(betty);

console.log(betty.getAge());
console.log(betty.getGradePointAverage());
console.log(betty.getAverageAttendance());
console.log(betty.summary());