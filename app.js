const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  positionX = e.clientX;
  positionY = e.clientY;

  cursorDot.style.left = `${positionX}px`;
  cursorDot.style.top = `${positionY}px`;

  cursorOutline.animate(
    { left: `${positionX}px`, top: `${positionY}px` },
    { duration: 500, fill: "forwards" }
  );
});

const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.querySelector(".menu-items");

function toggleMenu() {
  menuItems.classList.toggle("open");
  menuIcon.classList.toggle("open");
}

