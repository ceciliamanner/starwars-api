import { fetchFilms } from "./fetchFilms";
import { fetchPeople } from "./fetchPeople";
import { fetchPlanets } from "./fetchPlanets";
import { fetchVechicles } from "./fetchVehicles";

const filmButton = document.querySelector(".category__button--films");
const peopleButton = document.querySelector(".category__button--people");
const planetButton = document.querySelector(".category__button--planets");
const vechicleButton = document.querySelector(".category__button--vehicles");
const allCategoryButtons = document.querySelectorAll(".category__buttons");


filmButton.addEventListener("click", fetchFilms);
peopleButton.addEventListener("click", fetchPeople); 
planetButton.addEventListener("click", fetchPlanets); 
vechicleButton.addEventListener("click", fetchVechicles);

allCategoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      allCategoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

fetchFilms();