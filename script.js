"use strict";

    function displayAppreciation() {
    var message = document.getElementById('message').value;
    var appreciationMessageDiv = document.getElementById('appreciation-message');
  
  
    var paragraph = document.createElement('p');
    paragraph.textContent = message;
  
   
    appreciationMessageDiv.innerHTML = '';
    appreciationMessageDiv.appendChild(paragraph);
  
   
    appreciationMessageDiv.classList.add('show');
  }
  
  

  
  
  document.addEventListener('DOMContentLoaded', function () {
    const imageUpload = document.getElementById('imageUpload');
    const imageContainer = document.getElementById('imageContainer');
  
   


  
  
    imageUpload.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          imageContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
          imageContainer.style.display = 'block';
        };
  
        reader.readAsDataURL(file);
      }
    });
  });

  

  document.getElementById('submitQuestionnaire').addEventListener('click', function (event) {
    event.preventDefault();
    submitQuestionnaire();
  });
  



  function submitQuestionnaire() {
    const imageContainer = document.getElementById('imageContainer');
    const imgElement = imageContainer.querySelector('img');
  
    if (imgElement && imgElement.src) {
      var selectedDisplay = document.querySelector('input[name="displayPreference"]:checked');
  
      if (selectedDisplay) {
        displayImageBasedOnPreference(selectedDisplay.value);
      } else {
        alert('Please select a display preference before submitting.');
      }
    } else {
      alert('Please upload an image before submitting.');
    }
  }
  
  
  
  
  
  
  function displayImageBasedOnPreference(displayPreference) {
    const imageContainer = document.getElementById('imageContainer');
  
  
    const imageUrl = imageContainer.querySelector('img').src;
  

    imageContainer.style.animation = '';
  
   
    if (displayPreference === 'rotate') {
    
      imageContainer.style.animation = 'rotateImage 5s infinite linear';
    } else if (displayPreference === 'fade') {

      imageContainer.style.animation = 'fadeInOut 3s infinite alternate';
    }
  }



 
  
  document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.getElementById('heroSection');
    const getStartedButton = document.getElementById('getStarted');
    // const mainContent = document.getElementById('mainContent'); // Remove this line

    getStartedButton.addEventListener('click', function (event) {
        event.preventDefault();
        heroSection.style.opacity = 0;

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1000);
    });

    let transitionEndHandled = false;

    heroSection.addEventListener('transitionend', function () {
        if (!transitionEndHandled) {
            heroSection.style.display = 'none';
            transitionEndHandled = true;
        }
    });
});









  
  
  



