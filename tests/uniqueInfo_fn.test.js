
import {uniqueInfo} from "../src/cards.js";
import {Engineer} from "../lib/Engineer.js";

// ESM module issue solution for jest.js
// https://www.youtube.com/watch?v=ZnIv8u2-XrA

test("uniqueInfo() when receiving argument of the engineering subclass should return \"GitHub account:\"", () => {
    const testValue = "GitHub account:";
    const e = new Engineer(1, "Linus Torvalds", "eng@company.com", "torvalds");
    expect(uniqueInfo(e)).toContain(testValue);
  });