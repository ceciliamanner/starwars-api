
function handleError(){
    const recordCards = document.querySelector(".record-card-container");
    const errorContainer = document.querySelector(".error-message");

    
  recordCards.innerHTML = "";
  errorContainer.innerHTML = "";
  errorContainer.style.display = "block";


  const errorText = document.createElement("p");
  errorText.classList.add("error-message__text");
  errorText.textContent = "Could not load data. Please check your connection or try again.";

  errorContainer.appendChild(errorText);

}

export default handleError