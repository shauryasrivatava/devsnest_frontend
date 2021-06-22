let set=document.querySelector('.lower');
for(let i=0;i<12;i++){
    const newDiv = document.createElement(`div`);
    newDiv.className= 'child';
    set.append(newDiv);
}
let chill=document.querySelector('.child');
chill.forEach(element => {
    element.addEventListener('click',()=>{
        element.classList.toggle()
    })
});
