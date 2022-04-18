// variable declarations
const aboutIcon = document.getElementById('aboutIcon');
const aboutWindow = document.getElementById('aboutWindow');
const aboutWindowHeader = document.getElementById('aboutWindowHeader');
const aboutWindowClose = document.getElementById('aboutWindowClose');
const aboutWindowMax = document.getElementById('aboutWindowMax');
const aboutWindowMin = document.getElementById('aboutWindowMin');
const aboutWindowHide = document.getElementById('aboutWindowHide');
const aboutMenuLink = document.getElementById('aboutMenuLink');
const aboutStatus = document.getElementById('aboutStatus');

// event listeners

// open about window
aboutIcon.addEventListener("click", function(event) {

  // change display to show about window
  aboutWindow.style.display = "block"; 
  aboutMenuLink.style.display = "flex";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 500;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;
  aboutStatus.classList.add('active-tab');

  // make current tab open
  aboutIcon.classList.add('current-window');
  // remove the rest
  terminalIcon.classList.remove('current-window')
  portfolioIcon.classList.remove('current-window')
  contactIcon.classList.remove('current-window')

});

// change z-index of window if its clicked
aboutWindow.addEventListener("click", function(event) {

  // change display to show about window
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 500;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;

  // make current tab open
  aboutIcon.classList.add('current-window');
  // remove the rest
  terminalIcon.classList.remove('current-window')
  portfolioIcon.classList.remove('current-window')
  contactIcon.classList.remove('current-window')

});

// close about window
aboutWindowClose.addEventListener("click", function(event) {

  // change display to close about window
  aboutWindow.classList.remove('animate__zoomIn');
  aboutWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  aboutMenuLink.style.display = "none";
  aboutStatus.classList.remove('active-tab');
  aboutIcon.classList.remove('current-window');
  
  function close() {
    aboutWindow.style.display = "none";
    aboutWindow.classList.remove('animate__zoomOut');
    aboutWindow.classList.add('animate__zoomIn');
  }
  

});

// maximize about window
aboutWindowMax.addEventListener("click", function(event) {

  // maximize about window
  aboutWindow.style.top = "32px";
  aboutWindow.style.left = "77px"; 
  aboutWindow.style.width = "calc(100% - 77px)";
  aboutWindowHeader.style.width = "100%"
  aboutWindow.style.height = "100%";
  aboutWindow.style.transform = "translate(0%, 0%)";
  aboutWindow.style.borderRadius = "0";
  aboutWindowHeader.style.borderRadius = "0";
  aboutWindowMax.style.display = "none";
  aboutWindowMin.style.display = "block";
  aboutWindow.style.zIndex = 500; 
  portfolioWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;
  aboutIcon.classList.add('current-window')

});

// minimize about window
aboutWindowMin.addEventListener("click", function(event) {

  // minimize about window
  aboutWindow.style.top = "25%";
  aboutWindow.style.left = "25%"; 
  aboutWindow.style.width = "500px";
  aboutWindow.style.height = "500px";
  aboutWindow.style.transform = "";
  aboutWindow.style.borderRadius = "10px 10px 0px 0px";
  aboutWindowHeader.style.borderRadius = "10px 10px 0px 0px";
  aboutWindowMax.style.display = "block";
  aboutWindowMin.style.display = "none";

});

// hide about window and create link on menubar
aboutWindowHide.addEventListener("click", function(event) {

  // minimize about window
  aboutWindow.classList.remove('animate__zoomIn');
  aboutWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  aboutMenuLink.style.display = "flex";
  aboutIcon.classList.remove('current-window');
  
  function close() {
    aboutWindow.style.display = "none"; 
    aboutWindow.classList.remove('animate__zoomOut');
    aboutWindow.classList.add('animate__zoomIn');
  }

});

// show about window if link on menubar is clicked
aboutMenuLink.addEventListener("click", function(event) {

  // minimize about window
  aboutWindow.style.display = "block";
  aboutWindow.style.zIndex = 500; 
  portfolioWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;

});

// Make the DIV element draggable:
dragElement(document.getElementById("aboutWindow"));

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