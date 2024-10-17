import { doSomeMagic } from "../src";
import { test, expect } from "@playwright/test";

test.describe("It's the end of the world", () => {
  test("as we know it", () => {
    expect(doSomeMagic()).toBe("Here is my magic, 2 + 3 is 5 😒");
  });
});
