import { openModal } from "./renderData";

const vechicleImages = {
"Sand Crawler":"public/images/sand-crawler.jpeg",
"T-16 skyhopper":"public/images/skyhopper.jpeg",
"X-34 landspeeder":"public/images/landspeeder.jpeg",
"TIE/LN starfighter":"public/images/starfighter.jpeg",
"Snowspeeder":"public/images/snowspeeder.jpeg",
"TIE bomber":"public/images/bomber.jpeg"  
}

export const fetchVechicles = async () => {
    try {
        const response = await fetch("https://swapi.py4e.com/api/vehicles/");
        const data = await response.json(); 
        console.log(data.results);

        const recordCards = document.querySelector(".record-card-container"); 
        recordCards.innerHTML = ""; 

        data.results.slice(0,6).forEach(vehicle => {
            const card = document.createElement("div"); 
            card.classList.add("record-card");

            const imageUrl = vechicleImages[vehicle.name] || "./src/assets/images/default.jpg";

            card.innerHTML = `
                <img src="${imageUrl}" alt="${vehicle.name}" class="film-image"/>
                <h3>${vehicle.name}</h3>
            `;

            recordCards.append(card); 

            card.addEventListener("click", () => {
                openModal(vehicle, "vehicles");
              });

         

        });

        
        
    } catch (error) {
        
    }


};
document.querySelector(".category__button--vehicles").addEventListener("click", fetchVechicles);
