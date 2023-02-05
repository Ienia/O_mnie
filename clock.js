function count_up()
{
    var today = new Date();
    //zmienna today <- nowy obiekt klasy Date
    var hours = today.getHours();
    if(hours < 10) hours = "0"+hours;
    var minutes = today.getMinutes();
    if(minutes < 10) minutes = "0"+minutes;
    var seconds = today.getSeconds(); 
    if(seconds < 10) seconds = "0"+seconds;
    
    document.getElementById("Clock").innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout("count_up()", 1000);
}