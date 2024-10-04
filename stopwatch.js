//Variables : 
let sec = 0 ;
let min = 50;
let hour = 7;
let lapcount = 0 ;
let timer = null ;
let start_status = 0 ;
let check_again = 1;
let new_ul = document.createElement("ul") ;

//Extraction of data : 
let display    = document.getElementById("display") ;
let lapdisplay = document.getElementById("lap_display") ;
let start_stop_button =document.getElementById("start") ;

lapdisplay.appendChild(new_ul) ;

//Functions : 
function showdata(){
    if (hour==24)
    {sec-- ;
        clearInterval(timer)}
    sec++ ;
    if(sec==60)
    {   sec= 0;
        min++;
        if(min==60){
            min = 0;
            hour++;
        }
    }
    let h = hour<10?"0"+hour : hour
    let m = min<10?"0"+min : min
    let s = sec<10?"0"+sec : sec
    display.innerHTML = h+" : "+m+" : "+s ;
}
function stop_stopwatch(){
    start_status = 0;
    if(start_status==0){start_stop_button.innerHTML = "Start" ;}
    else if(start_status==1){start_stop_button.innerHTML = "Stop" ;}
    
    clearInterval(timer) ;
}
function start_watch(){
    check_again++ ;
    if(check_again%2==0)
    {
        start_status = 1;
        if(start_status==0){start_stop_button.innerHTML = "Start" ;}
        else if(start_status==1){start_stop_button.innerHTML = "Stop" ;}
        timer = setInterval(showdata,20);
    }
    else{stop_stopwatch() ;}
}
function make_lap(){
    lapcount++; 
    let newlap = document.createElement("li") ;
    newlap.setAttribute("id",lapcount) ;
    newlap.setAttribute("class","nanum-pen-script-regular") ;
    newlap.style.fontSize = "300%" ;
    newlap.style.listStyleType = "decimal" ;
    let h = hour<10?"0"+hour : hour
    let m = min<10?"0"+min : min
    let s = sec<10?"0"+sec : sec
    newlap.innerHTML = (h+":"+m+":"+s) ;
    newlap.innerHTML = "Lap " + lapcount + " " + h + ":" + m + ":" + s;
    new_ul.appendChild(newlap) ;
}
function reset(){
    hour = 0;
    min=0;
    sec = 0 ;
    stop_stopwatch() ;
    new_ul.remove() ;
    let h = hour<10?"0"+hour : hour
    let m = min<10?"0"+min : min
    let s = sec<10?"0"+sec : sec
    display.innerHTML = h+":"+m+":"+s ;
}