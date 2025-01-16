// immediately invoke function execution (IIFE)

// normal function
function chai(){
    console.log("connected to DB");
    
}
chai();

// iife named iife
(function chai(){
    console.log("connected to DB Two")
})();


