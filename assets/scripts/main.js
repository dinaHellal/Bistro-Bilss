document.getElementById("moon").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("moon").src = "assets/icons/9254147_moon_crescent_night_mode_dark_icon.png";
        localStorage.setItem("theme", "light");

  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("moon").src = "assets/icons/2682848_day_forecast_sun_sunny_weather_icon.png";
        localStorage.setItem("theme", "dark");

  }
};
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  document.getElementById("moon").src = "assets/icons/2682848_day_forecast_sun_sunny_weather_icon.png";
}

document.getElementById("toggle").addEventListener("change", function () {
  const Menu = document.getElementById("menu");
  if (this.checked) {
    Menu.classList.add("open");
  } else {
    Menu.classList.remove("open");
  }
});

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  function goToPage() {
    window.location.href = "book.html";  }
  function goToPage() {
    window.location.href = "menu.html"; } 
      function goToPage() {
    window.location.href = "blog.html"; }
      function goToPage() {
    window.location.href = "contact.html";}


  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  const menuItems = document.querySelectorAll(".menu-item");
  const form = document.getElementById("booking-form");


    form.addEventListener("submit", function (e) {
      e.preventDefault();

      localStorage.setItem("name", document.getElementById("name").value .trim());
      localStorage.setItem("phone", document.getElementById("phone").value.trim());
      localStorage.setItem("date", document.getElementById("date").value.trim());
      localStorage.setItem("time", document.getElementById("time").value.trim());
      localStorage.setItem("persons", document.getElementById("persons").value.trim());

      
      
      Swal.fire({
        icon: 'success',
        title: 'Table Booked',
        text: '✅Your date has been saved ',
        confirmButtonText: 'Ok'
      });
      form.reset();
    });
    window.addEventListener("DOMContentLoaded", function () {
      const dateInput = document.getElementById("date");
      const today = new Date().toISOString().split("T")[0]; 
      dateInput.setAttribute("min", today);


    });

    

  function openDetails(page) {
    window.location.href = page;
  }
  
document.getElementById("name").addEventListener("input", (e) => {
  localStorage.setItem("contact_name", e.target.value);
});

document.getElementById("email").addEventListener("input", (e) => {
  localStorage.setItem("contact_email", e.target.value);
});

document.getElementById("subject").addEventListener("input", (e) => {
  localStorage.setItem("contact_subject", e.target.value);
});

document.getElementById("message").addEventListener("input", (e) => {
  localStorage.setItem("contact_message", e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("name").value = localStorage.getItem("contact_name") || "";
  document.getElementById("email").value = localStorage.getItem("contact_email") || "";
  document.getElementById("subject").value = localStorage.getItem("contact_subject") || "";
  document.getElementById("message").value = localStorage.getItem("contact_message") || "";
});


function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    alert("Message sent successfully!");

    localStorage.removeItem("contact_name");
    localStorage.removeItem("contact_email");
    localStorage.removeItem("contact_subject");
    localStorage.removeItem("contact_message");
  }
}


