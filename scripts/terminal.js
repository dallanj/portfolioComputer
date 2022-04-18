// variable declarations
const terminalIcon = document.getElementById('terminalIcon');
const terminalWindow = document.getElementById('terminalWindow');
const terminalWindowHeader = document.getElementById('terminalWindowHeader');
const terminalWindowClose = document.getElementById('terminalWindowClose');
const terminalWindowMax = document.getElementById('terminalWindowMax');
const terminalWindowMin = document.getElementById('terminalWindowMin');
const terminalWindowHide = document.getElementById('terminalWindowHide');
const terminalMenuLink = document.getElementById('terminalMenuLink');
const terminalStatus = document.getElementById('terminalStatus');
// event listeners

// open terminal window
terminalIcon.addEventListener("click", function(event) {

  // change display to show terminal window
  terminalWindow.style.display = "block"; 
  terminalMenuLink.style.display = "flex";
  terminalStatus.classList.add('active-tab');

  // make current tab open
  terminalIcon.classList.add('current-window');
  // remove the rest
  contactIcon.classList.remove('current-window')
  portfolioIcon.classList.remove('current-window')
  aboutIcon.classList.remove('current-window')

});

// change z-index of window if its clicked
terminalWindow.addEventListener("click", function(event) {

  // change display to show terminal window
  terminalWindow.style.zIndex = terminalWindow.style.zIndex+1; 
  
  // make current tab open
  terminalIcon.classList.add('current-window');
  // remove the rest
  contactIcon.classList.remove('current-window')
  portfolioIcon.classList.remove('current-window')
  aboutIcon.classList.remove('current-window')

});

// close terminal window
terminalWindowClose.addEventListener("click", function(event) {

  // change display to close terminal window
  terminalWindow.classList.remove('animate__zoomIn');
  terminalWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  terminalMenuLink.style.display = "none";
  terminalStatus.classList.remove('active-tab');
  terminalIcon.classList.remove('current-window');

  function close() {
    terminalWindow.style.display = "none";
    terminalWindow.classList.remove('animate__zoomOut');
    terminalWindow.classList.add('animate__zoomIn');
  }

});

// maximize terminal window
terminalWindowMax.addEventListener("click", function(event) {

  // maximize terminal window
  terminalWindow.style.top = "32px";
  terminalWindow.style.left = "77px"; 
  terminalWindow.style.width = "calc(100% - 77px)";
  terminalWindowHeader.style.width = "100%"
  terminalWindow.style.height = "100%";
  terminalWindow.style.transform = "translate(0%, 0%)";
  terminalWindow.style.borderRadius = "0";
  terminalWindowHeader.style.borderRadius = "0";
  terminalWindowMax.style.display = "none";
  terminalWindowMin.style.display = "block";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 500;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;
  terminalIcon.classList.add('current-window')

});

// minimize terminal window
terminalWindowMin.addEventListener("click", function(event) {

  // minimize terminal window
  terminalWindow.style.top = "25%";
  terminalWindow.style.left = "25%"; 
  terminalWindow.style.width = "500px";
  terminalWindow.style.height = "";
  portfolioWindow.style.transform = " ";
  terminalWindow.style.borderRadius = "10px 10px 0px 0px";
  terminalWindowHeader.style.borderRadius = "10px 10px 0px 0px";
  terminalWindowMax.style.display = "block";
  terminalWindowMin.style.display = "none";

});

// hide terminal window and create link on menubar
terminalWindowHide.addEventListener("click", function(event) {

  // minimize terminal window
  terminalWindow.classList.remove('animate__zoomIn');
  terminalWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  terminalMenuLink.style.display = "flex";
  terminalIcon.classList.remove('current-window');

  function close() {
    terminalWindow.style.display = "none"; 
    terminalWindow.classList.remove('animate__zoomOut');
    terminalWindow.classList.add('animate__zoomIn');
  }

});

// show terminal window if link on menubar is clicked
terminalMenuLink.addEventListener("click", function(event) {

  // minimize terminal window
  terminalWindow.style.display = "block";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 500;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;

});

// Make the DIV element draggable:
dragElement(document.getElementById("terminalWindow"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}