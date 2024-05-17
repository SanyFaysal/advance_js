 /**  ⁡⁣⁣⁢Single-threaded⁡, ⁡⁣⁣⁢N⁡⁣⁣⁢on blocking, asynchronous high level programming language⁡

⁡⁣⁢⁣single-threaded⁡

 Top ​‌‌‌--⁡⁢⁢⁡⁣⁢⁣---⁡⁡--⁡⁣⁢⁣---⁡---⁡⁢⁣⁢----⁡---⁡⁣⁢⁣--⁡--⁡⁣⁢⁣---⁡-​ Bottom


*/

const num = 5 ;
console.log(num);

function show(){
console.log('Hey, I am a function !')
};
show()

function abc(){
    setTimeout(()=>{
        console.log('Hey, I am asynchoronous function')
    }, 3000)
}

abc()

console.log('I am after asynchronous function')

