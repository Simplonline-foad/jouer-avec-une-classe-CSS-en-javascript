var $liste = document.getElementById("liste");

function selectionne(e) {
  // e.target correspond au <li> qui a été cliqué dans le <ul> !
  e.target.classList.toggle("selected");
}

$liste.onclick = selectionne;