import handleError from "./handleError";
import { openModal } from "./renderData";

const planetImages = {
    "Tatooine":"public/images/tatooine.jpeg",
    "Alderaan":"public/images/alderaan.jpeg",
    "Yavin IV":"public/images/YavinIV.jpeg",
    "Hoth": "public/images/hoth.jpeg", 
    "Dagobah":"public/images/Dagobah.jpeg",
    "Bespin":"public/images/bespin.jpeg"
}

export const fetchPlanets = async () => {
    try {
        const response = await fetch("https://swapi.py4e.com/api/planets/"); 
        const data = await response.json(); 
        console.log(data.results);

        const recordCards = document.querySelector(".record-card-container"); 
        recordCards.innerHTML = ""; 

        data.results.slice(0,6).forEach(planet => {
            const card = document.createElement("div"); 
            card.classList.add("record-card"); 

            const imageUrl = planetImages[planet.name] || "./src/assets/images/default.jpg";

            card.innerHTML = `
            <img src="${imageUrl}" alt="${planet.name}" class="card-image"/>
            <h3>${planet.name}</h3>
        `;

        recordCards.append(card); 

        card.addEventListener("click", () => {
            openModal(planet, "planets");
          });


        }); 
        
        
    } catch (error) {
        handleError(fetchPlanets);
        
    }

}
