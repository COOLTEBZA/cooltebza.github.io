
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

function c_Cool(){

c_x1.className = c_ac3;
c_x2.className = c_ac1;
c_x3.className = c_ac1;
c_x4.className = c_ac1;
c_x5.className = c_ac1;

}
function c_homeLogo(){c_Cool(); c_x1.className = c_ac2; }
function c_home(){c_Cool(); c_x2.className = c_ac; 
var t = "Cooltebza | Home ";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b1;
}
function c_news(){c_Cool(); c_x3.className = c_ac;
var t = "Cooltebza | News";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b2;
}
function c_contact(){c_Cool(); c_x4.className = c_ac;
var t = "Cooltebza | Contact";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b4;
}
function c_about(){c_Cool(); c_x5.className = c_ac;
var t = "Cooltebza | About";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b5;
}
function c_dictionary(){c_Cool(); c_x5.className = c_ac;
var t = "Cooltebza | Dictionary";
document.getElementById('title').innerHTML = t;
document.getElementById('center').innerHTML = b3;
funcDic1();
}













