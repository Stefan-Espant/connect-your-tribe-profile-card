// Importeer express uit de node_modules map
import express, { response } from 'express'

const url = 'https://whois.fdnd.nl/api/v1/member/stefanvanderkort'
const data = await fetch(url).then((response) => response.json())
console.log(data.member.name)

// Maak een nieuwe express app aan
const app = express()
 
// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Haalt informatie op uit de API
app.get('/', async function (req, res) {
  const url = 'https://whois.fdnd.nl/api/v1/member/stefanvanderkort';
  const data = await fetch(url).then((response) => response.json());
  res.render('index', data);
});

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

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

// 
async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}