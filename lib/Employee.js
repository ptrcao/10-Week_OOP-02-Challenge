class Employee{
    constructor(id, name, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

// module.exports = Employee;


// Exporting variables and functions
export { Employee };