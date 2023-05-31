const obrazy1=['photos/tort1.jpg', 'photos/tort2.jpg', 'photos/tort3.jpg'];
const obrazy2=['photos/cukierki.jpg', 'photos/lizaki.jpg', 'photos/lizaki2.jpg'];
let i=0;
let obraz;
function lewo1(){ 
    if(i>=1)
    {        
        i--;  
        obraz=obrazy1[i];
    }
    else    
    {
        i=obrazy1.length-1;
        obraz=obrazy1[i]; 
    }
    document.getElementById('fota1').src=obraz;
}
function prawo1(){
        if(i<obrazy1.length-1)
        {
            i++;
            obraz=obrazy1[i];

        }
        else    
        {
            i=0;
            obraz=obrazy1[i];
        }
        document.getElementById('fota1').src=obraz;
}
function lewo2(){ 
    if(i>=1)
    {        
        i--;  
        obraz=obrazy2[i];
    }
    else    
    {
        i=obrazy2.length-1;
        obraz=obrazy2[i]; 
    }
    document.getElementById('fota2').src=obraz;
}
function prawo2(){
        if(i<obrazy1.length-1)
        {
            i++;
            obraz=obrazy2[i];

        }
        else    
        {
            i=0;
            obraz=obrazy2[i];
        }
        document.getElementById('fota2').src=obraz;
}
$(document).ready(function(){
    $("#guzik").click(function(){
        alert('Zamówienie przesłane do realizacji');
    });
});
var licznik = 0;
function pobierz (NaszPlik, divID){
    var req = createReq();
    req.open("GET", NaszPlik, true);
    req.onreadystatechange = function(){
    if(req.readyState==4 && req.status==200){
    if (licznik>=3){
    licznik=0;
    document.getElementById(divID).innerHTML = "";
    } else {
    licznik ++;
    document.getElementById(divID).innerHTML += "Otwarcie numer:"+licznik+" Nasz plik: "+req.responseText+"<br/>";
}
}
}
req.send(null);
}
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("file").innerHTML = this.responseText;
    }
    xhttp.open("GET", "wiadomosc.txt", true);
    xhttp.send();
}