var obj = new XMLHttpRequest();
obj.onreadystatechange = function()
{
    if(this.readyState ==4 && this.status ==200)
    {
        document.getElementsByClassName("Seinen").innerHTML=this.responseText;
    }
}
obj.open("post", "Seinen.html", true);
obj.send();

