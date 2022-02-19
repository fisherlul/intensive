// Câu 1
let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
]
// câu a
let findAge = prompt("Độ tuổi cần tìm?: ")   
var age = student.filter(function(person){
    if(person.age == findAge){
        return person.name
    }
    if(person.age =! findAge){
        console.log("Không tìm thấy!")
    }
});

console.log(age)

// câu b
let course = prompt("Khóa học cần tìm?: ")
let result = []
for(let i = 0; i < student.length; i++){
    for(let j = 0; j < student[i].course.length; j++){
        if(course == student[i].course[j]){
            let name = student[i].name

            result.push(name)
        }
    }
}

console.log(result)
// Câu 2
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

// câu a
let result1 = arr1.filter(number => number>3)
console.log(result1);

let result2 = arr2.filter(number => number>3)
console.log(result2);

// câu b + c
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr3.sort();
console.log(arr3);