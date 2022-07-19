// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const lista = [
    "julian",
    26,
    true,
    fechaNacimiento = new Date(1996, 3, 21),
    libro = {
    "titulo": 'filosofia a martillazos',
    "autor": 'Dario Z',
    "fecha": new Date(2019, 3, 21),
    "url" : 'www.filosofiaamartillazos.com'
} 
]
//bucle for
// for (let i=0 ; i<lista.length;i++) {
//     console.log(lista[i]);
// }
//bucle for of
for (const i of lista){
    console.log(i)
}
//bucle for in
console.log("***********************************")

for (const i in lista){
    console.log(i)
}

//`${i}`



