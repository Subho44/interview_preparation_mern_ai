let name = "kunal"; //global scope

function x() {
    let msg = "hi";//local scope
    console.log(msg+ " " + name);
}
if(true) {
    let city = "kolkata"; //block scope
    console.log(city);
}
else {
    console.log("no city");
}
x();

