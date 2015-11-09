var $liste = document.getElementById("liste");
var $supprimer = document.getElementById("supprimer");
var $restaurer = document.getElementById("restaurer");

function select(e) {
    e.target.classList.toggle("selected");
}

function supprimer() {
    var i;
    for (i = 0; i < $liste.children.length; i++) {
        if ($liste.children[i].classList.contains("selected")) {
            $liste.children[i].classList.add("poubelle");
        }
    }
}

function restaurer() {
    var i;
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("poubelle");
    }
}

$liste.onclick = select;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;