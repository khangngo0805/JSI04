const student = {
    name: "hff",
}

student.age ="9"
console.log(student)

const log1 = (name,age) => {
    console.log("ten"+ name + "tuoi"+ age);
}
log1("nam",12)

const log2 = (name2,age2) => {
    console.log(`Ten: ${name2}, tuoi: ${age2}`);
}
log2("nam",12)

const sum = (a,b) => a+b;
const result = sum(4,6);
console.log(result)

const arr1 = [1,2,3];
const arr2 = [...arr1];

console.log(arr2)

const obj1 = {
    name: "a",
    age: "34"
};



const obj2 ={
    ...obj1
}
console.log(obj2)

const arr3 = [1,2,3,4,5];
arr3.forEach(Item => {
    console.log(Item);
    
});