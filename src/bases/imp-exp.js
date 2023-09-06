import superHeroes from "../data/heroes";
export const getExpHeroById = (id) => (superHeroes.find(hero => hero.id === id))
export const getExpHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)