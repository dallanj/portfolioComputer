<!-- Projects page -->
<div class="window terminalWindow animate__animated animate__faster animate__zoomIn" id="terminalWindow">
  
  <!-- window header -->
  <div class="window-header portfolioHeader" id="terminalWindowHeader">
    Terminal
    
    <!-- window options -->
    <ul class="window-icons">

      <!-- hide window -->
      <li class="window-icon-hover" id="terminalWindowHide">
        <img src="./images/icons/hide_icon.png" alt="hide window icon">
      </li>

      <!-- size of window -->
        <!-- maximize -->
        <li class="window-icon-hover" id="terminalWindowMax">
          <img src="./images/icons/max_icon.png" alt="maximize window icon">
        </li>
        <!-- minimize -->
        <li class="window-icon-hover" id="terminalWindowMin">
          <img src="./images/icons/min_icon.png" alt="minimize window icon">
        </li>

      <!-- close window -->
      <li class="window-icon-close" id="terminalWindowClose">
        <img src="./images/icons/icon_close.png" alt="close window icon">
      </li>

    </ul>

  </div>
  
  <!-- terminal window content -->
  <div class="terminal-content">
  <div class="window-terminal-content">

    <!-- new script jquery text -->
    
      <span><span class="green">dallan</span>:<span class="purple">~</span>$ </span>
      <p class="typewriter typewriterFont">
			Hello friend, my name is Dallan Jones.
      I am a full-stack web developer with a passion for building
      both front and back-end applications including accessible
      user-friendly interfaces.
        
      Look through the list of desktop icons to learn more about me,
      see the diverse projects that I have built, and to contact me <span class="purple">(contact@dallan.ca)</span> for any
      inquiries. Thank you for taking the time to check out my portfolio!
      
      </p>
  
  </div>
  </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="./lib/typewriter.js"></script>
	 <script>
	

	$(function() {
    $(".typewriter").typewriter({'speed':30});
  });
  </script>