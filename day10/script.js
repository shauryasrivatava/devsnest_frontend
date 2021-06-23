let doublearr=["A", "B", "C", "D", "E", "F","A", "B", "C", "D", "E", "F"];


randomm =(item)=>{
    return Math.floor(Math.random()*item.length)
}
    
let set=document.querySelector('.lower');
for(let i=0;i<12;i++){
    const newDiv = document.createElement(`div`);
    newDiv.className= 'child';
    newDiv.classId= i;
    newDiv.style.height="250px";
    newDiv.style.h1=i;
    newDiv.style.width="250px";
    newDiv.style.margin="10px";
    newDiv.innerHTML=doublearr[randomm(doublearr)];
    newDiv.style.backgroundColor= "black";
    set.append(newDiv);
}
let first;
let second;
let count=0;
let correct=0;
let chill=document.querySelectorAll('.child');
chill.forEach(element => {
    element.addEventListener('click',()=>{
        element.classList.add("unhide");
        count++;
        moves.innerHTML=count;
        if(count%2!=0){
            first=element;
        }else{
            if(first.innerHTML!=element.innerHTML){
                first.classList.remove("unhide");
                element.classList.remove("unhide");
                console.log("NO");
            }
            else{
                correct++;
                console.log("correct");
            }
        }
        correc.innerHTML=correct;
    })
});
