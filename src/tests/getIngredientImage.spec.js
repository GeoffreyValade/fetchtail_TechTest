import { describe, it, expect } from "vitest";
import { getIngredientImage } from "../utils/getIngredientImage";

describe("getIngredientImage", () => {
  it("returns the correct image URL for a given ingredient", () => {
    const ingredient = "Vodka";
    const expectedUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-medium.png`;
    expect(getIngredientImage(ingredient)).toBe(expectedUrl);
  });

  it("returns an empty string if no ingredient is provided", () => {
    expect(() => getIngredientImage()).toThrow("No name found");
  });
});
