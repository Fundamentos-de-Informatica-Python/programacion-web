
const SUPER_HEROES_URL = "http://localhost:5000/api/super-heroes";

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

	superHeroDiv = document.getElementById("main-container");

	superHeroName = document.createElement("h2");
	superHeroName.innerHTML = superHero["name"];

	superHeroSkill = document.createElement("p");
	superHeroSkill.innerHTML = superHero["skill"];

	superHeroDiv.appendChild(superHeroName);
	superHeroDiv.appendChild(superHeroSkill);

}