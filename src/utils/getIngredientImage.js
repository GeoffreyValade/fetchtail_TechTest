export function getIngredientImage(name) {
  if (!name) {
    throw new Error("No name found");
  }
  const ingredientName = name.trim().replace(" ", "%20");
  return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-medium.png`;
}
