class Employee {
    employoneeName = ""

    setEmployeeName(str:string) {
        this.employoneeName = str
    }

    getEmployoneeName() {
        return this.employoneeName
    }
}

const employee1 = new Employee ()
employee1.setEmployeeName("Andi")

console.log(employee1.getEmployoneeName())