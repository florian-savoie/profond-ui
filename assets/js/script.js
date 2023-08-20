document.addEventListener("DOMContentLoaded", function () {
    const clignotant = document.getElementById("clignote2");
    let visible = true;
    clignotant.style.color = "red";
    function toggleOpacity() {
        visible = !visible;
        clignotant.style.opacity = visible ? "1" : "0";
        
    }

    setInterval(toggleOpacity, 800); // Change opacity every 1000 milliseconds (1 second)
});

if (document.getElementById('test')){
    ajouterFeuilleDeStyle('https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css');
    ajouterFeuilleDeStyle('https://floriansavoie.fr/assets/css/style.css');
    ajouterScriptEndBody('https://code.jquery.com/jquery-3.6.0.min.js');
    ajouterScriptHead('https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js');
}

function ajouterFeuilleDeStyle(style) {
    const lienFeuilleDeStyle = document.createElement("link");
    lienFeuilleDeStyle.rel = "stylesheet";
    lienFeuilleDeStyle.href = style; 
    document.head.appendChild(lienFeuilleDeStyle);
}

function ajouterScriptHead(script) {
    const scriptElement = document.createElement("script");
    scriptElement.src = script; 
    document.head.appendChild(scriptElement);
}

function ajouterScriptEndBody(script) {
    const scriptElement = document.createElement("script");
    scriptElement.src = script; 
    const baliseScriptExistante = document.querySelector("derniereDiv");
    document.body.insertBefore(scriptElement, baliseScriptExistante);
}

var structureHTML = `
    <div class="container">
        <div class="row">
            <h1>Titre de niveau 1</h1>
            <h2>Titre de niveau 2</h2>
            <h3>Titre de niveau 3</h3>
            <h4>Titre de niveau 4</h4>
            <h5>Titre de niveau 5</h5>
            <h6>Titre de niveau 6</h6>
        </div>
    </div>
`;
document.getElementById("HTML").innerHTML = structureHTML;
