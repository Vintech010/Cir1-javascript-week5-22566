//5.First class function
//1.Assign a function
const display = () => {
    return function(){
       return "Hi"
    }
};
const d1 = display()()
console.log(d1)

const greeting = (callback, name) => {
    console.log(callback()() + " " + name);
};
//Calling variable
greeting(display,"Mark");;