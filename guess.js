var guess=1; 


document.getElementById('b'),addEventListener('click',function(){
    var y= Math.floor(Math.random()*6);
    var x=document.getElementById('num').innerText;
  
    if(x==y){
        document.getElementById('result').innerText="correct in" + guess+'  ' +'tries';
      
    }
    else if(x>y){
        guess++;
        document.getElementById('result').innerText="select a smaller no";
    }
    else{
        guess++;
        document.getElementById('result').innerText="select a greater no";
    }
});