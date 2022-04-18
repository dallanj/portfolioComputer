<!DOCTYPE html>
<html lang="en">

<?php include './head.php'; ?>

<body>

  <!-- alerts -->
  <div id="alerts"></div>
  
  <!-- top bar  -->
  <nav class="menuBar-container">

    <ul class="menuBar-links">
    <li class="link">Activities</li>
      <li class="link" id="terminalMenuLink">Terminal</li>
      <li class="link" id="aboutMenuLink">About me</li>
      <li class="link" id="projectsMenuLink">Projects</li>
      <li class="link" id="contactMenuLink">Contact</li>
      <li class="link" id="viewProjectMenuLink"></li>
      <span id="time"></span>
    </ul>
    

  </nav>

  <!-- Desktop menu which has links to https://dallan.ca/ each page (terminal, projects, contact, about) -->
  <main class="desktop-container">
  
    <ul class="desktop-menu">

      <li class="folder current-window" id="terminalIcon" tabindex="1" title="Terminal">
        <img width="56" src="./images/icons/terminal.png" alt="terminal">
        <span id="terminalStatus" class="active-tab"></span>
      </li>

      <li class="folder" id="aboutIcon" tabindex="2" title="About">
        <img width="56" src="./images/icons/about.png" alt="about me">
        <span id="aboutStatus"></span>
      </li>
      
      <li class="folder" id="portfolioIcon" tabindex="3" title="Projects">
        <img src="./images/icons/projects2.png" alt="projects">
        <span id="portfolioStatus"></span>
      </li>

      <li class="folder" id="contactIcon" tabindex="4" title="Contact">
        <img width="56" src="./images/icons/mail.png" alt="contact me">
        <span id="contactStatus"></span>
      </li>

      <li class="folder" id="linkedinIcon" tabindex="5" title="LinkedIn">
        <img width="56" src="./images/icons/linkedin.png" alt="linked in profile">
      </li>

      <li class="folder" id="githubIcon" tabindex="6" title="GitHub">
        <img width="56" src="./images/icons/github.png" alt="github profile">
      </li>

      <li class="folder" id="pdfIcon" tabindex="7" title="Resume">
        <img width="56" src="./images/icons/resume2.png" alt="resume">
      </li>

      <li class="folder" id="pgpIcon" tabindex="7" title="PGP Key">
        <img width="56" src="./images/icons/pgp.png" alt="pgp (pretty good privacy) key">
      </li>

    </ul>

  </main>

  <footer>Built by Dallan Jones with a hint of <a href="https://ubuntu.com/">Ubuntu</a> flavour</footer>

  
  <!-- include the projects window -->
  <?php include 'projects.php'; ?> 

  <!-- import projects window script -->
  <script src="./scripts/projects.js"></script>

  <!-- include the contact window -->
  <?php include 'contact.php'; ?> 

  <!-- import contact window script -->
  <script src="./scripts/contact.js"></script>

  <!-- include the terminal window -->
  <?php include 'terminal.php'; ?> 

  <!-- import terminal window script -->
  <script src="./scripts/terminal.js"></script>

  <!-- include the about me window -->
  <?php include 'about.php'; ?> 

  <!-- import about me window script -->
  <script src="./scripts/about.js"></script>

  <!-- include the viewProject window -->
  <?php include 'viewProject.php'; ?> 

  <!-- import single project window script -->
  <script src="./scripts/viewProject.js"></script>

<script >
  const linkedinIcon = document.getElementById('linkedinIcon');
  const githubIcon = document.getElementById('githubIcon');
  const pdfIcon = document.getElementById('pdfIcon');
  const pgpIcon = document.getElementById('pgpIcon');

  // accessibility open icons
  document.addEventListener('keyup', (e) => {
    // check if it was the space bar or enter that was pressed
    if (e.keyCode === 13 || e.keyCode === 32) {
      // check the target to check id when the key press happened
      if(e.target.id === 'terminalIcon') {
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
      }

      if(e.target.id === 'aboutIcon') {
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
      }

      if(e.target.id === 'portfolioIcon') {
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
      }

      if(e.target.id === 'contactIcon') {
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
      }

      if(e.target.id === 'linkedinIcon') {
        window.open('https://www.linkedin.com/in/dallanj')
      }

      if(e.target.id === 'githubIcon') {
        window.open('https://github.com/dallanj')
      }

      if(e.target.id === 'pdfIcon') {
        window.open('https://dallan.ca/resume.pdf')
      }

      if(e.target.id === 'pgpIcon') {
        window.open('https://dallan.ca/pgp.txt')
      }
      
    }
  })

  // open new tab when linkedin icon is clicked
  linkedinIcon.addEventListener("click", function(event) {
    window.open('https://www.linkedin.com/in/dallanj')
  })

  // open new tab when linkedin icon is clicked 
  githubIcon.addEventListener("click", function(event) {
    window.open('https://github.com/dallanj')
  })
  // open new tab when pdf icon is clicked 
  pdfIcon.addEventListener("click", function(event) {
    window.open('https://dallan.ca/resume.pdf')
  })

  // open new tab when pgp icon is clicked 
  pgpIcon.addEventListener("click", function(event) {
    window.open('https://dallan.ca/pgp.txt')
  })

  let date = document.getElementById('time');

  function time() {
    let d = new Date();
    let month = d.getMonth();
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
           "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    let monthName = months[month];
    let day = d.getDate();
    let m = d.getMinutes();
    let h = d.getHours();
    date.textContent = 
      `${monthName} ${day} ` + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
  }

  setInterval(time, 1000);
</script>

</body>
</html>