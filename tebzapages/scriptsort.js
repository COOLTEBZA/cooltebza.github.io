
function sortTable2(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }

  }
}


 {
  document.open();
  document.write("<table class='w3-table-all w3-margin-top' id='myTable2' border='1'><tr><th onclick='sortTable2(0)' style='cursor:pointer' id='nameClick'><a class='icon dir'>Name</a></th><th onclick='sortTable2(1)' style='cursor:pointer' id='sizeClick'>Size</th><th onclick='sortTable2(2)' style='cursor:pointer' id='dateClick'>Date</th><th onclick='sortTable2(3)' style='cursor:pointer' id='typeClick'>Type</th></tr><tr><td><button class='dirrr'> 1 <a href='Elemnts and Attributes.html' style='width:100%;'>APK </a></button></td><td>Unknown</td><td>1/1/20, 13:01:00 PM</td><td>File Folder </td></tr><td><button class='butt1'><a href='h.html'>Audio </a></button></td><td>Unknown</td><td>1/1/20, 13:02:00 PM</td><td>File Folder  </td></tr><tr><td><button class='butt1'><a href='#'>Apps PC,MAC,LINUX,iPhone </a></button></td><td>Unknown</td><td>1/1/20, 13:03:00 PM</td><td>File Folder	</td></tr><tr><td><button class='butt1'><a href='#'>Compressed Files </a></button></td><td>Unknown</td><td>1/1/20, 13:04:00 PM</td><td>File Folder	</td></tr><tr><td><button class='butt1'><a href='#'>Document </a></button></td><td>Unknown</td><td>1/1/20, 13:05:00 PM</td><td>File Folder	</td></tr><tr><td><button class='butt1'><a href='#'>Music </a></button></td><td>Unknown</td><td>1/1/20, 13:06:00 PM</td><td>File Folder	</td></tr><tr><td><button class='butt1'><a href='#'>Other Files </a></button></td><td>Unknown</td><td>1/1/20, 13:07:00 PM</td><td>File Folder</td></tr><tr><td><button class='butt1'><a href='#'>Pictures </a></button></td><td>Unknown</td><td>1/1/20, 13:08:00 PM</td><td>File Folder</td></tr><tr><td><button class='butt1'><a href='#'>Videos </a></button></td><td>Unknown</td><td>1/1/20, 13:09:00 PM</td><td>File Folder</td></tr></table>"
,"<style>.butt1{width:100%;background:red;}a:-webkit-any-link {width:100%;color: -webkit-link;text-decoration: none;cursor: auto;}");
  document.close();

}