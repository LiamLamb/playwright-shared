import {
  TestType,
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
} from "@playwright/test";

interface DefaultFixture {
  date: Date;
}

export const createDefaultFixture = (
  test: TestType<
    PlaywrightTestArgs & PlaywrightTestOptions,
    PlaywrightWorkerArgs & PlaywrightWorkerOptions
  >
) =>
  test.extend<DefaultFixture>({
    date: async ({}, use) => {
      await use(new Date());
    },
  });
