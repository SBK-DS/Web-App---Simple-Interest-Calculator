function Save()
{
    let x = document.getElementById("Rate").value;
    document.getElementById("VC").innerHTML = x;
}


function compute()
{
    let Total_interest;

    p = parseInt(document.getElementById("principal").value);
    i = parseInt(document.getElementById("Rate").value);
    y = parseInt(document.getElementById("years").value);
    cy = parseInt((new Date().getFullYear()));

    if(p<=0)
    {
        alert("Enter positive Number");
    }
    else
    {
        Total_interest = ((i*100)/(p*y)).toFixed(2);

        document.getElementById("Deposit").textContent = p;
        document.getElementById("Interest").textContent = i;
        document.getElementById("Amount").textContent = Total_interest;
        document.getElementById("Year").textContent = y+cy;
        document.getElementById("After").style.display = "block";
    }
}
        