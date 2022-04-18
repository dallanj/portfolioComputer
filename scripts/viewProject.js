// variable declarations
const viewProjectWindow = document.getElementById('viewProjectWindow');
const viewProjectWindowHeader = document.getElementById('viewProjectWindowHeader');
const viewProjectWindowClose = document.getElementById('viewProjectWindowClose');
const viewProjectWindowMax = document.getElementById('viewProjectWindowMax');
const viewProjectWindowMin = document.getElementById('viewProjectWindowMin');
const viewProjectWindowHide = document.getElementById('viewProjectWindowHide');
const viewProjectMenuLink = document.getElementById('viewProjectMenuLink');

// event listeners

// change z-index of window if its clicked
viewProjectWindow.addEventListener("click", function(event) {

  // change display to show viewProject window
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 500;

});

// close viewProject window
viewProjectWindowClose.addEventListener("click", function(event) {

  // change display to close viewProject window
  viewProjectWindow.classList.remove('animate__zoomIn');
  viewProjectWindow.classList.add('animate__zoomOut');
  viewProjectMenuLink.style.display = "none";
  setTimeout(close, 300);
  
  function close() {
    viewProjectWindow.style.display = "none";
    
    viewProjectWindow.classList.remove('animate__zoomOut');
    viewProjectWindow.classList.add('animate__zoomIn');
  }

});

// maximize viewProject window
viewProjectWindowMax.addEventListener("click", function(event) {

  // maximize viewProject window
  viewProjectWindow.style.top = "32px";
  viewProjectWindow.style.left = "77px"; 
  viewProjectWindow.style.width = "calc(100% - 77px)";
  viewProjectWindowHeader.style.width = "100%"
  viewProjectWindow.style.height = "100%";
  viewProjectWindow.style.transform = "translate(0%, 0%)";
  viewProjectWindow.style.borderRadius = "0";
  viewProjectWindowHeader.style.borderRadius = "0";
  viewProjectWindowMax.style.display = "none";
  viewProjectWindowMin.style.display = "block";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 500;

});

// minimize viewProject window
viewProjectWindowMin.addEventListener("click", function(event) {

  // minimize viewProject window
  viewProjectWindow.style.top = "25%";
  viewProjectWindow.style.left = "25%"; 
  viewProjectWindow.style.width = "600px";
  viewProjectWindow.style.height = "";
  viewProjectWindow.style.transform = "";
  viewProjectWindow.style.borderRadius = "10px 10px 0px 0px";
  viewProjectWindowHeader.style.borderRadius = "10px 10px 0px 0px";
  viewProjectWindowMax.style.display = "block";
  viewProjectWindowMin.style.display = "none";

});

// hide viewProject window and create link on menubar
viewProjectWindowHide.addEventListener("click", function(event) {

  // minimize viewProject window
  viewProjectWindow.classList.remove('animate__zoomIn');
  viewProjectWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  viewProjectMenuLink.style.display = "flex";

  function close() {
    viewProjectWindow.style.display = "none"; 
    viewProjectWindow.classList.remove('animate__zoomOut');
    viewProjectWindow.classList.add('animate__zoomIn');
  }

});

// show viewProject window if link on menubar is clicked
viewProjectMenuLink.addEventListener("click", function(event) {

  // minimize viewProject window
  viewProjectWindow.style.display = "block";
  portfolioWindow.style.zIndex = 400;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 500;

});

// Make the DIV element draggable:
dragElement(document.getElementById("viewProjectWindow"));

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

// projects.js will call this function if a project is clicked
const checkProjectViewer = function (id) {

    let projectTitle = document.getElementById('projectTitle')
    viewProjectMenuLink.innerHTML = projects.project[id].title;

    // window title
    projectTitle.innerHTML = projects.project[id].title
    
    let countPosition = 0;
    for (let key in projects.project[id].images) {
      
      // slide div class
      let divSlide = document.createElement('div');
      divSlide.classList.add('slide');
      
      // slide img
      let img = document.createElement('img');
      img.src = `./uploads/${projects.project[id].images[key]}`;
      img.alt = `preview picture of ${projects.project[id].title}`
      divSlide.appendChild(img);
      sliderContainer.appendChild(divSlide)

      // dots
      let dot = document.createElement('span')
      if(projects.project[id].id === 0) {
        dot.classList.add('dot');
        dot.classList.add('active');
      } else {
        dot.classList.add('dot');
      }
      dot.dataset.slide = countPosition
      document.getElementById('dotContainer').appendChild(dot)

      // add 1 to counter each loop
      countPosition++
    }
    // next button
    let nextButton = document.createElement('button');
    nextButton.classList.add('btn-slide')
    nextButton.classList.add('next')
    nextButton.innerHTML = '<i aria-label="next project picture" class="fas fa-3x fa-chevron-circle-right"></i>'
    sliderContainer.appendChild(nextButton)

    // next button
    let prevButton = document.createElement('button');
    prevButton.classList.add('btn-slide')
    prevButton.classList.add('prev')
    prevButton.innerHTML = '<i aria-label="previous project picture" class="fas fa-3x fa-chevron-circle-left"></i>'
    sliderContainer.appendChild(prevButton)

    // call slider function after project pictures are done loading
    Slider();

    // split built with tags into array
    let techStack = projects.project[id].technical.split(",");
    for(let i=0;i<techStack.length;i++){
      techStack[i]=`<li class="techStack-item">${techStack[i]}</li>`;
    }
    techStack = techStack.join('')
    console.log(techStack)
    
    viewProjectContent.innerHTML += `
      <content class="buttons-container">
        <a aria-label="live project link" href="${projects.project[id].url}" class="liveLink">VISIT THE WEBSITE</a>
        <a aria-label="github project repository" href="${projects.project[id].gitUrl}" class="gitLink"><i class="fab fa-github"></i></a>
      </content>

      <h2>About this project</h2>
      <p>${projects.project[id].about}</p>

      <h2>Built with</h2>
      <ul class="techStack">${techStack}</ul>
    `

  
  }