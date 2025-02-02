import type { Page } from 'playwright';

export class SettingsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async logout() {
        await this.page.click('.btn-outline-danger');
    }
}
