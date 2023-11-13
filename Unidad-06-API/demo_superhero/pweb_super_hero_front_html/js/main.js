
const SUPER_HEROES_URL = "http://localhost:5000/api/super-hero";

function fetchSusperHeroesAPI() {

	axios.get(SUPER_HEROES_URL)
	.then(response => {
		console.log(response.data);
		renderSuperHeroes(response.data);
	})
	.catch(error => {
		console.log(error);
	})
}

// This is a function call
fetchSusperHeroesAPI();


function renderSuperHeroes(superHeroes) {

	for (let i=0 ; i<superHeroes.length ; i++) {
		addElementDOM(superHeroes[i]);
	}

}


function addElementDOM(superHero) {

	superHeroDiv = document.createElement("div");
	superHeroDiv.id = "my-element"

	superHeroName = document.createElement("h2");
	superHeroName.innerHTML = superHero["name"];

	superHeroSkill = document.createElement("p");
	superHeroSkill.innerHTML = superHero["skill"];

	
	superHeroImage = document.createElement("img");
	superHeroImage.src = "img/" + superHero["image"];
	superHeroImage.width = "300";

	superHeroDiv.appendChild(superHeroName);
	superHeroDiv.appendChild(superHeroSkill);
	superHeroDiv.appendChild(superHeroImage);


	superHeroContainer = document.getElementById("main-container");
	superHeroContainer.appendChild(superHeroDiv);

}