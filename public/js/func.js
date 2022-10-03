async function afficherParticipation(username) {
    // ça sert à avoir les infos!
    let filename = "/../participations/" + username + ".json"
    let response = await fetch(filename);
    let enJson = await response.json();

    let leFormulaire = document.querySelector("form");  // prend le formulaire
    let leBouton = document.querySelector("button");

    // création des différents éléments
    let nom = document.createElement("h2");
    let title = document.createElement("h3");
    let desc = document.createElement("p");
    let photo = document.createElement("img");

    let userIDInput = document.createElement("input");
    let field = document.createElement("fieldset");
    let legend = document.createElement("legend");

    let labTitre = document.createElement("label");
    let noteTitre = document.createElement("input");
    let labDesc = document.createElement("label");
    let noteDesc = document.createElement("input");
    let labPhoto = document.createElement("label");
    let notePhoto = document.createElement("input");
    
    // défini les attributs de chaque éléments
    nom.innerText = username;
    title.innerHTML = enJson.title;
    title.style.fontSize = "2em"
    desc.innerHTML = enJson.description;
    photo.setAttribute("src", enJson.image);
    photo.setAttribute("id", "photo");

    userIDInput.setAttribute("name", "userID");
    userIDInput.setAttribute("id", "userID");
    userIDInput.setAttribute("type", "text");
    userIDInput.style.display = "none";
    field.setAttribute("name", username);
    legend.innerText = username;

    noteTitre.setAttribute("name", "title");
    noteTitre.setAttribute("type", "number");
    noteTitre.setAttribute("max", "1");
    noteTitre.setAttribute("min", "0");
    labTitre.setAttribute("for", "title");
    labTitre.innerText = "Note pour le titre(0 ou 1)(c'est un point bonus): ";

    noteDesc.setAttribute("name", "description");
    noteDesc.setAttribute("type", "number");
    noteDesc.setAttribute("max", "4");
    noteDesc.setAttribute("min", "0");
    labDesc.setAttribute("for", "title");
    labDesc.innerText = "Note pour la description(de 0 à 4): ";

    notePhoto.setAttribute("name", "photo");
    notePhoto.setAttribute("type", "number");
    notePhoto.setAttribute("max", "6");
    notePhoto.setAttribute("min", "0");
    labPhoto.setAttribute("for", "title");
    labPhoto.innerText = "Note pour la photo(de 0 à 6): ";
    
    // affiche sur la page
    leFormulaire.insertBefore(field, leBouton)
    field.appendChild(userIDInput);
    field.appendChild(legend);
    field.appendChild(title);
    field.appendChild(desc);
    field.appendChild(photo);

    field.appendChild(document.createElement("br"));

    field.appendChild(labTitre);
    field.appendChild(noteTitre);

    field.appendChild(document.createElement("br"));

    field.appendChild(labDesc);
    field.appendChild(noteDesc);

    field.appendChild(document.createElement("br"));

    field.appendChild(labPhoto);
    field.appendChild(notePhoto);

    field.appendChild(document.createElement("br"));
}

// afficherParticipation("example").then(() => console.log("Ouais!"));  // ceci est un exemple, il faudra remplacer le example par le nom d'un participant pour l'afficher
