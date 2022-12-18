function palendromestr(palendrome){
    var reversearr=[];
    for(var i=palendrome.length-1;i=>0;i--){
        reversearr.push(palendrome[i]);
    }
    var palendromestring="";
    for(var i=0;i<palendrome.length;i++){
palendromestring+=reversearr[i];
}

if(palendromestring==palendrome){
    document.getElementById("result").innerHTML="<h1>THIS IS A PALENDROME</h1>";
}
else{
    document.getElementById("result").innerHTML="<h1>THIS IS NOT A PALENDROME</h1>";

}
}