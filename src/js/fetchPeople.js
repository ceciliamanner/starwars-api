import { openModal } from "./renderData";



const peopleImages = {
    "Luke Skywalker":"/images/LukeSkywalker.jpeg",
    "C-3PO":"/images/C-3PO.jpeg",
    "R2-D2":"images/R2-D2.jpeg",
    "Darth Vader":"/images/DarthVader.jpeg", 
    "Leia Organa":"images/LeiaOrgana.jpeg",
    "Owen Lars":"/images/OwenLars.jpeg"
}


export const fetchPeople = async () => {
    try {
        const response = await fetch("https://swapi.py4e.com/api/people/");
        const data = await response.json(); 
        console.log(data.results);
        
        const recordCards = document.querySelector(".record-card-container"); 
        recordCards.innerHTML = ""; 

        data.results.slice(0,6).forEach(person => {
            const card = document.createElement("div"); 
            card.classList.add("record-card");

            const imageUrl = peopleImages[person.name] || "./src/assets/images/default.jpg";

            card.innerHTML = `
                <img src="${imageUrl}" alt="${person.name}" class="film-image"/>
                <h3>${person.name}</h3>
            `;
            recordCards.append(card); 

            card.addEventListener("click", () => {
                openModal(person, "people");
              });


        }); 

        
    } catch (error) {
        console.log("trouble");
        
    }
}
document.querySelector(".category__button--people").addEventListener("click", fetchPeople);

