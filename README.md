<img width="1318" alt="Schermafbeelding 2023-02-22 om 11 55 16" src="https://user-images.githubusercontent.com/89298385/220600217-28f950a7-a5a3-44cf-a72d-e8927b5e3a95.png">

# Dynamisch visitekaartje Stefan van der Kort
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Welkom op mijn repository 
Het visitekaartje is gebouwd met behulp van Node, Express & EJS
https://itchy-pig-petticoat.cyclic.app/ 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

### html
In de `index.ejs` heb ik mijn code opgedeelt in verschillende routes die leiden naar de `/partials` map:

```ejs
<%- include('./partials/head') %>
<% console.log(member) %>
<body>

    <%- include('./partials/header.ejs') %>

    <%- include('./partials/main.ejs') %>

    <%- include('./partials/dialog.ejs') %>

<%- include('./partials/foot') %>
```

Om een shout/comment te plaatsen, opent een dialog die d.m.v. `dialog.ejs` word mogelijk gemaakt:

```ejs
<dialog class="dialog-comment">
    <h2>Laat een reactie achter</h2>
    <form action="/" method="post">
        <input type="hidden" name="id" id="id" value="<%= member.id %>" />
        <label for="author">Naam</label>
        <input name="author" id="author" required>
        <label for="text">Opmerking</label>
        <textarea name="text" id="text" cols="30" rows="10" required></textarea>
        <input type="submit" value="Verzenden" />
    </form>
  </dialog>
```

### css
Tijdens het laden van de pagina 


### javascript
Om het dialog te openen heb ik een functie geschreven in de clien-side javascript:

```js

const dialogCommentButton = document.querySelector(".dialog-comment-button");
const dialogComment = document.querySelector(".dialog-comment");

dialogCommentButton.addEventListener("click", function() {
    dialogComment.showModal();
});
```

### node
Om het versturen van data in het formulier mogelijk te maken, heb ik in node, de `index.js`, een statement geschreven die de afhandeling naar de API mogelijk maakt:

```js
// Verstuurd informatie naar de API met behulp van JSON
app.post('/', function (request, response) {
  console.log(request.body)
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(request.body),
  }
  // Koppelt het systeem met de API
  const url = 'https://whois.fdnd.nl/api/v1/shout'

  
  fetchJson(url, headers).then((data) => {
    response.redirect('/')
  })
})
```

## Installatie
Voor dit project heb ik gebruik gemaakt van node en express. Hiervoor heb ik met de terminal in Visual Studio Code een aantal commando's voor gebruikt voor het initialiseren `npm init`, installeren `npm install` en testen `npm start`. In de map `node_modules` heb ik `nodemon` geactiveerd om bij iedere aanpassing die ik op heb geslagen de server te laten verversen. Hiervoor gebruikte ik het commando `npm install nodemon`.

## Gebruik
Gebruikers kunnen op dit visitekaartje een comment/shout achterlaten d.m.v. een formulier.

## Bronnen
 https://neumorphism.io
 
 [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
