import { Employee } from './Employee.js';

// const Employee = require("./Employee")

class Intern extends Employee{
    constructor(id, name, email, school){
        super(id, name, email);
        this.school = school;
    }



    getRole(){
        return 'Intern';
    }
    // https://learn-production.getmimo.com/glossary/javascript/overriding-methods

    getSchool(){
        return this.school;
    }

}

// module.exports = Engineer;

export { Intern };