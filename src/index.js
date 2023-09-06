
const nombre = 'Cristobal'
const apellido = 'Colon'
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

const arreglo = [1,2,3,4]
arreglo.push(5)
const arreglo2 = [...arreglo]
arreglo2.push(6)
const arreglo3 = arreglo2.map( function (x){
    return x * 2
})
arreglo3.push(14)
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

//funciones
const saludar = function(xyz) {
    return `Hola ${xyz}`
}
const nombre2 = 'Perico'
console.log( saludar(nombre2))

const saluego = (parametro = 'Peter') => `Hola ${parametro}`
const parametro = 'Maikel'
console.log(saluego(parametro))

const getUser = () => ({
        uid: 'ABC123',
        username: 'Memeo'
    })
console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman'
    },{
    id: 2,
    name: 'Superman'
}]
const existe = heroes.some((heroe) => heroe.id === 3)
console.log(existe)
const heroe = heroes.find((heroe) => heroe.id === 2)
console.log(heroe.name)

// Desustructuracion de objetos
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}
console.log(person.name)
console.log(person.age)
console.log(person.codeName)

const {age, name, codeName, power = 'Sin poder'} = person
console.log(codeName)
console.log(power)

// const createHero = (person) => {
//     return {
//         id: 12345,
//         name: person.name,
//         age: person.age,
//         codeName: person.codeName,
//         power: person.power,
//     }
// }
const createHero = ({name:nombre, age, codeName, power}) => ({
    id: 12345,
    nombre,
    age,
    codeName,
    power,
})

console.log(createHero(person))

// Desestructuracion de arreglos
const characters = ['Goku', 'Vegeta', 'Trunks']
const [goku, vegeta, trunks, goten = 'Sin valor'] = characters
console.log(goten)

const returnArray = ([a, b]) => {
    return[a, b]
}
const [uno, dos] = returnArray(['ABC', 321])
console.log(uno, dos)

// Importaciones y Exportaciones
import {owners} from './data/heroes'
console.log(owners)
const [dc, marvel] = owners
console.log(marvel)

import superHeroes from './data/heroes'
console.log(superHeroes)

//getHeroById(id) con flecha y usando id
// const getHeroById = (id) => {
//     return superHeroes.find( hero => hero.id === id )
// }
const getHeroById = (id) => (superHeroes.find(hero => hero.id === id))
console.log( getHeroById(2))

//getHeroByOwner DC Marvel
const getHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
console.log( getHeroesByOwner('DC'))

// Exportar funciones
import {getExpHeroById, getExpHeroesByOwner} from './bases/imp-exp'
console.log(getExpHeroById(1))
console.log(getExpHeroesByOwner('Marvel'))

// Promesas
console.log('inicio promesa')
new Promise((resolve, reject) => {
    console.log('cuerpo de la promesa')
    reject('Promesa resuelta con error')
}).then(msg => console.log(msg)).catch(err => console.log(err))
console.log('fin promesa')

// Argumentos a las promesas
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero){
                resolve(hero)
            } else {
                reject('No hay heroe')
            }
        }, 1000);
    });
}
getHeroByIdAsync(3)
    .then(h => console.log(h))
    .catch(console.log)

// Fetch Api
const apiKey = 'iDKPQc1sgYq821ZAuRGrwcijgE4FPkUT'
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(e => console.log(e))

// Axios
import axios from "axios";
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})
giphyApi.get('/random')
    .then(resp => {
        const {data} = resp.data
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })

// Async - Await
const miPromesa = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Tengo un valor en la promesa')
        }, 5000);
    })
}
const medirTiempoAsync = async () => {
    console.log('Iniciando')
    const respuesta = await miPromesa()
    console.log(respuesta)
    console.log('Finalizando')
    return 'Fin de medir tiempo'
}
medirTiempoAsync()

// Async Await Aplicado

