var bg = document.getElementById('forcolor');
var suntonight = document.getElementById('night'); 
var nighttosun = document.getElementById('sun'); 

// second
var openn = document.getElementById('open');
var closee = document.getElementById('close');
var navtogglee = document.getElementById('responsenav');

//chanenavresponsive

openn.addEventListener("click",chagetoshow);

function chagetoshow() {
    navtogglee.style.display = 'block';
    openn.style.display = 'none';
    closee.style.display = 'block';
}

closee.addEventListener("click",chagetoclose);

function chagetoclose() {
    navtogglee.style.display = 'none';
    closee.style.display = 'none';
    openn.style.display = 'block';
}


//darktomoon  #873939
nighttosun.addEventListener("click" , changeTosun);

function changeTosun() {
    bg.style.backgroundColor = '#ea0000';
    suntonight.style.display = 'flex';
    nighttosun.style.display = 'none';
}

suntonight.addEventListener("click" , changeTonight);

function changeTonight() {
    bg.style.backgroundColor = '#eee';
    nighttosun.style.display = 'block';
    suntonight.style.display = 'none';
}