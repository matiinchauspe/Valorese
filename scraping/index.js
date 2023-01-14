const { chromium } = require("playwright");
const { writeFile } = require("node:fs/promises");
const path = require("node:path");

const getDataFromThePage = async (page, kind) => {
  const content = await page.textContent(
    "div.tile.is-parent.is-8:has(div.value)"
  );

  const buy = content
    .substring(0, content.indexOf("Venta"))
    .replace("$", " $")
    .split(" ");

  const sell = content
    .substring(content.indexOf("Venta"))
    .replace("$", " $")
    .split(" ");

  return {
    [`dollar-${kind}`]: {
      key: `dollar-${kind}`,
      buy: buy
        ? {
            text: buy[0],
            value: buy[1],
          }
        : null,
      sell: sell
        ? {
            text: sell[0],
            value: sell[1],
          }
        : null,
    },
  };
};

const quotes = [
  {
    kind: "blue",
    url: "https://dolarhoy.com/cotizaciondolarblue",
    checkValue: async ({ page, kind }) => {
      const result = await getDataFromThePage(page, kind);

      return result;
    },
  },
  {
    kind: "oficial",
    url: "https://dolarhoy.com/cotizaciondolaroficial",
    checkValue: async ({ page, kind }) => {
      const result = await getDataFromThePage(page, kind);

      return result;
    },
  },
  {
    kind: "bolsa",
    url: "https://dolarhoy.com/cotizaciondolarbolsa",
    checkValue: async ({ page, kind }) => {
      const result = await getDataFromThePage(page, kind);

      return result;
    },
  },
  {
    kind: "turista",
    url: "https://dolarhoy.com/cotizaciondolarturista",
    checkValue: async ({ page, kind }) => {
      const result = await getDataFromThePage(page, kind);

      return result;
    },
  },
];

const filePath = path.join(process.cwd(), "./db/dolar-values.json");

(async () => {
  const browser = await chromium.launch({ headless: false });
  let results = {};

  for (const quote of quotes) {
    const { checkValue, kind, url } = quote;

    const page = await browser.newPage();
    await page.goto(url);

    const resultValuesPerPage = await checkValue({ page, kind });
    results = { ...results, ...resultValuesPerPage };

    await page.screenshot({ path: `screenshots/${kind}.png` });
    await page.close();
  }
  await writeFile(filePath, JSON.stringify(results, null, 2), "utf-8");

  await browser.close();
})();
