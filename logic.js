
const srch=document.querySelector('#search');
const btn=document.querySelector('#btn');
const para=document.querySelector("#para");


const callback=()=>{
    para.innerHTML=srch.value
}



btn.addEventListener('click',callback);