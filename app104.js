//4.Pure Function
//2.b is Side effect
const b = 5;
function addPure(a,b) {
    return a + b
}

//Calling function
const total = addPure(10,20)
console.log(total)