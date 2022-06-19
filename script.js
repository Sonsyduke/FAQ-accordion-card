const accordion_btns = document.querySelectorAll(".accordion-header");
const accordion_contents = document.querySelectorAll(".accordion-body");

accordion_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    accordion_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        accordion_btns.forEach((btn) => btn.classList.remove("active"));
      }
    });
    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

// window.onclick = (e) => {
//   if (!e.target.matches(".accordion-header")) {
//     accordion_btns.forEach((btn) => btn.classList.remove("active"));
//     accordion_contents.forEach((acc) => acc.classList.remove("active"));
//   }
// };
