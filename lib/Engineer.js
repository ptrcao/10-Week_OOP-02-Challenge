
import { moduleExpression } from '@babel/types';
import { Employee } from './Employee.js';

// const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(id, name, email, ghUserName){
        super(id, name, email);
        this.ghUserName = ghUserName;
    }
    // getId(){return super.getId();}
    // getName(){return super.getName();}
    // getEmail(){return super.getEmail();}
    getRole(){
        return 'Engineer';
    }
    // https://youtu.be/khuDeNwXkfI

    // https://learn-production.getmimo.com/glossary/javascript/overriding-methods

    getGithub(){
        return this.ghUserName;
    }
}

// module.exports = Engineer;



// var newEngineer = new Engineer(1, 'Tracey', 'bang@gmail.com', 'traceydev')

// console.log(newEngineer.getId())
// console.log(newEngineer.getName())
// console.log(newEngineer.getEmail())
// console.log(newEngineer.getRole())

// console.log(newEngineer.getId())
// newEngineer.getName()
// newEngineer.getEmail()
// newEngineer.getRole()


// console.log(newEngineer.getId())
// console.log(newEngineer.getName())
// console.log(newEngineer.getEmail())
// console.log(newEngineer.getRole())

// export.modules =  Engineer ;
// module.export = Engineer;

export { Engineer };