const URL='https://rizzapi.vercel.app/list';
let btn=document.querySelector('.btns');
let content=document.querySelector('.lines');
let next=document.querySelector('.next');

 var line = 0;
console.log(typeof(line));
setTimeout(()=>{
    const num = prompt("Enter the no from 1 to 20 in your list");
 line=parseInt(num) - 1;
 console.log(line);
},2000)

let flitylines = async()=>{
    let respone = await fetch(URL);
    console.log("loading the lines....");
    const data = await respone.json();
    console.log(data);
    content.innerHTML= data[line].text;
   
}

btn.addEventListener('click',flitylines);
