import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs';


fetch('https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json')
  .then(response => response.json())
  .then(data => fsPromises.writeFile("./data.json", JSON.stringify(data)))