import{test, expect} from '@playwright/test';
import { ProductPage } from './product-page';
import { LoginPage } from './login-page';

 test.describe('Product Page Functionality', () => {
  test('should allow a user to add a product to the cart', async ({ page }) => {
   
    // Create page object instances
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    // Step 1: Navigate to Sauce Demo and login
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 2: Verify user is on the Product page
    await expect(await productPage.getPageTitle()).toBe('Products');

    // Step 3: Add product to cart
    await productPage.addProductToCart();

    // Step 4: Go to cart
    await productPage.goToCart();

    // Step 5: Verify cart page URL
    await expect(page).toHaveURL(/.*cart.html/);
    });
});