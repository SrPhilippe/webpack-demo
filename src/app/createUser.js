export class User {
    static info = "Register a user"
    static passInfo = {
        minCharacters: 8,
        maxCharacters: 20,
        passLog: "undefined"
    }

    constructor(fName, lName, pass, age) {
        this.fName = fName
        this.lName = lName
        this.pass = pass
        this.age = age
        this.creationDate = new Date()
    }

    set changeName(newName) {
        
    }

    checkPass(password) {

        if (password == this.pass) {
            return passLog = `You should try a different combination. This password matches the current password.`
        } else if (password.length < minCharacters || password.length > maxCharacters) {
            return passLog = `Your password should match the expected criteria. It requires at least ${minCharacters} to the maximum of ${maxCharacters}.`
        } else {
            this.pass = password
            return passLog = `Your password was successfully modified`
        }
    }
}