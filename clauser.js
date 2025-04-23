
// create a program that returns the incremented value every time we invoke it.
const parent  = ()=>{

    let count = 0
    return chaild =()=>{
        count = count + 1;
        console.log(count);
    }


}

const increment = parent();
increment()