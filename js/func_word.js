

for (i = 0; i < objPeople.length; i++) {
if (localStorage.valid_user == objPeople[i].locationList) {
document.getElementById('chead').innerHTML = chead;
document.getElementById('root').innerHTML = cTemplate;
document.getElementById('nav').innerHTML = cNav;

var c_ac1 = "a";
var c_ac = "a active";
var c_ac2 = "logo active";
var c_ac3 = "logo";


var c_x1 = document.getElementById('logo');
var c_x2 = document.getElementById('home');
var c_x3 = document.getElementById('news');
var c_x4 = document.getElementById('contact');
var c_x5 = document.getElementById('about');
var c_x6 = document.getElementById('dictionary');

function c_Cool(){

c_x1.className = c_ac3;
c_x2.className = c_ac1;
c_x3.className = c_ac1;
c_x4.className = c_ac1;
c_x5.className = c_ac1;
c_x6.className = c_ac1;
}
var vvv = [b1,b2,b3,b4,b5];
var vvv1 = [a1a,a2a,a3a,a4a,a5a];

if(localStorage.pagBtns0 == 0){
c_homeLogo();c_home();ccvv1();
}else if(localStorage.pagBtns0 == 1){
c_news();ccvv1();
}else if(localStorage.pagBtns0 == 3){
c_contact();ccvv1();
}else if(localStorage.pagBtns0 == 4){
c_about();ccvv1();
}else if(localStorage.pagBtns0 == 2){
c_dictionary();ccvv1();
}else{}

function ccvv1(){
var zer0 = localStorage.pagBtns0;
var d = localStorage.pagBtns0;
var z = parseInt(d);
var v1 = document.getElementById('center');
v1.innerHTML = vvv1[z]+"<br>"+vvv[z];
if(z == 2){funcDic1();}else{}
var c = document.getElementById('numPage');
c.innerHTML = 'Page('+z+') ['+vvv1[z]+']';
var t = document.getElementById('title');
t.innerHTML = "Cooltebza | "+vvv1[z];
}

function c_homeLogo(){c_Cool(); c_x1.className = c_ac2; 
var t = "Cooltebza | Home ";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b1;
localStorage.pagBtns0 = 0;var zer0 = localStorage.pagBtns0;
document.getElementById('numPage').innerHTML = 'Page(0) [Home]';
}

function c_home(){c_Cool(); c_x2.className = c_ac; 
var t = "Cooltebza | Home ";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b1;
localStorage.pagBtns0 = 0;var zer0 = localStorage.pagBtns0;
document.getElementById('numPage').innerHTML = 'Page(0) [Home]';
}

function c_news(){c_Cool(); c_x3.className = c_ac;
var t = "Cooltebza | News";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b2;
localStorage.pagBtns0 = 1;var zer0 = localStorage.pagBtns0;
document.getElementById('numPage').innerHTML = 'Page(1) [News]';
}
function c_contact(){c_Cool(); c_x4.className = c_ac;
var t = "Cooltebza | Contact";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b4;
localStorage.pagBtns0 = 3;var zer0 = localStorage.pagBtns0;
document.getElementById('numPage').innerHTML = 'Page(3) [Contact]';
}
function c_about(){c_Cool(); c_x5.className = c_ac;
var t = "Cooltebza | About";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b5;
localStorage.pagBtns0 = 4;var zer0 = localStorage.pagBtns0;
document.getElementById('numPage').innerHTML = 'Page(4) [About]';

}
function c_dictionary(){c_Cool(); c_x6.className = c_ac;
var t = "Cooltebza | Dictionary";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b3;
localStorage.pagBtns0 = 2;var zer0 = localStorage.pagBtns0;
document.getElementById('numPage').innerHTML = 'Page(2) [Dictionary]';
funcDic1();
}





}else if(document.getElementById('chead0')){

document.getElementById('chead0').innerHTML = chead0;
document.getElementById('root0').innerHTML = cTemplate0;
document.getElementById('nav0').innerHTML = cNav0;

}
 }





