
// a = 10;
// b = 5;
// c = a/b;
// console.log(c);

try{
    let a = 10;
    let b = "John";
    // console.log(typeof b);
    if (b == 0)throw new Error("You cannot divide by zero,,");
    if(typeof b == "string") throw new Error ("Entry is not a number");
    // let c = a/b;
    console.log(a/b);
} catch(Error){
    console.log(Error.message);
}finally{
    console.log("Attend to divide processed...")
}
