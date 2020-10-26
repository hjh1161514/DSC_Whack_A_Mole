// destructuring
const user={
    info:{
        name:'hwajin',
        age:22,
        gender:'female'
    }
}

// es5
const name = user.info.name
const age = user.info.age
const gender = user.info.gender

// es6
const {name, age, gender} = user.info


// object initialize
const age = 2
const name = "화진"
const gender = "female"

//es5
var datas={
    name: name,
    age: age,
    gender:gender
}

//es6
var datas = {
    name,
    age,
    gender
}

//template literals : 변수와 string을 쓸 때 
introduce = "my name is " + name + ". I am " + age + "years old"
introduce = 'my name is ${name}. I am ${age} years old'
console.log(introduce)