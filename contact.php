<!-- Projects page -->
<div class="animate__animated animate__zoomIn animate__faster window contactWindow" id="contactWindow">
  
  <!-- window header -->
  <div class="window-header portfolioHeader" id="contactWindowHeader">
    Contact me
    
    <!-- window options -->
    <ul class="window-icons">

      <!-- hide window -->
      <li class="window-icon-hover" id="contactWindowHide">
        <img src="./images/icons/hide_icon.png" alt="hide window icon">
      </li>

      <!-- size of window -->
        <!-- maximize -->
        <li class="window-icon-hover" id="contactWindowMax">
          <img src="./images/icons/max_icon.png" alt="maximize window icon">
        </li>
        <!-- minimize -->
        <li class="window-icon-hover" id="contactWindowMin">
          <img src="./images/icons/min_icon.png" alt="minimize window icon">
        </li>

      <!-- close window -->
      <li class="window-icon-close" id="contactWindowClose">
        <img src="./images/icons/icon_close.png" alt="close window icon">
      </li>

    </ul>

  </div>
  
  <!-- contact window content -->
  <div class="contact-content">
  <div class="window-contact-content">
  <div class="contact-form-container">
  
    <!-- page description -->
    <p class="description">
        All messages will be encrypted using my PGP key which can be found <a href="./pgp.txt" class="orange">by clicking here</a>
        Whether it is for future projects or questions about my portfolio. Send me a message.
    </p>

    <!-- contact form -->
    <form onsubmit="return sendData()" aria-label="contact form" class="contact-form">

        <input type="hidden" name="recaptcha_response" id="recaptchaResponse">

        <label for="name" class="sr-only">Name</label>
        <input class="contact-name" type="text" name="name" id="name" placeholder="Name">

        <label for="email" class="sr-only">Email</label>
        <input class="contact-email" type="text" name="email" id="email" placeholder="Email address">

        <label for="message" class="sr-only">Message</label>
        <textarea class="contact-message" name="message" id="message">What's on your mind, friend?</textarea>

        <label for="pgp" class="sr-only">PGP Key</label>
        <textarea class="contact-message pgp-input animate__animated animate__slideInLeft" name="pgp" id="pgp"></textarea>

        <button aria-label="add pretty good privacy key" id="addPgp" class="contact-button contact-pgp">Add PGP</button>
        <button aria-label="remove pretty good privacy key" id="removePgp" class="contact-button contact-pgp">Remove PGP</button>

        <button aria-label="submit contact message to Dallan" class="contact-button contact-submit">Send message</button>

    </form>

  </div>
  </div>
  </div>
  
</div>

<script>
 
function sendData () {
  // (A) GET FORM DATA
  var data = new FormData();
  data.append("name", document.getElementById("name").value);
  data.append("email", document.getElementById("email").value);
  data.append("message", document.getElementById("message").value);
  data.append("pgp", document.getElementById("pgp").value);
  data.append("recaptcha_response", document.getElementById("recaptchaResponse").value);
 
  // (B) INIT FETCH POST
  fetch("./classes/contactForm.php", {
    method: "POST",
    body: data
  })
 
  // (C) RETURN SERVER RESPONSE AS TEXT
  .then((result) => {
    if (result.status != 200) { throw new Error("Bad Server Response"); }
    return result.text();
  })
 
  // (D) SERVER RESPONSE
  .then((response) => {
    const responses = JSON.parse(response);
    
    if(responses != null) {
        alertMessage.style.display = "block";
        alert = `
        <div aria-label="alert message" id="alert" class="alert ${responses['type']}">
            <span class="closeAlert">&times;</span>
            ${responses['message']}
        </div>`
        document.getElementById('alerts').innerHTML = alert
        document.getElementById("name").val = '';
        document.getElementById("email").val = '';
        document.getElementById("pgp").val = '';
    }
  })
 
  // (E) HANDLE ERRORS - OPTIONAL
  .catch((error) => { console.log(error); });
 
  // (F) PREVENT FORM SUBMIT
  return false;
}

const alertMessage = document.getElementById('alerts');

// run this function every 5 seconds which removes the alert if there is one

setInterval(function(){
    const alertClass = document.getElementById('alert');
    if(alertClass) {
    
      alertClass.style.animation = "slideToTopAlert .5s linear 0s 1 normal forwards"; 
      setTimeout(function(){
          alertClass.style.display = "none";
      }, 500);
    }
}, 5000);


// when alert is clicked
alertMessage.addEventListener("click", function(event) {
  if(document.getElementById('alert') != null) {
    const alertClass = document.getElementById('alert');
    alertClass.style.animation = "slideToTopAlert .5s linear 0s 1 normal forwards"; 
    setTimeout(function(){
      alertClass.style.display = "none";
    }, 500);
  }
});

</script>