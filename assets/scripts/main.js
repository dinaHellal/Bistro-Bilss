document.getElementById("moon").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("moon").src = "assets/icons/9254147_moon_crescent_night_mode_dark_icon.png";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("moon").src = "assets/icons/430079_brightness_sun_icon.png";
  }
};

  function goToPage() {
    window.location.href = "book.html"; 
  }
  function goToPage() {
    window.location.href = "menu.html"; 
  }
