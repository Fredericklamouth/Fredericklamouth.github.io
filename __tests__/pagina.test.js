const puppeteer = require("puppeteer");

test("La página debe mostrar 'Hola Mundo'", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hola Mundo</title>
        </head>
        <body>
            <h1>Hola Mundo</h1>
        </body>
        </html>
    `);

    const texto = await page.$eval("h1", el => el.textContent);
    expect(texto).toBe("Hola Mundo");

    await browser.close();
});
