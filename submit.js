function submit()
{
    var fn = document.getElementById("fn").value;

    if(fn == "" ||fn <= 0)
    {
        alert("Enter Frist Name");
        document.getElementById("fn").focus();
        return;
    }
    var ln = document.getElementById("ln").value;

    if(ln == "" ||ln <= 0)
    {
        alert("Enter Last Name");
        document.getElementById("ln").focus();
        return;
    }
     var ftn = document.getElementById("ftn").value;

    if(ftn == "" ||ftn <= 0)
    {
        alert("Enter Correct Name");
        document.getElementById("ftn").focus();
        return;
    }
    var mtn = document.getElementById("mtn").value;

    if(mtn == "" ||ftn <= 0)
    {
        alert("Enter Correct Name");
        document.getElementById("mtn").focus();
        return;
    }
    var aadno = document.getElementById("aadno").value;

    if(aadno == "" ||aadno <= 0)
    {
        alert("Enter Correct Number");
        document.getElementById("aadno").focus();
        return;
    }
    var phno = document.getElementById("phno").value;

    if(phno == "" ||phno <= 0)
    {
        alert("Enter Correct Number");
        document.getElementById("phno").focus();
        return;
    }

    var course = document.getElementById("course").value;

    if(course == "" ||course <= 0)
    {
        alert("Enter Course Detalis");
        document.getElementById("course").focus();
        return;
    }
    var first = fn;
    var second = ln;
    var third = ftn;
    var fourth = mtn;
    var fifth = aadno;
    var sixth = phno; 
    var seven = course;   
    
    // var resultDisplay = document.getElementById("result");
    // resultDisplay.innerHTML =  first+second+third+fourth+fifth+sixth+seven ;
    
    var a = [];
    a.push(first,second,third,fourth,fifth,sixth,seven);
    console.log(a);
}