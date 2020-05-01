window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("switch").addEventListener("click", function () {
    if (document.getElementById("switch").checked) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  });

  const links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const id = link.getAttribute("href").replace("#", "");
      const elemY = document.getElementById(id).offsetTop - 20;
      const scrollY = window.pageYOffset;
      const top = elemY - scrollY;

      window.scroll({
        top: top,
        behavior: "smooth",
      });
    });
  }
});
