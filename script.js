function generate(){
    let container=document.getElementById('container');
    let result = document.getElementById('result');
    let button=document.getElementById('btn');
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    const color = 'rgb('+red +"," + green + ","+ blue +')';
    

    container.style.background=color;
    result.innerHTML= color;
    result.style.color= color; 
    button.style.color= color; 
   

     



}