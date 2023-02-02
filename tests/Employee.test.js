import {Employee} from "../lib/Employee.js";

// ESM module issue solution for jest.js
// https://www.youtube.com/watch?v=ZnIv8u2-XrA

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee(1, "Janet Jackson", "manager@company.com", "torvalds");
    expect(e.getRole()).toBe(testValue);
  });