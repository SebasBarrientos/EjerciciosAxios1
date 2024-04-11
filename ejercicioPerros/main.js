const razas = "https://dog.ceo/api/breeds/list/all";
const fotosRandom = "https://dog.ceo/api/breeds/image/random";
const todasLasfotosDeRazaconcreta = "https://dog.ceo/api/breed/hound/afghan/images"; //
const fotosDeRazaconcreta = "https://dog.ceo/api/breed/hound/images/random"; 

axios
  .get(razas)
  .then((ress) => {
    console.log(ress.data.message);
  })
  .catch((err) => console.error(err));
axios
  .get(fotosDeRazaconcreta)
  .then((ress) => {
    console.log(ress.data.message);
  })
  .catch((err) => console.error(err));

const fotoRandom = () =>
  axios
    .get(fotosRandom)
    .then((ress) => {
      console.log(ress.data.message);
      fotoPerro = ress.data.message;
      mostrarPerroRandom(fotoPerro);
    })
    .catch((err) => console.error(err));

function mostrarPerroRandom(fotoPerro) {
  document.getElementById("fotoRaza").innerHTML = `
    <div class="card mt-3">
    <div class="card-header d-flex justify-content-center">
    <img class ="d-flex justify-content-center" src="${fotoPerro}" alt="" style="height: 300px">
    </div>
    </div>
    `;
}

const fotoRaza = () => {
let raza = prompt ("Dime que raza quieres ver! Recuerda que si es una raza con subraza tienes que poner /. Ejemplo: breed/hound") 
axios
    .get(`https://dog.ceo/api/breed/${raza}/images`)
    .then((ress) => {
      // console.log(ress.data.message);
      let links = ress.data.message;
      mostrarPerrosRaza(links);
    })
    .catch((err) => console.error(err));
  }

function mostrarPerrosRaza(links) {
  // console.log(links);
  links.forEach((link) => {
    // console.log(link);
    document.getElementById("fotoRaza").innerHTML += `
      <div class="card mt-3">
      <div class="card-header d-flex justify-content-center">
      <img class ="d-flex justify-content-center" src="${link}" alt="" style="height: 150px">
      </div>
      </div>
    `;
  });
}

document
  .getElementById("mostrarPerroRandom")
  .addEventListener("click", fotoRandom);
document
  .getElementById("mostrarPerrosRaza")
  .addEventListener("click", fotoRaza);
