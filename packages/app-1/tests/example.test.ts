import { doSomeMagic } from "../src";
import { expect } from "@playwright/test";
import { defaultFixture as test } from "shared";

test.describe("It's the end of the world", () => {
  test("as we know it", () => {
    expect(doSomeMagic()).toBe("Here is my magic, 2 + 3 is 5 😒");
  });
});
