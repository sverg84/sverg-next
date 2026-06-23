import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage accessibility", () => {
  test("has no critical or serious axe violations", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page }).analyze();

    const seriousViolations = results.violations.filter(
      (violation) =>
        violation.impact === "critical" || violation.impact === "serious",
    );

    expect(
      seriousViolations,
      formatViolations(seriousViolations),
    ).toEqual([]);
  });
});

function formatViolations(
  violations: Awaited<ReturnType<AxeBuilder["analyze"]>>["violations"],
): string {
  if (violations.length === 0) {
    return "No critical or serious violations";
  }

  return violations
    .map(
      (violation) =>
        `[${violation.impact}] ${violation.id}: ${violation.help}\n${violation.nodes
          .map((node) => node.html)
          .join("\n")}`,
    )
    .join("\n\n");
}
