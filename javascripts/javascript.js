// JAVASCRIPT EXAMEN PRIMERA EVALUACIÓN APLICACIONES WEB
// DAVID MARTOS RUIZ 2º SMR

// BARRA DE NAVEGACIÓN
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }