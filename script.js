

lucide.createIcons();

const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav button');

function changeScreen(id, button){

  screens.forEach(screen=>{
    screen.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  navButtons.forEach(btn=>{
    btn.classList.remove('active');
  });

  button.classList.add('active');

}

const mealsContainer = document.getElementById('meals');

let meals = JSON.parse(localStorage.getItem('fluxoMeals')) || [];

function renderMeals(){

  mealsContainer.innerHTML = '';

  meals.forEach((meal,index)=>{

    mealsContainer.innerHTML += `

      <div class="meal">

        <div>
          <strong>${meal.name}</strong>
          <p>${meal.desc}</p>
        </div>

        <button onclick="deleteMeal(${index})">
          ✕
        </button>

      </div>

    `;

  });

}

function addMeal(){

  const name = document.getElementById('mealName').value;
  const desc = document.getElementById('mealDesc').value;

  if(!name || !desc){
    return;
  }

  meals.push({
    name,
    desc
  });

  localStorage.setItem(
    'fluxoMeals',
    JSON.stringify(meals)
  );

  renderMeals();

  document.getElementById('mealName').value = '';
  document.getElementById('mealDesc').value = '';

}

function deleteMeal(index){

  meals.splice(index,1);

  localStorage.setItem(
    'fluxoMeals',
    JSON.stringify(meals)
  );

  renderMeals();

}

renderMeals();

