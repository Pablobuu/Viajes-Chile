const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*Cambia el status de Active en la barra de Navegación al link activo*/
$("ul li a").click(function () {
  $("li a").removeClass("active");
  $(this).addClass("active");
});

// Muestra y oculta los párrafos dentro de las tarjetas
$(document).ready(function () {
  $("h5").click(function () {
    $(".card-text").toggle("fast", "linear");
  });
});
