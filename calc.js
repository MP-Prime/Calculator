

function Add(){
   let x = document.getElementById("number1").value;
   let y = document.getElementById("number2").value;
   let xval = parseInt(x);
   let yval = parseInt(y);
   let res = xval+yval;
   let result = document.querySelector('#result');
   result.textContent = res;
   let paragraph = document.getElementById("resulthistory");
   let text = "\n" + res;
   paragraph.textContent += text;

}

function Subtract(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let xval = parseInt(x);
    let yval = parseInt(y);
    let res = xval-yval;
    let result = document.querySelector('#result');
    result.textContent = res;
    let paragraph = document.getElementById("resulthistory");
    let text = "\n" + res;
    paragraph.textContent += text;

 
 }

 function Multiply(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let xval = parseInt(x);
    let yval = parseInt(y);
    let res = xval*yval;
    let result = document.querySelector('#result');
    result.textContent = res;
    let paragraph = document.getElementById("resulthistory");
    let text = "\n" + res;
    paragraph.textContent += text;
    
 
 }

 function Divide(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let xval = parseInt(x);
    let yval = parseInt(y);
    if(yval != 0){
        let res = xval/yval;
        let result = document.querySelector('#result');
        result.textContent = res;
        let paragraph = document.getElementById("resulthistory");
        let text = "\n" + res;
        paragraph.textContent += text;
    
    } else{
        let res = "Num error: cannot divide by 0";
        let result = document.querySelector('#result');
        result.textContent = res;
        let paragraph = document.getElementById("resulthistory");
        let text = "\n" + res;
        paragraph.textContent += text;
    
    }  
 }

 function ResetV(){
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
 }

 function ResetH(){
    let paragraph = document.getElementById("resulthistory");
    paragraph.textContent = "";
 }

