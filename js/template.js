var cTemplate =`<div class="flex-container">
  <header class="header" style="background-color:black;border: 1px solid purple;">
  Welcome to the Information Sector</header>
  <article class="main" style="background-color:black;border: 1px solid purple;">
  
  
    <p id="center">center
 
</p>
  
  </article>
  <aside class="aside aside1" style="background-color:black;border: 1px solid purple;">Aside 1
  <table border='1'>
<thead>
<tr><th>
  <input type='text' id='search' onkeyup="textAwait()" placeholder='Keyword'><button onclick='searchBtn()'>Search!</button>
</th>
</tr>
<tr><th id="searchedText">
  
</th>
</tr>

</thead>
</table>
  
  </aside>
  <aside class="aside aside2" style="background-color:black;border: 1px solid purple;">Aside 2</aside>
  
  <footer class="footer" style="background-color:black;border: 1px solid purple;">
  
  <fieldset><legend><h4>Paging:</h4></legend><br>

    
  <div class="npBtnsDiv"><button class="npBtns" style="float:left;">prev</button><button  class="npBtns" style="float:right;">next</button></div>
  <br>
   <ul class="ul">
   
        <li class="li"><a href='' class='a'>A</a></li>
        <li class="li"><a href='' class='a'>B</a></li>
        <li class="li"><a href='' class='a'>C</a></li>
        <li class="li"><a href='' class='a'>D</a></li>
        <li class="li"><a href='' class='a'>E</a></li> 
        <li class="li"><a href='' class='a'>F</a></li> 
        <li class="li"><a href='' class='a'>G</a></li> 
        <li class="li"><a href='' class='a'>H</a></li> 
        <li class="li"><a href='' class='a'>I</a></li> 
        <li class="li"><a href='' class='a'>J</a></li> 
        <li class="li"><a href='' class='a'>K</a></li> 
        <li class="li"><a href='' class='a'>L</a></li> 
        <li class="li"><a href='' class='a'>M</a></li> 
        <li class="li"><a href='' class='a'>N</a></li> 
        <li class="li"><a href='' class='a'>O</a></li> 
        <li class="li"><a href='' class='a'>P</a></li> 
        <li class="li"><a href='' class='a'>Q</a></li> 
        <li class="li"><a href='' class='a'>R</a></li> 
        <li class="li"><a href='' class='a'>S</a></li> 
        <li class="li"><a href='' class='a'>T</a></li> 
        <li class="li"><a href='' class='a'>U</a></li> 
        <li class="li"><a href='' class='a'>V</a></li> 
        <li class="li"><a href='' class='a'>W</a></li> 
        <li class="li"><a href='' class='a'>X</a></li>
        <li class="li"><a href='' class='a'>Y</a></li> 
        <li class="li"><a href='' class='a'>Z</a></li> 
        <li class="li"><a href='' class='a'>1</a></li>
        <li class="li"><a href='' class='a'>2</a></li>
        <li class="li"><a href='' class='a'>3</a></li>
        <li class="li"><a href='' class='a'>4</a></li>
        <li class="li"><a href='' class='a'>5</a></li>
        <li class="li"><a href='' class='a'>6</a></li>
        <li class="li"><a href='' class='a'>7</a></li>
        <li class="li"><a href='' class='a'>8</a></li>
        <li class="li"><a href='' class='a'>9</a></li>
        <li class="li"><a href='' class='a'>0</a></li>
        <li class="li"><a href='' class='a'>A-Z</a></li>
        <li class="li"><a href='' class='a'>0-9</a></li>
        <li class="li"><a href='' class='a'>ALL</a></li>
        </ul>
  </fieldset> 
  </footer>
  
  <footer class="footer" style="background-color:black;border: 1px solid purple;">

<fieldset><legend><h4>Quick Links:</h4></legend><br>
    <table> 
<tr><th class="qui1" style="width:280px;">
        <li><button href="#Home" class="quicks">Home</button></li>
        <li><button href="#Portfolio" class="quicks">Portfolio</button></li>
        <li><button href="#About" class="quicks">About</button></li>
        <li><button href="#Partners" class="quicks">Partners</button></li>
        <li><button href="#Designed by Tebogo" class="quicks">Author</button></li>
        <li><button href="#Disclaimer" class="quicks">Disclaimer</button></li>
        <li><button href="#Credits" class="quicks">Credits</button></li>
		<li><button href="#" class="quicks">Security</button></li>
</th>
<th  class="qui1" style="width:280px;">
        <li><button href="#" class="quicks">Facebook</button></li>
        <li><button href="#" class="quicks">Twitter</button></li>
        <li><button href="#" class="quicks">Instagram</button></li>
        <li><button href="#" class="quicks">Youtube</button></li>
        <li><button href="#" class="quicks">Email Us</button></li>
    </th></tr>
    </table>
    </fieldset> 
    
  
  </footer>
  
  <footer class="footer" style="background-color:black;border: 1px solid purple;">


    <fieldset><legend><h4>Choose a following South African Language:</h4></legend><br>
    <table> 
<tr><th class="ul">

<li class="li"><a href='#english' id="en"  onclick="sEn()" class="translate a">English</a></li>
<li class="li"><a href='#afrikaans' id="af"  onclick="sAfri()" class="translate a">Afrikaans</a></li> 
<li class="li"><a href='#Sotho'  id="so"  onclick="sSo()" class="translate a">SeSotho(Southern Sotho)</a></li> 
<li class="li"><a href='#Spedi'  id="sd"  onclick="sSd()" class="translate a">SePedi(Northern Sotho)</a></li> 
<li class="li"><a href='#Tswana'  id="tn"  onclick="sTn()" class="translate a">SeTswana</a></li> 
<li class="li"><a href='#Zulu'  id="zn"  onclick="sZn()" class="translate a">IsiZulu</a></li> 
<li class="li"><a href='#xhosa'  id="xs"  onclick="sXs()" class="translate a">IsiXhosa</a></li> 
<li class="li"><a href='#swati'  id="sw"  onclick="sSw()" class="translate a">Siswati</a></li> 
<li class="li"><a href='#ndebele'  id="nd"  onclick="sNd()" class="translate a">IsiNdebele</a></li> 
<li class="li"><a href='#tsonga'  id="ts"  onclick="sTs()" class="translate a">Xitsonga(Shangan)</a></li> 
<li class="li"><a href='#venda'  id="vn"  onclick="sVn()" class="translate a">TshiVenda</a></li> 
<li class="li"><a href='#sign'  id="sn"  onclick="sSn()" class="translate a">Sign</a></li> 
<li class="li"><a href='#khoi'  id="khoi"  onclick="sKhoi()" class="translate a">Khoisan</a></li>
<li class="li"><a href='#other'  id="oth"  onclick="sOth()" class="translate a">Other Langs(unknown yet)</a></li>


</th></tr>
     
      

    </table>
    </fieldset> 
  </footer>
  
    <footer class="footer qbtn" style="background-color:black;border: 1px solid purple;">
<ul class="ul"><li class="li">
<li class="li"><a href='#' onclick="" class="a">Copyright © 2022 </a></li> 
<li class="li"><a href='https://cooltebza.github.io/' onclick="" class="a">cooltebza.github.io</a></li>
<li class="li"><a href='#' onclick="" class="a"> All Rights Reserved, Inc.</a></li>
</li></ul>
  </footer>
  
</div>
`;


