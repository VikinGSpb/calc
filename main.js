/*function f1(){
    alert('Вы нажали кнопку!');
}

function f2(){
    alert('Это кот!');
}*/

/*function pow2(){
    var num1 = document.getElementById('inp1').value;
    alert(i*i);
}*/

/*function plus(){
    var num1 = document.getElementById('inp1').value;
    var num2 = document.getElementById('inp2').value;
    alert(num1 + ' + ' + num2 + ' = ' + (+num1 + +num2) );
}

function min(){
    var num1 = document.getElementById('inp1').value;
    var num2 = document.getElementById('inp2').value;
    alert(num1 + ' - ' + num2 + ' = ' + (num1 - num2) );
}

function mult(){
    var num1 = document.getElementById('inp1').value;
    var num2 = document.getElementById('inp2').value;
    alert(num1 + ' * ' + num2 + ' = ' + (num1 * num2) );
}

function div(){
    var num1 = document.getElementById('inp1').value;
    var num2 = document.getElementById('inp2').value;
    alert(num1 + ' / ' + num2 + ' = ' + (num1 / num2) );
}*/

document.getElementById('inp2').value=0;

function clearc(){
    document.getElementById('inp2').value=0;
    document.getElementById('inp1').value="";
}

function plmn(){
    if(document.getElementById('inp2').value!=0){
        if(parseInt(document.getElementById('inp2').value)>0){
            document.getElementById('inp2').value='-' + document.getElementById('inp2').value;
        } else {
            document.getElementById('inp2').value=Math.abs(document.getElementById('inp2').value);
        }
    }
}

function point(){
    var ln=document.getElementById('inp2').value.length;
    var logic=true;
    for(var i=0;i<ln;i++){
        if(document.getElementById('inp2').value[i]==='.'){
            logic=false;
            break;
        } 
    }
    if(logic==true) document.getElementById('inp2').value+=".";
}

function sqrtc(){
    if(document.getElementById('inp2').value<0) {
        document.getElementById('inp1').value = "sqrt(" + document.getElementById('inp2').value + ")";
        document.getElementById('inp2').value = "Недопустимо";
    } else {
        document.getElementById('inp1').value = "sqrt(" + document.getElementById('inp2').value + ")";
        document.getElementById('inp2').value = Math.sqrt(document.getElementById('inp2').value);
    }
}

function rec(){
    if(document.getElementById('inp2').value==0){
        document.getElementById('inp1').value = "reciproc(" + document.getElementById('inp2').value + ")";
        document.getElementById('inp2').value = "Недопустимо";
    } else {
        document.getElementById('inp1').value = "reciproc(" + document.getElementById('inp2').value + ")";
        document.getElementById('inp2').value = 1/(document.getElementById('inp2').value);
    }
}

function plus(){
    if(document.getElementById('inp1').value === ""){
        document.getElementById('inp1').value = document.getElementById('inp2').value;
        document.getElementById('inp3').innerHTML='+';
        document.getElementById('inp2').value=0;
    } else {
        document.getElementById('inp2').value = +document.getElementById('inp2').value + +document.getElementById('inp1').value;
        document.getElementById('inp1').value="";
        document.getElementById('inp3').innerHTML = "";
    }
}

function min(){
    if(document.getElementById('inp1').value === ""){
        document.getElementById('inp1').value = document.getElementById('inp2').value ; 
        document.getElementById('inp3').innerHTML='-';
        document.getElementById('inp2').value=0;
    } else { 
            document.getElementById('inp2').value = document.getElementById('inp1').value - document.getElementById('inp2').value;
            document.getElementById('inp1').value = "";
            document.getElementById('inp3').innerHTML = "";
    }
}

function mult(){
    if(document.getElementById('inp1').value === ""){
        document.getElementById('inp1').value = document.getElementById('inp2').value;
        document.getElementById('inp3').innerHTML='*';
        document.getElementById('inp2').value=0;
    } else {
            document.getElementById('inp2').value = document.getElementById('inp1').value * document.getElementById('inp2').value;
            document.getElementById('inp1').value = "";
            document.getElementById('inp3').innerHTML = "";
    }
}

function dev(){
    if(document.getElementById('inp1').value === ""){
        document.getElementById('inp1').value = document.getElementById('inp2').value ;
        document.getElementById('inp3').innerHTML='/';
        document.getElementById('inp2').value=0;
    } else {
        if(document.getElementById('inp2').value==0){
            document.getElementById('inp1').value += "/0" ;
            document.getElementById('inp2').value = "Недопустимо";
            document.getElementById('inp3').innerHTML = "";
        } else {
            document.getElementById('inp2').value = document.getElementById('inp1').value / document.getElementById('inp2').value;
            document.getElementById('inp1').value = "";
            document.getElementById('inp3').innerHTML = "";
        }
    }
}

function equal(){
    if(document.getElementById('inp1').value!==""){
        switch(document.getElementById('inp3').innerHTML){
            case '+': document.getElementById('inp2').value = +document.getElementById('inp1').value + +document.getElementById('inp2').value; break;
            case '-': document.getElementById('inp2').value = document.getElementById('inp1').value - document.getElementById('inp2').value; break;
            case '*': document.getElementById('inp2').value = document.getElementById('inp1').value * document.getElementById('inp2').value; break;
            case '/': 
                if(document.getElementById('inp2').value==0){
                    document.getElementById('inp1').value += "/0" ;
                    document.getElementById('inp2').value = "Недопустимо";
                    document.getElementById('inp3').innerHTML = "";
                    break;
                } else {
                    document.getElementById('inp2').value = document.getElementById('inp1').value / document.getElementById('inp2').value; 
                    break;
                }
        }
    }
    if (document.getElementById('inp2').value != "Недопустимо") {
        document.getElementById('inp1').value="";
    }
    document.getElementById('inp3').innerHTML = "";
}

function type0(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num0').innerHTML;
}

function type1(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num1').innerHTML;
}

function type2(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num2').innerHTML;
}

function type3(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num3').innerHTML;
}

function type4(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num4').innerHTML;
}

function type5(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num5').innerHTML;
}

function type6(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num6').innerHTML;
}

function type7(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num7').innerHTML;
}

function type8(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num8').innerHTML;
}

function type9(){
    if(document.getElementById('inp2').value==="0") document.getElementById('inp2').value="";
    document.getElementById('inp2').value+=document.getElementById('num9').innerHTML;
}