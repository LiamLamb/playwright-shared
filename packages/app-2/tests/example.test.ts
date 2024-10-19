import { someApp2Magic } from "../src";
import { test, expect } from "@playwright/test";
import { createDefaultFixture } from "shared/src/fixtures";

const fixture = createDefaultFixture(test);

fixture.describe("It's the end of the world", () => {
  fixture("as we know it", () => {
    expect(someApp2Magic()).toBe("Here is my magic, 2 + 3 is 5 😒");
  });
});
