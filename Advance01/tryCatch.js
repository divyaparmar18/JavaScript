const convertToRs = (dollar)=>{
    if(typeof(dollar) === 'number'){
        return dollar * 64
    }else{
        throw Error('amount need to be in number')}}
try {
    const myValue = convertToRs('dvjbkh');
    console.log(myValue);
} catch (error) {
    console.log(error)
}

console.log('I will not run if the program crashes')


