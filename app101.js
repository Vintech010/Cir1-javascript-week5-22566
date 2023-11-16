//1.Nested Function
 //1.1 Outer function
function greeting(name){
    //1.2 Inner function
    function message() {
        console.log("Hi" + " " + name);
        document.getElementById("demo").innerHTML = "Hi" + " " + name;
    }
    //Calling inner function message()
    return message();
}
//Call Outer function greeting()
// const display = greeting("Mark")
greeting("Mark");
//console.log(display);
// display();