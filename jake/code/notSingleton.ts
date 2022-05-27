class Authentication {
    static check() { return 3 }
    public FixPasswordToUpperCase(_password: number) {
        const newPassword = _password
            .toString()
            .toUpperCase()
        return newPassword
    }
}

const password: number = 1234
const instance1 = new Authentication()
const instance2 = new Authentication()

console.log(instance1.FixPasswordToUpperCase(password)) // first instance
console.log(instance2.FixPasswordToUpperCase(password)) // second instance
console.log(instance1 === instance2 ? console.log(true) : console.log(false)) // not the same
