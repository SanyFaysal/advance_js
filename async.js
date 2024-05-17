const taskOne = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('task one is completed')
    })
}
const taskTwo = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Task two is completed')
        }, 3000)
    })
}
const taskThree = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Task is  completed')
        }, 2000)
    })
}

console.log(taskOne())
console.log(taskTwo());
console.log(taskThree())