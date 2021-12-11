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
async function createUser(){
    // const res = await axios.post('https://reqres.in/api/users');  // No data is passed yet
    // to send data, follow instructions of that api for data
    const res = await axios.post('https://reqres.in/api/users', {username: "ButterTheChicken", email: "butters@gmail.com", age: 1});  // No data is passed yet

    console.log(res);
    
}
createUser();
