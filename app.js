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

const form = document.querySelector("form");
const senderName = document.getElementById("name");
const senderMessage = document.getElementById("message");
function sendEmail() {
  const subject = `${senderName.value}`;
  const body = `${senderMessage.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mahilyas05@gmail.com",
    Password: "BE368C81C48BCBFABD92F9D7966F6847182F",
    To: "mahilyas05@gmail.com",
    From: "mahilyas05@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "Ok",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
