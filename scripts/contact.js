// variable declarations
const contactIcon = document.getElementById('contactIcon');
const contactWindow = document.getElementById('contactWindow');
const contactWindowHeader = document.getElementById('contactWindowHeader');
const contactWindowClose = document.getElementById('contactWindowClose');
const contactWindowMax = document.getElementById('contactWindowMax');
const contactWindowMin = document.getElementById('contactWindowMin');
const contactWindowHide = document.getElementById('contactWindowHide');
const contactMenuLink = document.getElementById('contactMenuLink');
const pgpKey = document.getElementById('pgp');
const addPgp = document.getElementById('addPgp');
const removePgp = document.getElementById('removePgp');
const contactStatus = document.getElementById('contactStatus')
// event listeners

// add pgp key input
addPgp.addEventListener("click", function(event) {

  event.preventDefault();
  pgpKey.style.display = "block"; 
  addPgp.style.display = "none";
  removePgp.style.display = "block"; 

});

// remove pgp key input
removePgp.addEventListener("click", function(event) {

  event.preventDefault();
  pgpKey.style.display = "none"; 
  addPgp.style.display = "block";
  removePgp.style.display = "none"; 

});

// open contact window
contactIcon.addEventListener("click", function(event) {

  // change display to show contact window
  contactWindow.style.display = "block"; 
  contactMenuLink.style.display = "flex";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 500;
  viewProjectWindow.style.zIndex = 400;
  contactStatus.classList.add('active-tab');

  // make current tab open
  contactIcon.classList.add('current-window');
  // remove the rest
  terminalIcon.classList.remove('current-window')
  portfolioIcon.classList.remove('current-window')
  aboutIcon.classList.remove('current-window')

});

// change z-index of window if its clicked
contactWindow.addEventListener("click", function(event) {

  // change display to show contact window
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 500;
  viewProjectWindow.style.zIndex = 400; 

  // make current tab open
  contactIcon.classList.add('current-window');
  // remove the rest
  terminalIcon.classList.remove('current-window')
  portfolioIcon.classList.remove('current-window')
  aboutIcon.classList.remove('current-window')

});

// close contact window
contactWindowClose.addEventListener("click", function(event) {

  // change display to close contact window
  contactWindow.classList.remove('animate__zoomIn');
  contactWindow.classList.add('animate__zoomOut');
  setTimeout(close,300);
  contactMenuLink.style.display = "none";
  contactStatus.classList.remove('active-tab');
  contactIcon.classList.remove('current-window');

  function close() {
    contactWindow.style.display = "none";
    contactWindow.classList.remove('animate__zoomOut');
    contactWindow.classList.add('animate__zoomIn');
  }

});

// maximize contact window
contactWindowMax.addEventListener("click", function(event) {

  // maximize contact window
  contactWindow.style.top = "32px";
  contactWindow.style.left = "77px"; 
  contactWindow.style.width = "calc(100% - 77px)";
  contactWindowHeader.style.width = "100%"
  contactWindow.style.height = "100%";
  contactWindow.style.transform = "translate(0%, 0%)";
  contactWindow.style.borderRadius = "0";
  contactWindowHeader.style.borderRadius = "0";
  contactWindowMax.style.display = "none";
  contactWindowMin.style.display = "block";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 500;
  viewProjectWindow.style.zIndex = 400;
  contactIcon.classList.add('current-window')

});

// minimize contact window
contactWindowMin.addEventListener("click", function(event) {

  // minimize contact window
  contactWindow.style.top = "25%";
  contactWindow.style.left = "25%"; 
  contactWindow.style.width = "400px";
  contactWindow.style.height = "";
  contactWindow.style.transform = "";
  contactWindow.style.borderRadius = "10px 10px 0px 0px";
  contactWindowHeader.style.borderRadius = "10px 10px 0px 0px";
  contactWindowMax.style.display = "block";
  contactWindowMin.style.display = "none";

});

// hide contact window and create link on menubar
contactWindowHide.addEventListener("click", function(event) {

  // minimize contact window
  contactWindow.classList.remove('animate__zoomIn');
  contactWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  contactMenuLink.style.display = "flex";
  contactIcon.classList.remove('current-window');

  function close() {
    contactWindow.style.display = "none"; 
    contactWindow.classList.remove('animate__zoomOut');
    contactWindow.classList.add('animate__zoomIn');
  }

});

// show contact window if link on menubar is clicked
contactMenuLink.addEventListener("click", function(event) {

  // minimize contact window
  contactWindow.style.display = "block";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 500;
  viewProjectWindow.style.zIndex = 400;

});

// Make the DIV element draggable:
dragElement(document.getElementById("contactWindow"));

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