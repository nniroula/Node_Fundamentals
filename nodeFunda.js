// Promise, the .then and .catch functions

// Async and syncronouse(in order execution) codes

// Async fucntions are built on top of the promise

/*
console.log("This prinst first");
setTimeout(function(){
    console.log("This prints third, one second later")
}, 1000);
console.log("This prints second")
*/

/*
// Axios is a promise based library
let url = "https://swapi.co/api/planets/1/"
// let url = "https://github.com/monsur/test-cors.org." 
let firstpromise = axios.get(url)
console.log(firstpromise)    
console.log("This is after axios.get call in code base")
*/
/*
function getData(){
    const response = axios.get("https://swapi.co/planets/")
    console.log("This is after axios.get ")
}
*/

// Async Await

// axios.get
/*
async function getUsers(){
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res);
}
getUsers();
*/

// axios.post
/*
async function createUser(){
    // const res = await axios.post('https://reqres.in/api/users');  // No data is passed yet
    // to send data, follow instructions of that api for data
    const res = await axios.post('https://reqres.in/api/users', {username: "ButterTheChicken", email: "butters@gmail.com", age: 1});  // No data is passed yet

    console.log(res);
    
}
createUser();
*/

// Making your own promise, use new keyword

/*
function wait3seconds(){
    return new Promise((resolve, reject) => {
        //resolve()  // if we do this the .then code runs
        //reject()  // this needs .catch() function
        // make async going on
        // setTimeout(resolve, 3000)  //this makes promise wait 3 seconds and then runs .then function
        setTimeout(reject, 3000)  //this makes promise wait 3 seconds and then runs .catch() function

    })

}
wait3seconds().then(() => console.log("All done"))  // To do this, we have to call promise in our functioin body
                .catch(() => console.log("ERROR"))

console.log("This runs first, Still waiting for pending promise") // this runs first while it is waiting for pending promise to a value

*/
// to make color changes each second
// const small = document.querySelector('small');
// setTimeout(function(){   // after one second this turns html file content into red
//     small.style.color = 'red'
// }, 1000)

// to get different color after that one second, you have nest small inside setTimeout function
// const small = document.querySelector('small');
// setTimeout(function(){   // after one second this turns html file content into red
//     small.style.color = 'red'
//     setTimeout(() => {
//         small.style.color = 'orange'  // this turns into orange after red
//         setTimeout(() => {
//             small.style.color = 'green'  // this turns into green after orange
//         }, 1000)
//     }, 1000)
// }, 1000)


// do this in promise
const small = document.querySelector('small');
function changeColor(element, color){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.style.color = color;
            resolve()
        }, 1000)
    })
}
// changeColor(small, 'teal')  // no the .then function used here
// now use the .then function becasue it will give you the way to know if the code after the last line executes
// underneath is Promise chaining
changeColor(small, 'red') 
    .then(() =>  changeColor(small, 'orange'))
    .then(() =>  changeColor(small, 'yellow'))
    .then(() =>  changeColor(small, 'green'))
    .then(() =>  changeColor(small, 'blue'))
    .then(() =>  changeColor(small, 'indigo'))
    .then(() =>  changeColor(small, 'violet'))
   



