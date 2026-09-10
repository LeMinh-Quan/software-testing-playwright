import type { Page, Locator } from '@playwright/test';
import { HeaderComponent } from './components/HeaderComponent.js';

export class InventoryPage {
  readonly page: Page;
  readonly header: HeaderComponent;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
  }

  async addItemToCart(productName: string): Promise<void> {
    const item = this.inventoryItems.filter({ hasText: productName });
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeItemFromCart(productName: string): Promise<void> {
    const item = this.inventoryItems.filter({ hasText: productName });
    await item.getByRole('button', { name: 'Remove' }).click();
  }

<<<<<<< HEAD
  getItemButton(productName: string): Locator {
    return this.inventoryItems.filter({ hasText: productName }).getByRole('button');
  }

  async goToCart(): Promise<void> {
    await this.header.openCart();
  }
}
=======
  async goToCart(): Promise<void> {
    await this.header.openCart();
  }
  
  getItemButton(productName: string): Locator {
    return this.inventoryItems.filter({ hasText: productName }).getByRole('button');
  }
}
>>>>>>> 17c1acf880b9c4d654bb936a070cb9bad37a7e9c
