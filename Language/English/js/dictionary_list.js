function searchAllWebsWords(e){document.getElementById("resultinput").click();}

function searchAllWebWords(e)
{
e = e || window.event;


var searchInput = document.getElementById("searchbox").value;
var myGrade = searchInput;
switch(myGrade){
	
case "Banks":case "Banks":
document.getElementById("resultinput").href +="Banks.html";

break;

case "Stores":case "Stores":
document.getElementById("resultinput").href +="Stores.html";

break;

case "Shopping":case "shopping":
document.getElementById("resultinput").href +="Shopping.html";

break;
	
case "Profile":case "profile":
document.getElementById("resultinput").href +="Profile.html";

break;
		  case "Theme":case "theme":
document.getElementById("resultinput").href +="Theme.html";

break;
case "Menu":case "menu":
document.getElementById("resultinput").href +="Menu.html";

break;
case "Relatives":case "relatives":
document.getElementById("resultinput").href +="Relatives.html";

break;
case "Pages":case "pages":
document.getElementById("resultinput").href +="Pages.html";

break;
case "Groups":case "Groups":
document.getElementById("resultinput").href +="Groups.html";

break;
case "Friends":case "friends":
document.getElementById("resultinput").href +="Friends.html";

break;
case "blacklist":case "Blacklist":
document.getElementById("resultinput").href +="BlackList.html";

break;
case "block list":case "Block list":case "block":case "Block":case "blocked":case "Blocked":
document.getElementById("resultinput").href +="BlockList.html";

break;
case "display list":case "Display list":case "display":case "Display":
document.getElementById("resultinput").href +="DisplayList.html";

break;
case "Scheduled list":case "scheduled list":case "Scheduled":case "scheduled":case "Schedule":case "schedule":
document.getElementById("resultinput").href +="ScheduledList.html";

break;
case "Delayed":case "delayed":case "Delayed List":case "delayed List":
document.getElementById("resultinput").href +="DelayedList.html";

break;
case "messages":case "Messages":case "Message":case "message":
document.getElementById("resultinput").href +="Messages.html";

break;
case "logout":case "Logout":
document.getElementById("resultinput").href +="Logout.html";

break;

case "contents":case "Contents":case "Content":case "content":
document.getElementById("resultinput").href +="contents.html";

break;

case "Updates_Logs":case "Updates_Logs":
document.getElementById("resultinput").href +="Updates_Logs.html";

break;

case "A":case "a":
document.getElementById("resultinput").href +="a.html";

break;
case "aardvark":case "Aardvark":case "AARDVARK":
document.getElementById("resultinput").href +="aardvark.html";
break;
case "A":case "a":
document.getElementById("resultinput").href +="a.html";

break;
event.preventDefault();
default:
document.getElementById("resultinput").href +="empty_no_results_found.html";
}

}
 /*
 License: https://www.facebook.com/legal/license/09P_rcHKL4D/
 */

/*
{
    "name": "Original Cooltebza",
    "version": "0.1",
    "description": "Original Cooltebza theme",
    "author": "Tebogo developer",
    "url": "https://cooltebza.github.io/",
    "supports": ["0.0,"0.1"]
	'common',
        'enum_editor',
        'gis',
        'navigation',
        'designer',
        'rte',
        'codemirror',
        'jqplot',
        'resizable-menu',
        'icons',
	
}
*/
