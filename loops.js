//loops

let x =0;
while(x<=10) {console.log(x);
    if (x ==5 || x == 6){
        x++;
        console.log(x);
        continue;
    }

    x++;
    x=x+1;
    
}

//for loop


for(let mynumber = 0; mynumber<=10; mynumber++){
    if(mynumber % 2!==0){
    console.log(mynumber);
}
}

for(let mynumber = 0; mynumber<=10; mynumber++){
    if(mynumber % 2==0){
    console.log(mynumber);
}
}

