
let coursemarks = 24;
let exammarks = 30;

let finalmarks = coursemarks + exammarks;

//RANGE (0-49 F) (50-59 C) (60-69 B) (70 AND ABOVE A)
//(= 0 Expelled, 1-10, up your game, 11 above,failed) 

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