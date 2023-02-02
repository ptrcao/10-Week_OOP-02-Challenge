import { Employee } from './Employee.js';

// const Employee = require("./Employee")

class Manager extends Employee{
    constructor(id, name, email, office){
        super(id, name, email);
        this.office = office;
    }



    getRole(){
        return 'Manager';
    }
    // https://learn-production.getmimo.com/glossary/javascript/overriding-methods

    getOffice(){
        return this.office;
    }

}

// module.exports = Engineer;

export { Manager };