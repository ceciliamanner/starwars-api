const getPropertiesForCategory = (record, category) => {
    switch (category) {
      case "films":
        return {
          "Episode": record.episode_id,
          "Director": record.director,
          "Producer": record.producer,
          "Release Date": record.release_date,
          "Opening Crawl": record.opening_crawl
        };
      case "people":
        return {
          "Height": record.height + " cm",
          "Mass": record.mass + " kg",
          "Hair Color": record.hair_color,
          "Skin Color": record.skin_color,
          "Eye Color": record.eye_color,
          "Birth Year": record.birth_year,
          "Gender": record.gender
        };
      case "planets":
        return {
          "Climate": record.climate,
          "Terrain": record.terrain,
          "Population": record.population,
          "Gravity": record.gravity,
          "Orbital Period": record.orbital_period
        };
      case "vehicles":
        return {
          "Model": record.model,
          "Manufacturer": record.manufacturer,
          "Cost": record.cost_in_credits + " credits",
          "Crew": record.crew,
          "Passengers": record.passengers
        };
      default:
        return { "No info": "No data available" };
    }
  };


export const openModal = (record, category) => {
    const modal = document.querySelector(".property-modal");
    const title = modal.querySelector(".property-modal__title");
    const list = modal.querySelector(".property-list");
    const closeModal = document.querySelector(".property-modal__close-button");

    title.textContent = record.title || record.name; 
    list.innerHTML = ""; 
    const properties = getPropertiesForCategory(record, category);

    for (const [key, value] of Object.entries(properties)) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        list.appendChild(li);
      }
    
  
    modal.classList.add("property-modal--visible");
    
    closeModal.addEventListener("click", () => {
        modal.classList.remove("property-modal--visible");
    }); 
};

 