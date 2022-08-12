const person = {
    "firstName" : "Josh",
    "lastName" : "Seipel",
    "x1" : 1,
    "x2" : false,
    "interests" : ["coding", "drawing", "skateboarding", "cooking"],
    "courses" : [
        {
            "name" : "HTML",
            "length" : 15
        },
        {
            "name" : "CSS",
            "length" : 25
        },
        {
            "name" : "JavaScript",
            "length" : 35
        }
    ]
}

const courses = person["courses"]

courses.forEach((course, index) => {
    // console.log(course)
})

for(const prop in person) {
    // console.log(prop)
}

const keys = Object.keys(person)
// console.log("Keys =", keys)

keys.forEach((key)=>{
    // console.log(person[key])
})

const vals = Object.values(person)
// console.log("========= vals =======", vals)

const entries = Object.entries(person)
// console.log("========= entries =======", entries)

for(const arr of entries) {
    // console.log(arr[0])
    // console.log(arr[1])
}

 


