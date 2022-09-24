const express = require('express');
const { port } = require('./config.json');
const parseUrl = require('body-parser');
const fs = require("fs");

const app = express();

let encodeUrl = parseUrl.urlencoded({ extended: false });

function log(thing) {
    let data = fs.readFileSync("logs/access.log");
    fs.writeFile("logs/access.log", data + "\n" + thing, function(err) {
        if (err) return console.log(err);
        console.log(thing);
    });
}


app.use(express.static("public"));

app.get('/', (request, response) => {
    log("Demande d'accès au site par " + request.ip)
    return response.sendFile('index.html', {root: '.'});
});


app.post('/', encodeUrl, (req, res) => {
    let userID = req.body["userID"][0];
    log("Vote envoyé par " + userID + " adresse IP: " + req.ip);
    let voteData = ""
    for (let i = 0; i < req.body["title"].length; i++) {
        let noteTitre = parseInt(req.body["title"][i]);
        let noteDesc = parseInt(req.body["description"][i]);
        let notePhoto = parseInt(req.body["photo"][i]);
        let data = noteTitre + noteDesc + notePhoto;
        voteData += data.toString() + "\n";
    fs.writeFile("scores/" + userID + ".txt", voteData, function(err) {
        if (err) return console.log(err);
        console.log('OUAAAAAAAIS');
    });
    }

    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

app.listen(port, () => console.log(`Le serv écoute sur http://176.159.155.219:${port}`));