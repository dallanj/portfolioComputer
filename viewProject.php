<!-- viewProjects page -->
<div class="animate__animated animate__zoomIn animate__faster window viewProjectWindow" id="viewProjectWindow">
  
  <!-- window header -->
  <div class="window-header portfolioHeader" id="viewProjectWindowHeader">
    <span id="projectTitle"></span>
    
    <!-- window options -->
    <ul class="window-icons">

      <!-- hide window -->
      <li class="window-icon-hover" id="viewProjectWindowHide">
        <img src="./images/icons/hide_icon.png" alt="hide window icon">
      </li>

      <!-- size of window -->
        <!-- maximize -->
        <li class="window-icon-hover" id="viewProjectWindowMax">
          <img src="./images/icons/max_icon.png" alt="maximize window icon">
        </li>
        <!-- minimize -->
        <li class="window-icon-hover" id="viewProjectWindowMin">
          <img src="./images/icons/min_icon.png" alt="minimize window icon">
        </li>

      <!-- close window -->
      <li class="window-icon-close" id="viewProjectWindowClose">
        <img src="./images/icons/icon_close.png" alt="close window icon">
      </li>

    </ul>

  </div>
  
  <!-- viewProject window content -->
  <div class="window-viewProject-content">
  <div id="viewProjectSlider" class="viewProject-container">
    <div class="slider" id="sliderContainer">
    <button class="btn-slide prev"><i class="fas fa-3x fa-chevron-circle-left"></i></button>
    <button class="btn-slide next"><i class="fas fa-3x fa-chevron-circle-right"></i></button>
    </div>
    <div class="dots-container" id="dotContainer">
    </div>

    <!-- import slider script -->
    <script src="./scripts/slider.js"></script>
  
    <div class="viewProject-content" id="viewProjectContent">

    </div>

  </div>
  </div>
  
</div>