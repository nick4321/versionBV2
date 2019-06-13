$(document).ready(main);

var contador = 1;

function main() {
  $('.menu-bar').click(function () {
    if (contador == 1) {
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }
  });
}
/**
$(document).ready(function () {
  $("#borrar").click(borrarImg);
  $("#file").change(mostrar);


});
//calendario
 * 
 function borrarImg() {
   $("#img").attr("src", "");
  }
  
  function mostrar() {
    var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    }
  }
}
 */
//pedidos
function crear(obj) {
  var pedido = document.getElementById('pedido').value;

  if (pedido != ("")) {
    var db = firebase.firestore();
    db.collection("pedidos").add({
      peticiones: pedido,
    })
      .then(function (docRef) {
        alert("el pedido fue enviado")
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
    document.getElementById('pedido').value = ("");
  }
}
