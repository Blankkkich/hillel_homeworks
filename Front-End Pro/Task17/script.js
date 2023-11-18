class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(undefined);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    estimate(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
            console.log(`Grade ${grade} added for ${this.firstName} ${this.lastName}`);
        } else {
            console.log("Invalid grade. Grade should be between 0 and 100.");
        }
    }

    present() {
        this.updateAttendance(true);
        console.log(`${this.firstName} ${this.lastName} is present.`);
    }

    absent() {
        this.updateAttendance(false);
        console.log(`${this.firstName} ${this.lastName} is absent.`);
    }

    updateAttendance(status) {
        if (this.attendance.length < 25) {
            this.attendance.push(status);
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRatio = this.attendance.filter(Boolean).length / this.attendance.length;

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Good!";
        } else if (averageGrade > 70 || attendanceRatio > 0.7) {
            return "Still good, but you can do this much better!";
        } else {
            return "Radish!";
        }
    }
}


const student1 = new Student("Ivan", "Petrov", 1998);
const student2 = new Student("Mariya", "Ivanova", 1999);
const student3 = new Student("Alexander", "Sidorov", 2000);

student1.estimate(95);
student1.present();
student1.absent();
student1.estimate(80);

console.log(student1.summary());

student2.estimate(75);
student2.present();
student2.present();
student2.present();
student2.estimate(85);

console.log(student2.summary());

student3.estimate(60);
student3.absent();
student3.present();
student3.estimate(70);

console.log(student3.summary());