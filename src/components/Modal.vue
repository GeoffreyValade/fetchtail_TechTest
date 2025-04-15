<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  selectedCocktail: {
    type: Object,
    required: true,
  },
});

const ingredients = getIngredients(props.selectedCocktail);
const instructions = getInstructions(props.selectedCocktail);
const selectedCocktail = props.selectedCocktail;

function getIngredients(cocktail) {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (!ingredient) {
      break;
    } else {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : null,
      });
    }
  }
  return ingredients;
}

function getIngredientImage(name) {
  const ingredientName = name.trim().replace(" ", "%20");
  return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-small.png`;
}

function getInstructions(cocktail) {
  const instructions = [];
  const instruction = cocktail.strInstructions;

  const instructionParts = instruction.split(".");
  for (let i = 0; i < instructionParts.length; i++) {
    const part = instructionParts[i].trim();
    if (part) {
      instructions.push(i + 1 + ". " + part);
    }
  }
  return instructions;
}

function close() {
  emit("close");
}
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button type="button" class="btn-close" @click="close">x</button>

      <header class="modal-header">
        <h2 name="modal-title">{{ selectedCocktail.strDrink }}</h2>
      </header>

      <section class="modal-body-ingredients">
        <h3 class="section-title">Ingredients</h3>
        <slot name="ingredients"
          ><ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">
              <img
                :src="getIngredientImage(ingredient.name)"
                :alt="ingredient.name"
                width="80"
                height="80"
              />
              <span
                >{{ ingredient.measure ? ingredient.measure + " " : ""
                }}{{ ingredient.name }}</span
              >
            </li>
          </ul>
        </slot>
      </section>

      <section class="modal-body-instructions">
        <slot name="instructions">
          <h3 class="section-title">Instructions</h3>
          <ul>
            <li v-for="(instruction, index) in instructions" :key="index">
              {{ instruction }}.
            </li>
          </ul>
        </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 0;
  padding: 0;
  font-size: 48px;
  font-family: "Caveat Brush", cursive;
  font-weight: 400;
  font-style: normal;
  flex: 1;
  text-align: center;
  font-weight: bold;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.modal {
  background: linear-gradient(
    to bottom,
    rgb(28, 107, 107, 1),
    rgba(3, 37, 53, 1)
  );
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.5);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #eeeeee;
  color: #ffffff;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.section-title {
  margin: 0 0 15px 0;
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  font-family: "Caveat Brush", cursive;
  text-align: center;
}

.modal-body-ingredients {
  position: relative;
  padding: 20px 10px;
}

.modal-body-ingredients ul {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 25px;
}

li {
  font-weight: 500;
  font-size: 18px;
}

.modal-body-ingredients li {
  margin: 0;
  padding: 0;
  max-width: 130px;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.modal-body-instructions {
  padding: 20px 10px;
}

.modal-body-instructions ul {
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 600px;
  padding: 0;
  margin: 0;
  align-items: flex-start;
  text-align: left;
  gap: 10px;
}

.modal-body-instructions li {
  margin: 0 0 0 20px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.17em 0.4em;
  font-weight: 800;
  font-size: 1.5em;
  border-radius: 25%;
  cursor: pointer;
  transition: background-color 0.15s ease;
  z-index: 1;
}

button:hover {
  background-color: #924343;
}
</style>
