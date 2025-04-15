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
      <header class="modal-header">
        <h2 name="modal-title">{{ selectedCocktail.strDrink }}</h2>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body-ingredients">
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
        <slot name="instructions"
          ><ul>
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
  font-size: 2em;
  font-family: "Caveat Brush", cursive;
  font-weight: 400;
  font-style: normal;
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

.modal-title {
  flex: 1;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
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
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  color: #ffffff;
  display: flex;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body-ingredients {
  position: relative;
  padding: 20px 10px;
}

.modal-body-ingredients ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  gap: 25px;
}

.modal-body-ingredients li {
  margin: 0;
  padding: 0;
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
  padding: 0;
  margin: 0;
  text-align: left;
  gap: 4px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
