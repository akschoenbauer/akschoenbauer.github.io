// DROP DOWN NAVBAR MENU //
/*
function dropdownFunction() {
  document.getElementById('workDropDown').classList.toggle('show');
}

window.onclick = function(e) {
  if (!e.target.matches('.workdropbtn')) {
    var workDropDown = document.getElementById('workDropDown');
      if (workDropDown.classList.contains('show')) {
        workDropDown.classList.remove('show');
      }
  }
}
*/

// w3 schools demo
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
