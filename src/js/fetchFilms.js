import handleError from "./handleError";
import { openModal } from "./renderData";


const filmImages = {
    "A New Hope": "/images/newHope.jpeg",
    "The Empire Strikes Back": "/images/empireStrikesBack.jpeg",
    "Return of the Jedi": "/images/returnJedi.jpeg",
    "The Phantom Menace": "/images/phantomMenace.jpeg",
    "Attack of the Clones": "/images/attackClones.jpeg",
    "Revenge of the Sith": "/images/revangeSith.jpeg"
}

export const fetchFilms = async () => {
    try {
        const response = await fetch("https://swapi.py4e.com/api/films/");
        const data = await response.json();
        console.log(data.results);

        const recordCards = document.querySelector(".record-card-container"); 
        recordCards.innerHTML = ""; 

        data.results.slice(0,6).forEach(film => {
            const card = document.createElement("div"); 
            card.classList.add("record-card"); 

            const imageUrl = filmImages[film.title] || "./src/assets/images/default.jpg";


             card.innerHTML = `
                <img src="${imageUrl}" alt="${film.title}" class="card-image"/>
                <h3>${film.title}</h3>
            `;

            recordCards.append(card); 

            card.addEventListener("click", () => {
                openModal(film, "films");
              });

        }); 

      
    } catch (error) {
        handleError(fetchFilms); 
    }
    
};


