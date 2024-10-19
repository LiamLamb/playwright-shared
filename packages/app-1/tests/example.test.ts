import { doSomeMagic } from "../src";
import { test, expect } from "@playwright/test";
import { createDefaultFixture } from "shared/src/fixtures";

const fixture = createDefaultFixture(test);

fixture.describe("It's the end of the world", () => {
  fixture("as we know it", () => {
    expect(doSomeMagic()).toBe("Here is my magic, 2 + 3 is 5 😒");
  });
});