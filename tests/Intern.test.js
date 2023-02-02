import {Intern} from "../lib/Intern.js";

// ESM module issue solution for jest.js
// https://www.youtube.com/watch?v=ZnIv8u2-XrA

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern(1, "Brutus Maximus", "intern@company.com", "torvalds");
    expect(e.getRole()).toBe(testValue);
  });