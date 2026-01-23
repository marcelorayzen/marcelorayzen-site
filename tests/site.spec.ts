import { test, expect } from "@playwright/test";

test.describe("Site Marcelo Rayzen", () => {
  test("deve carregar a pagina inicial e exibir secoes principais", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Sobre mim" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "O que eu entrego" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Projetos em destaque" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Cases em destaque" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Arquitetura & QA" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Servi/i })).toBeVisible();
  });

  test("deve navegar para a pagina de cases e voltar", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Ver cases completos" }).click();
    await expect(page).toHaveURL(/case-lgpd-ia/);
    await expect(page.getByRole("heading", { name: /Cases atualizados/i })).toBeVisible();

    await page.getByRole("link", { name: /Voltar para a p/i }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole("heading", { name: "Sobre mim" })).toBeVisible();
  });

  test("deve exibir links principais no hero", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", /github.com/);
    await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", /linkedin.com/);
    await expect(page.getByRole("link", { name: /WhatsApp/i })).toHaveAttribute(
      "href",
      /wa\.me\/5511993882374/
    );
  });

  test("deve navegar para a pagina de arquitetura e qa", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Ver página completa" }).click();
    await expect(page).toHaveURL(/arquitetura-qa/);
    await expect(page.getByRole("heading", { name: "Arquitetura & QA" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Critérios de Aceite" })).toBeVisible();
  });
});
