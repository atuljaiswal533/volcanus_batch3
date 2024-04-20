showresult(choise){
    var n1=parsefloat(document.getElementById('num1').value);
    var n2=parsefloat(document.getElementById('num2').value);
    var r;
    var c=choise;
    
    switch(c)
        {
        case '1':
            r=n1+n2;
            break;
        case '2':
            r=n1-n2;
            break;
        case '3':
            r=n1*n2;
            break;
        case '4': 
            r=n1/n2;
            break;
        case '5':
            r=n2*100/n1;
            break;
        default:
            break;
                
        }
    document.getElementById('result').innerHTML=r;
    
        
    
    }