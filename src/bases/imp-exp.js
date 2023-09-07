import superHeroes from "../data/heroes";
export const getExpHeroById = (id) => (superHeroes.find(hero => hero.id === id))
export const getExpHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)


const apiKey = 'iDKPQc1sgYq821ZAuRGrwcijgE4FPkUT'
import axios from "axios";
const giphyApiImport = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})
export default giphyApiImport