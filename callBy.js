// primitive - String, number, boolean, undefined, null
// non primitive - Object, array, function

let a = 5;
const nums =[1,2,3,4]

function show(number){
    number = number + 1;
    console.log(number)
}

function show1(numbers){
 numbers.push(5)

 console.log(numbers)
}

show1(nums);
console.log(nums)
