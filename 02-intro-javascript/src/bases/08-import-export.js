import heroes,{ owners } from "../Data/heroes";

export const getHeroeById = (id)=> heroes.find(e => e.id === id);
export const getHeroeByOwner = (Owner) => heroes.filter(e => Owner === e.owner );




