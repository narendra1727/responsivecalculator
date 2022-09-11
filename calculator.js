var b="";
function calculate(a){
    b +=a;
    document.getElementById("input1").innerHTML = b;
}

function clr(){
    document.getElementById("input1").innerHTML= "0";
    b=""
}

function display(){
    let x=document.getElementById("input1").innerHTML;
    console.log(x,typeof(x))
    let y=eval(x);
    document.getElementById("input1").innerHTML=y;
    b="";
}

function last(){ 
    let f=document.getElementById("input1").innerHTML; 
    console.log(f)
    if(f.length>1){
        console.log(b)
        f= f.slice(0,(f.length)-1)
        console.log(f)
        document.getElementById("input1").innerHTML =(f);
        b=f;
    }
    else{
        document.getElementById("input1").innerHTML =0;
        b="";
    }
}