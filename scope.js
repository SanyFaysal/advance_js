// const name = 'Alex';

let number = 5;

function show(){
 number = 3
    function innner(){
        const name = 'Jhon';  
        console.log(name, number)
    }
    innner()
}

show()

console.log(number)

