const fetch = require('node-fetch');

// Make a fetch request to https://next.json-generator.com/api/json/get/EJPkuFBIV

const url = 'https://next.json-generator.com/api/json/get/EJPkuFBIV';

fetch(url, {
  method: 'get'
})
  .then(response => response.json())
  .then(data => {
      console.log(data)
    })
  .catch(error => console.log("The sky is falling", error));
