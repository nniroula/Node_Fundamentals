// import this file in fileB.js

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

module.exports = {
    addFunc: add,
    sub: subtract
}

// in fileB.js use require keyword to import this file