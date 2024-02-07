let heroes = [["Axe", "Tank"], ["Crystal Maiden", "Support"]];

let nameInput = document.getElementById("heroName");
let classInput = document.getElementById("heroClass");

nameInput.value // "Имя персонажа"
classInput.value // "Класс персонажа"

let newHeroName = nameInput.value;
let newHeroClass = classInput.value;


// Функция, которая отображает героев на странице
function displayHeroes()  {
  let heroesContainer = document.getElementById("heroesContainer");
  heroesContainer.innerHTML = ''; 

  for (let i = 0; i < heroes.length; i++) {
    let heroDiv = document.createElement("div");

    heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;

    heroesContainer.appendChild(heroDiv);
  }
}

displayHeroes();

function addHero() {
  let nameInput = document.getElementById("heroName");
  let classInput = document.getElementById("heroClass");
  let newHeros = [nameInput.value, classInput.value];
  heroes.push(newHeros);
  displayHeroes();

  nameInput.value = "";
  classInput.value = "";
}

document.getElementById("addButton").addEventListener("click", addHero);