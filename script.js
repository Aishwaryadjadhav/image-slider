const imgs=document.querySelectorAll(".head ul img");

let prebtn=document.querySelector('.pre');
let nextbtn=document.querySelector(".next");

let n=0;

function slide(){
for (let i = 0; i < imgs.length; i++) {
    
    console.log(imgs[i]);
    imgs[i].style.display="none";
}
    imgs[n].style.display="block"
}
slide();

prebtn.addEventListener('click',()=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    slide();
})

nextbtn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    slide();
})