for(var i = 0; i < 14; i++){
    document.getElementById("loadBtns").innerHTML += showBtn[i];  
      }

var showBtn = [
"<li class='li'><button id='SignLanguage' class='lang a'>Sign Language</button></li>",   
"<li class='li'><button id='ZuluLanguage' class='lang a'>Zulu</button></li>",
"<li class='li'><button id='SepediLanguage' class='lang a'>SePedi(Northern Sotho)</button></li>", 
"<li class='li'><button id='ShanganeLanguage' class='lang a'>Shangane(Tsonga)</button></li>",  
"<li class='li'><button id='NdebeleLanguage' class='lang a'>Ndebele</button></li>",
"<li class='li'><button id='AfrikaansLanguage' class='lang a'>Afrikaans</button></li>",
"<li class='li'><button id='SothoLanguage' class='lang a'>Sotho(Southern Sotho)</button></li>",  
"<li class='li'><button id='TswanaLanguage' class='lang a'>Tswana</button></li>", 
"<li class='li'><button id='XhosaLanguage' class='lang a'>Xhosa</button></li>",
"<li class='li'><button id='SwatiLanguage' class='lang a'>Swati</button></li>",  
"<li class='li'><button id='VenḓaLanguage' class='lang a'>Venḓa</button></li>", 
"<li class='li'><button id='KhoisanLanguage' class='lang a'>Khoisan</button></li>", 
"<li class='li'><button id='EnglishLanguage' class='lang a'>English</button></li>",
"<li class='li'><button id='OtherLanguages' class='lang a'>Other</button></li>" 
];
let langBtn0 = document.getElementById("SignLanguage");
let langBtn1 = document.getElementById("ZuluLanguage");
let langBtn2 = document.getElementById("SepediLanguage");
let langBtn3 = document.getElementById("ShanganeLanguage");
let langBtn4 = document.getElementById("NdebeleLanguage");
let langBtn5 = document.getElementById("AfrikaansLanguage");
let langBtn6 = document.getElementById("SothoLanguage");
let langBtn7 = document.getElementById("TswanaLanguage");
let langBtn8 = document.getElementById("XhosaLanguage");
let langBtn9 = document.getElementById("SwatiLanguage");
let langBtn10 = document.getElementById("VenḓaLanguage");
let langBtn11 = document.getElementById("KhoisanLanguage");
let langBtn12 = document.getElementById("EnglishLanguage");
let langBtn13 = document.getElementById("OtherLanguages");

if(localStorage.langStored == "Sign" ){
	langBtn0.className = localStorage.langStored;
}else{}
if(localStorage.langStored == "Zulu"){
	langBtn1.className = localStorage.langStored;
}
if(localStorage.langStored == "SePedi"){
	langBtn2.className = localStorage.langStored;
} 
if(localStorage.langStored == "Shangane"){
	langBtn3.className = localStorage.langStored;
}
if(localStorage.langStored == "Ndebele"){
	langBtn4.className = localStorage.langStored;
}
if(localStorage.langStored == "Afrikaans"){
	langBtn5.className = localStorage.langStored;
}
if(localStorage.langStored == "Sotho"){
	langBtn6.className = localStorage.langStored;
}
if(localStorage.langStored == "Tswana" ){
	langBtn7.className = localStorage.langStored;
}
if(localStorage.langStored == "Xhosa"){
	langBtn8.className = localStorage.langStored;
}
if(localStorage.langStored == "Swati"){
	langBtn9.className = localStorage.langStored;
}  
if(localStorage.langStored == "Venḓa" ){
	langBtn10.className = localStorage.langStored;
}
if(localStorage.langStored == "Khoisan"){
	langBtn11.className = localStorage.langStored;
}
if(localStorage.langStored == "English"){
	langBtn12.className = localStorage.langStored;
}
if(localStorage.langStored == "other"){
	langBtn13.className = localStorage.langStored;
}



langBtn0.addEventListener("click", function(){
  
  localStorage.langStored = "Sign"; 
  langBtn0.className = localStorage.langStored;
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn1.addEventListener("click", function(){
  localStorage.langStored = "Zulu"; 
  langBtn1.className = localStorage.langStored;
 
 langBtn0.removeAttribute('class', 'Sign');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');


} );
langBtn2.addEventListener("click", function(){
  localStorage.langStored = "SePedi";  
  langBtn2.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn3.addEventListener("click", function(){
  localStorage.langStored = "Shangane"; 
  langBtn3.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn4.addEventListener("click", function(){
  localStorage.langStored = "Ndebele"; 
  langBtn4.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn5.addEventListener("click", function(){
  localStorage.langStored = "Afrikaans"; 
  langBtn5.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn6.addEventListener("click", function(){
  localStorage.langStored = "Sotho"; 
  langBtn6.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn7.addEventListener("click", function(){
  localStorage.langStored = "Tswana";  
  langBtn7.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn8.addEventListener("click", function(){
  localStorage.langStored = "Xhosa"; 
  langBtn8.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn9.addEventListener("click", function(){
  localStorage.langStored = "Swati"; 
  langBtn9.className = localStorage.langStored;  
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn10.addEventListener("click", function(){
  localStorage.langStored = "Venḓa";  
  langBtn10.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn11.addEventListener("click", function(){
  localStorage.langStored = "Khoisan"; 
  langBtn11.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn12.addEventListener("click", function(){
  localStorage.langStored = "English"; 
  langBtn12.className = localStorage.langStored;
   langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn13.addEventListener("click", function(){
 
 localStorage.langStored = "other"; 
  langBtn13.className = localStorage.langStored;
  langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');

} );