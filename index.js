//const dadinhos = await Response.json();
//console.log(dadinhos)

async function getDataApiPhrase() {
  const resp = await fetch("https://api.adviceslip.com/advice");

  const data = await resp.json();

  //console.log(data);

  document.getElementById("phrase").innerText = data.slip.advice;
}

async function getDataTheApiCat() {
  const resp = await fetch("https://api.thecatapi.com/v1/images/search");

  const data = await resp.json();

  console.log("dados da api de gatinho: ", data);

  document.getElementById("cat-with-phrase").src = data[0].url;
}

getDataApiPhrase();
getDataTheApiCat();
