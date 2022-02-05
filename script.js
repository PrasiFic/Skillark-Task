function Add()
    {
        var value1=document.getElementById("first").value;
        var value2=document.getElementById("second").value;
        if(value1=="" && value2=="" || value1=="" || value2=="" )
        {
            alert("*Please fill all the fields!");
        }
        else
        {
            var sum=parseInt(value1)+parseInt(value2);
            alert("Addition is : "+ sum);
        }
    }
function Sub()
    {
        var value1=document.getElementById("first").value;
        var value2=document.getElementById("second").value;
        if(value1=="" && value2=="" || value1=="" || value2=="" )
        {
            alert("*Please fill all the fields!");
        }
        else
        {
            var result=parseInt(value1)-parseInt(value2);
            alert("Subtraction is : "+ result);
        }
    }
function Mul()
    { 
        var value1=document.getElementById("first").value;
        var value2=document.getElementById("second").value;
        if(value1=="" && value2=="" || value1=="" || value2=="" )
        {
            alert("*Please fill all the fields!");
        }
        else
        {
            var result=parseInt(value1)*parseInt(value2);
            alert("Multiplication is : "+ result);
        }
    }
function Div()
    {
        var value1=document.getElementById("first").value;
        var value2=document.getElementById("second").value;
        if(value1=="" && value2=="" || value1=="" || value2=="" )
        {
            alert("*Please fill all the fields!");
        }
        else
        {
            var result=parseInt(value1)/parseInt(value2);
            alert("Division is : "+ result);
        }
    }
