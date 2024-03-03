const URL='https://rizzapi.vercel.app/list';
let btn=document.querySelector('.btns');
let content=document.querySelector('.lines');
const num = prompt("Enter the no from 1 to 20 in your list");
 line=parseInt(num) - 1;
 console.log(line);
// let flitylines = 
(async()=>{
    let respone = await fetch(URL);
    console.log("loading the lines....");
    const data = await respone.json();
    console.log(data);
    content.innerHTML=  data[line].text;
}
)();
