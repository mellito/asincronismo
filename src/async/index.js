const doSomethingAsync = () =>{
return new Promise((resolve,reject) =>{
(true) 
? setTimeout(() =>resolve('do something Async'), 3000)
: reject(new Error('test Error'))
});
}

const doSomething = async () => {
const something = await doSomethingAsync();
console.log(something);
};

console.log('before');
doSomething();
console.log('after');

const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }
    catch{
        console.log(Error);
    }
}
console.log('before1');
anotherFunction();
console.log('after1');