const person = {

    name :'superman',
    gmail:'superman34@gamil.com',
    age:350,
    salary:5,
    name :'spiderman',
    panCard:55464666,
    pincode :466664666
}

const person2 = {

    name :'batman',
    gmail:'superman34@gamil.com',
    age:350,
    salary:5,
    name :'spiderman',
    panCard:55464666,
    pincode :466664666
}
const person2 ={ ...person, name:'batman',gamil :'batman34@gmail.com',phone :'546446464646'}
// console.log("this is person details",person)

const {name ,age, phone,salary} = person2
        console.log("this is  details person2",age,phone,salary);
