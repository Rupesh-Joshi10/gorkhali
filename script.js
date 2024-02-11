window.onload = function() {

  console.log("Gurkha Loaded fearlessly");
    // War Cries

    var warCries = [
      "Ayo Gorkhali!", 
      "Jai Mahakali, Ayo Gorkhali!", 
      "Har Har Mahadev, Gorkhali Ko Jai Ho!"
    ];
  
    var warCryElement = document.getElementById("war-cry");
    var randomWarCryIndex = Math.floor(Math.random() * warCries.length);
    warCryElement.textContent = warCries[randomWarCryIndex];
  
    // Ranks of Nepal Army
    var ranks = [
      "General", 
      "Lieutenant General", 
      "Major General", 
      "Brigadier General",
      "Colonel",
      "Lieutenant Colonel",
      "Major",
      "Captain",
      "Lieutenant",
      "Second Lieutenant",
      "Warrant Officer",
      "Sergeant",
      "Corporal",
      "Lance Corporal",
      "Private"
    ];
  
    var rankElement = document.getElementById("rank");
    var randomRankIndex = Math.floor(Math.random() * ranks.length);
    rankElement.textContent = ranks[randomRankIndex];
  };

// Toggle navigation bar visibility when clicked on the menu icon
document.addEventListener('DOMContentLoaded', function() {
    var navbarToggle = document.getElementById('navbar-toggle');
    var closeNavbar = document.getElementById('close-navbar');
    var nav = document.querySelector('nav');
  
    navbarToggle.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  
    closeNavbar.addEventListener('click', function() {
      nav.classList.remove('show');
    });
  });
  
  