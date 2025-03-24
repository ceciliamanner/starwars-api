import { fetchFilms } from "./fetchFilms";
import { fetchPeople } from "./fetchPeople";
import { fetchPlanets } from "./fetchPlanets";
import { fetchVechicles } from "./fetchVehicles";

const filmButton = document.querySelector(".category__button--films");
const peopleButton = document.querySelector(".category__button--people");
const planetButton = document.querySelector(".category__button--planets");
const vechicleButton = document.querySelector(".category__button--vehicles");


filmButton.addEventListener("click", fetchFilms);
peopleButton.addEventListener("click", fetchPeople); 
planetButton.addEventListener("click", fetchPlanets); 
vechicleButton.addEventListener("click", fetchVechicles);

