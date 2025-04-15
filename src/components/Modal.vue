<script setup>
import { getIngredientImage } from "../utils/getIngredientImage";
import { getInstructions } from "../utils/getInstructions";
import { getIngredients } from "../utils/getIngredients";

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
                width="100"
                height="100"
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
  border-radius: 1rem;
  background: var(--bg-modal-color);
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.5);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  position: absolute;
  top: 5%;
  max-height: 90%;
}

.modal-header {
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid var(--text-color);
  color: var(--text-color);
}

.section-title {
  margin: 0 0 15px 0;
  font-size: 32px;
  font-weight: bold;
  color: var(--text-color);
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 18px;
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
  margin-bottom: 1rem;
}

.modal-body-instructions ul {
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 700px;
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
  top: 1rem;
  right: 1rem;
  background-color: var(--btn-color);
  color: white;
  border: none;
  padding: 0;
  width: 36px;
  height: 36px;
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
