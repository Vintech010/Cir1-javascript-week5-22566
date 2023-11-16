//1.Nested Function
 //1.1 Outer function
function greet() {
    const name = 'Frank'
    // 1.2 Inner function
    function displayName() {
        // console.log("Hi" + " " +name)
        return "Hi" + " " + name ;
    }
    //Callling inner function
    // displayName()
    return displayName()
}
//Calling outer function
const display = greet()
console.log(display)
document.getElementById("demo").innerHTML = display;