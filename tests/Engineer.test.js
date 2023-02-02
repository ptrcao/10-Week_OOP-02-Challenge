import {Engineer} from "../lib/Engineer.js";

// ESM module issue solution for jest.js
// https://www.youtube.com/watch?v=ZnIv8u2-XrA

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer(1, "Linus Torvalds", "eng@company.com", "torvalds");
    expect(e.getRole()).toBe(testValue);
  });