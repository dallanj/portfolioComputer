// variable declarations
const portfolioIcon = document.getElementById('portfolioIcon');
const portfolioWindow = document.getElementById('portfolioWindow');
const portfolioWindowHeader = document.getElementById('portfolioWindowHeader');
const portfolioWindowClose = document.getElementById('portfolioWindowClose');
const portfolioWindowMax = document.getElementById('portfolioWindowMax');
const portfolioWindowMin = document.getElementById('portfolioWindowMin');
const portfolioWindowHide = document.getElementById('portfolioWindowHide');
const projectsMenuLink = document.getElementById('projectsMenuLink');
const portfolioStatus = document.getElementById('portfolioStatus');

// projects object
let projects = '';
// event listeners

// open portfolio window
portfolioIcon.addEventListener("click", function(event) {

  // change display to show portfolio window
  portfolioWindow.style.display = "block"; 
  projectsMenuLink.style.display = "flex";
  portfolioWindow.style.zIndex = 500;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;
  portfolioStatus.classList.add('active-tab');

  // make current tab open
  portfolioIcon.classList.add('current-window');
  // remove the rest
  terminalIcon.classList.remove('current-window')
  aboutIcon.classList.remove('current-window')
  contactIcon.classList.remove('current-window')

});

// change z-index of window if its clicked
portfolioWindow.addEventListener("click", function(event) {

    // change display to show contact window
    portfolioWindow.style.zIndex = 500;
    aboutWindow.style.zIndex = 400;
    terminalWindow.style.zIndex = 400;
    contactWindow.style.zIndex = 400;
    viewProjectWindow.style.zIndex = 501;
    
    // make current tab open
    portfolioIcon.classList.add('current-window');
    // remove the rest
    terminalIcon.classList.remove('current-window')
    aboutIcon.classList.remove('current-window')
    contactIcon.classList.remove('current-window')
  
  });

// close portfolio window
portfolioWindowClose.addEventListener("click", function(event) {

  // change display to close portfolio window
  portfolioWindow.classList.remove('animate__zoomIn');
  portfolioWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  projectsMenuLink.style.display = "none";
  portfolioStatus.classList.remove('active-tab');
  portfolioIcon.classList.remove('current-window');

  function close() {
    portfolioWindow.style.display = "none";
    portfolioWindow.classList.remove('animate__zoomOut');
    portfolioWindow.classList.add('animate__zoomIn');
  }

});

// maximize portfolio window
portfolioWindowMax.addEventListener("click", function(event) {

  // maximize portfolio window
  portfolioWindow.style.top = "32px";
  portfolioWindow.style.left = "77px"; 
  portfolioWindow.style.width = "calc(100% - 77px)";
  portfolioWindowHeader.style.width = "100%"
  portfolioWindow.style.height = "100%";
  portfolioWindow.style.transform = "translate(0%, 0%)";
  portfolioWindow.style.borderRadius = "0";
  portfolioWindowHeader.style.borderRadius = "0";
  portfolioWindowMax.style.display = "none";
  portfolioWindowMin.style.display = "block";
  portfolioWindow.style.zIndex = 500;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;
  portfolioIcon.classList.add('current-window')

});

// minimize portfolio window
portfolioWindowMin.addEventListener("click", function(event) {

  // minimize portfolio window
  portfolioWindow.style.top = "25%";
  portfolioWindow.style.left = "25%"; 
  portfolioWindow.style.width = "750px";
  portfolioWindow.style.height = "500px";
  portfolioWindow.style.transform = "";
  portfolioWindow.style.borderRadius = "10px 10px 0px 0px";
  portfolioWindowHeader.style.borderRadius = "10px 10px 0px 0px";
  portfolioWindowMax.style.display = "block";
  portfolioWindowMin.style.display = "none";
  // portfolioWindowHeader.style.width = "inherit"

});

// hide portfolio window and create link on menubar
portfolioWindowHide.addEventListener("click", function(event) {

  // minimize portfolio window
  portfolioWindow.classList.remove('animate__zoomIn');
  portfolioWindow.classList.add('animate__zoomOut');
  setTimeout(close, 300);
  projectsMenuLink.style.display = "flex";
  portfolioIcon.classList.remove('current-window');

  function close() {
    portfolioWindow.style.display = "none"; 
    portfolioWindow.classList.remove('animate__zoomOut');
    portfolioWindow.classList.add('animate__zoomIn');
  }

});

// show portfolio window if link on menubar is clicked
projectsMenuLink.addEventListener("click", function(event) {

  // minimize portfolio window
  portfolioWindow.style.display = "block";
  portfolioWindow.style.zIndex = 500;
  aboutWindow.style.zIndex = 400;
  terminalWindow.style.zIndex = 400;
  contactWindow.style.zIndex = 400;
  viewProjectWindow.style.zIndex = 400;

});

// Make the DIV element draggable:
dragElement(document.getElementById("portfolioWindow"));

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

// intitial selected tag
let tagName = 'ALL';

function fetchProjects (tag) {

  // (B) INIT FETCH POST
  fetch("./classes/fetchProjects.php", {
    method: "POST"
  })
 
  // (C) RETURN SERVER RESPONSE AS TEXT
  .then((result) => {
    if (result.status != 200) { throw new Error("Bad Server Response"); }
    return result.text();
  })
 
  // (D) SERVER RESPONSE
  .then((response) => {

    // declare display variables
    let tagDisplay = '';
    let projectDisplay = '';
    let li = '';
    let viewProject = null;
    document.getElementById('tags').innerHTML = '';
    

    document.getElementById('tags').innerHTML = '<p class="projects-filter-title">Filter Projects</p>';

    // create an ALL tag link
    li = document.createElement('li');
    li.innerText = 'ALL';
    if(tagName === 'ALL') {
      li.className = 'tagLink selected-tag';
    } else {
      li.className = 'tagLink';
    }
    li.addEventListener('click', tagSelect);
    document.getElementById('tags').appendChild(li)

    projects = JSON.parse(response);

    // create list of tag options
    Object.keys(projects.tags).forEach(tag => {
      li = document.createElement('li');
      li.innerText = projects.tags[tag];
      if(tagName === projects.tags[tag]) {
        li.className = 'tagLink selected-tag';
      } else {
        li.className = 'tagLink';
      }
      li.addEventListener('click', tagSelect);
      document.getElementById('tags').appendChild(li)
    
    });  
    
    // display tags on page   
    document.getElementById('tags').appendChild(li)
    console.log(projects)

    // create display for projects
    Object.keys(projects.project).forEach(key => {

      // check if current tagname selected is in project array
      if(projects.project[key].eachTag.includes(tagName) || tagName === 'ALL') {
        projectDisplay += `
          <div class="project" id="${projects.project[key].id}" tabindex="${projects.project[key].id}">
              <div class="project-image">
                  <img src="./uploads/${projects.project[key].id}_1.png" alt="preview picture of ${projects.project[key].title}">
                  
                  <div class="project-overlay">
                    <ul class="project-overlay-tags"> 
                      ${projects.project[key].tags}
                    </ul>

                    <div class="project-overlay-tag">
                        more..
                    </div>
                  </div>
                
              </div>
              
              <p class="project-title">${projects.project[key].title}</p>
          </div>`
      }
    });

    // display tags on page
    document.getElementById('projects').innerHTML = projectDisplay;

    // add event listener on project div
    let project = document.querySelectorAll('.project');
    // turn node list to array we can manipulate
    let projectArray = Array.prototype.slice.call(project)

    // Loop over the array of elements
    projectArray.forEach(function(project){

      // accessibility open icons
      document.addEventListener('keyup', (e) => {
        // check if it was the space bar or enter that was pressed
        if (e.keyCode === 13 || e.keyCode === 32) {
          // check the target to check id when the key press happened
          if(e.target.id === project.id) {
            // change z index
            portfolioWindow.style.zIndex = 450;
            aboutWindow.style.zIndex = 400;
            terminalWindow.style.zIndex = 400;
            contactWindow.style.zIndex = 400;
            viewProjectWindow.style.zIndex = 500;

            viewProject = project.id;
            viewProjectWindow.style.display = "block"; 
            viewProjectMenuLink.style.display = "flex";

            // put data in the viewproject window
            viewProjectContent = document.getElementById('viewProjectContent')
            sliderContainer = document.getElementById('sliderContainer')
            dotContainer = document.getElementById('dotContainer')
            viewProjectContent.innerHTML = '' // empty the content
            sliderContainer.innerHTML = '';
            dotContainer.innerHTML = '';

            
        
            checkProjectViewer(viewProject);
          }
        }
      });

      // Assign an event handler to each project div
      project.addEventListener("click", function(event){

        // change z index
        portfolioWindow.style.zIndex = 450;
        aboutWindow.style.zIndex = 400;
        terminalWindow.style.zIndex = 400;
        contactWindow.style.zIndex = 400;
        viewProjectWindow.style.zIndex = 500;

        viewProject = project.id;
        viewProjectWindow.style.display = "block"; 
        viewProjectMenuLink.style.display = "flex";

        // put data in the viewproject window
        viewProjectContent = document.getElementById('viewProjectContent')
        sliderContainer = document.getElementById('sliderContainer')
        dotContainer = document.getElementById('dotContainer')
        viewProjectContent.innerHTML = '' // empty the content
        sliderContainer.innerHTML = '';
        dotContainer.innerHTML = '';

        
     
        checkProjectViewer(viewProject);
      });
    });
  })
 
  // (E) HANDLE ERRORS - OPTIONAL
  .catch((error) => { console.log(error); });
 
  // (F) PREVENT FORM SUBMIT
  return false;
}

fetchProjects(tagName);

function tagSelect(elem) {
  tagName = elem.srcElement.firstChild.data;
  fetchProjects(tagName);
}
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    tagSelect();
  });
});
