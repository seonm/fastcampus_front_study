

// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }

// User.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

class User{
    constructor(first, last){
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`   
    }
}

const heropy = new User('heropy', 'park')
const amy = new User('amy', 'joo')

console.log(heropy.getFullName())
console.log(amy)