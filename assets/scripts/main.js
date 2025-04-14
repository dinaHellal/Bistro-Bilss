document.getElementById("moon").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("moon").src = "assets/icons/9254147_moon_crescent_night_mode_dark_icon.png";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("moon").src = "assets/icons/2682848_day_forecast_sun_sunny_weather_icon.png";
  }
};
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  function goToPage() {
    window.location.href = "book.html"; 
  }
  function goToPage() {
    window.location.href = "menu.html"; 
  }
  function goToPage() {
    window.location.href = "blog.html"; 
  }
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  const menuItems = document.querySelectorAll(".menu-item");
  const form = document.getElementById("bookingForm");




  window.onload = function () {
    const form = document.getElementById("bookingForm");

    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("phone").value = localStorage.getItem("phone") || "";
    document.getElementById("date").value = localStorage.getItem("date") || "";
    document.getElementById("time").value = localStorage.getItem("time") || "";
    document.getElementById("persons").value = localStorage.getItem("persons") || "1 Person";

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      localStorage.setItem("name", document.getElementById("name").value);
      localStorage.setItem("phone", document.getElementById("phone").value);
      localStorage.setItem("date", document.getElementById("date").value);
      localStorage.setItem("time", document.getElementById("time").value);
      localStorage.setItem("persons", document.getElementById("persons").value);

      Swal.fire({
        icon: 'success',
        title: 'Table Booked',
        text: '✅Your data has been saved in your browser',
        confirmButtonText: 'Ok'
      });
        });
  };

  


  