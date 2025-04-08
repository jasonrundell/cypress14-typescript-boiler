export interface ViewportConfig {
  width: number;
  height: number;
  name: string;
}

export const viewportSizes: ViewportConfig[] = [
  { width: 320, height: 568, name: "mobile" },
  { width: 640, height: 960, name: "tablet-small" },
  { width: 768, height: 1024, name: "tablet" },
  { width: 1024, height: 768, name: "desktop-small" },
  { width: 1280, height: 720, name: "desktop" },
];

/**
 * Helper function to run tests across different viewport sizes
 * @param testName - Name of the test suite
 * @param testCallback - Callback function containing the tests to run
 */
export const runTestsForViewports = (
  testName: string,
  testCallback: (viewport: ViewportConfig) => void
) => {
  describe(testName, () => {
    viewportSizes.forEach((viewport) => {
      context(
        `Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`,
        () => {
          beforeEach(() => {
            cy.viewport(viewport.width, viewport.height);
            cy.visit("/");
          });

          testCallback(viewport);
        }
      );
    });
  });
};
