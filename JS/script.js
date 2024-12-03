let clan = document.querySelector('#clan');
let jutsu = document.querySelector('#jutsu');
let chakra = document.querySelector('#chakra');
let aldea = document.querySelector('#aldea');
let estado = document.querySelector('#estado');
let rango = document.querySelector('#rango');
let equipo = document.querySelector('#equipo');
let nombre = document.querySelector('#nombre');
//Obtener datos del form
const buscador = document.querySelector('#buscador');

buscador.addEventListener('submit',(buscar) =>{
	buscar.preventDefault();
	const personaje = document.querySelector('#personaje').value;
	const resultado = document.querySelector('#resultado')
	
//API
const APIurl = 'https://narutodb.xyz/api/character/search?name=' + personaje;

fetch(APIurl)
.then((response) =>{
	return response.json();
})
.then((data)=>{
	console.log('Datos obtenidos')
	console.log(data)
//Variable para los jutsus
num = Math.round(Math.random()*10)

//Asignacion de valores
resultado.textContent = 'Tu personaje buscado es: '
clan.textContent = 'Clan: '+ data.personal.clan;
jutsu.textContent = 'Jutsus: '+ data.jutsu[num];
chakra.textContent = 'Afinidad de Chakra: '+ data.natureType[0];
aldea.textContent = 'Aldea: '+ data.personal.affiliation[0]
estado.textContent = 'Estado actual: '+ data.personal.occupation;
equipo.textContent = 'Equipo: '+ data.personal.team[num]
nombre.textContent = data.name;

})
//Cargar imagen
num1 = Math.round(Math.random()*1)
fetch(APIurl)
  .then(response => response.json())
  .then(data => {
    const imagenUrl = data.images[num1];

    const imgElemento = document.getElementById('imagen');
    imgElemento.src = imagenUrl;
  })
})
