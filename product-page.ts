import {Page, Locator} from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly shoppingCartLink: Locator;
  readonly addBackpackToCartButton: Locator;
  readonly pageTitle: Locator;

    constructor(page: Page) {
      this.page = page;
      this.shoppingCartLink = page.locator('.shopping_cart_link');
      this.addBackpackToCartButton = page.locator(
      '[data-test=["#add-to-cart-sauce-labs-backpack"]'
    );
    this.pageTitle = page.locator('.title');
  }

  // Action: Add Sauce Labs Backpack to cart
  async addProductToCart(): Promise<void> {
    await this.addBackpackToCartButton.click();
  }

  // Action: Navigate to shopping cart
  async goToCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  // Getter: Get inventory page title
  async getPageTitle(): Promise<string | null> {
    return await this.pageTitle.textContent();
  }
}