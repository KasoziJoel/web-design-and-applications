


function addmarks(coursemarks, exammarks, percentageofattendance){
    return ((coursemarks + exammarks)*percentageofattendance);
}
let finalmarks=(addmarks(40, 50, 2));
console.log(finalmarks);

if (finalmarks <= 49){
   if (finalmarks == 0) {
    console.log("You should b expelled");}
    else if (0 < finalmarks <= 10){
    console.log("Up your game");}

}

else if(50 <=finalmarks<=59){
    console.log("Grade C");
}

else if(60 <= finalmarks<=69){
    console.log("Grade B");
}

else{console.log("Grade A");

}

