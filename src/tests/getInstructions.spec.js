import { describe, it, expect } from "vitest";
import { getInstructions } from "../utils/getInstructions";

describe("getInstructions", () => {
  it("returns an array of instructions for a given cocktail", () => {
    const cocktail = {
      strInstructions:
        "Shake well. Serve chilled. Garnish with a slice of lemon.",
    };
    const expectedInstructions = [
      "1. Shake well",
      "2. Serve chilled",
      "3. Garnish with a slice of lemon",
    ];
    expect(getInstructions(cocktail)).toEqual(expectedInstructions);
  });
});
