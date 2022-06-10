var cTemplate =`<div class="flex-container">
  <header class="header" style="background-color:black;border: 1px solid purple;">
  Welcome to the Information Sector</header>
  <article class="main" style="background-color:black;border: 1px solid purple;">
  
  
    <p id="center" style="height:989px;">center
 
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

    
  <div class="npBtnsDiv"><button class="npBtns" onclick="prev1()" style="float:left;">prev</button>
 <button id="numPage" class="npBtns" >Page() []</button> <button  class="npBtns" onclick="next1()" style="float:right;">next</button></div>
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
		<li><button href="#" class="quicks">WhatsApp</button></li>
        <li><button href="#" class="quicks">Contact Us</button></li>
		<li><button href="#" class="quicks">Postal Address</button></li>
    </th></tr>
    </table>
    </fieldset> 
    
  
  </footer>
  
  <footer class="footer" style="background-color:black;border: 1px solid purple;">


    <fieldset><legend><h4>Choose a following Official South African Language:</h4></legend><br>
    <table> 
<tr><th class="ulLang" id="loadBtns">

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

//index
var cTemplate0 =`<div class="flex-container">
  <header class="header" style="background-color:black;border: 1px solid purple;">
  Welcome to the Information Sector</header>
  <article class="main" style="background-color:black;border: 1px solid purple;">
<style> .form_use{
	width: 98%;
	}
	
.resetBtn:hover, .validateBtn:hover{
	background-color: rgba(121, 85, 72, 0.71);box-shadow: inset -34px 0px 52px -7px #3F51B5;
	
}
.resetBtn, .validateBtn{float:left;width:50%;
	display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
	background-color: purple;
    box-shadow: inset -34px 0px 52px -7px black;    cursor: auto;
	}

	
	</style>
 <div style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);color:white;">
<div style="color:white;">
  <h2>Validation Form <b id="output"></b></h2>
</div>    

<p><label style="color:white;"for="user_name" class="form_use">Name</label>
<input class="form_use" type="text" id="user_name" required>
</p>
<br>
<p><label for="user_location" class="form_use">Location</label>
<textarea class="form_use"  cols="20" id="user_location" rows="1" placeholder="Location:area/town/city(e.g)" required>
</textarea>
</p>
<br>
<p>
<button class="resetBtn" type="submit"  onclick="resetBtn()" value="">reset</button>
<button class="validateBtn" type="submit" onclick="validateAccess()">validate</button>
</p>
<a type="hidden" id="linkHomePage"></a>
</div>


  
  </article>
  <aside class="aside aside1" style="background-color:black;border: 1px solid purple;">Aside 1
  <table border='1'>
<thead>
<tr><th>
</th>
</tr>
<tr><th>
  
</th>
</tr>

</thead>
</table>
  
  </aside>
  <aside class="aside aside2" style="background-color:black;border: 1px solid purple;">Aside 2</aside>
  

  
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
		<li><button href="#" class="quicks">WhatsApp</button></li>
        <li><button href="#" class="quicks">Contact Us</button></li>
		<li><button href="#" class="quicks">Postal Address</button></li>
    </th></tr>
    </table>
    </fieldset> 
    
  
  </footer>
  
  <footer class="footer" style="background-color:black;border: 1px solid purple;">


    <fieldset><legend><h4>Choose a following Official South African Language:</h4></legend><br>
    <table> 
<tr><th class="ulLang" id="loadBtns">

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


