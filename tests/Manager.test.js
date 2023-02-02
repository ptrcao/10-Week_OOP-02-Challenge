import {Manager} from "../lib/Manager.js";

// ESM module issue solution for jest.js
// https://www.youtube.com/watch?v=ZnIv8u2-XrA

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager(1, "Cleopatra", "manager@company.com", "torvalds");
    expect(e.getRole()).toBe(testValue);
  });