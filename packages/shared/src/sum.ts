import { test } from "@playwright/test";

interface DefaultFixture {
  date: Date;
}

const defaultFixture = test.extend<DefaultFixture>({
  date: async ({}, use) => {
    await use(new Date());
  },
});

export { defaultFixture };
