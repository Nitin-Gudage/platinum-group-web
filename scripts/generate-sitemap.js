import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const BASE_URL = "https://platinumgroup.site"; // ⚠️ change later

const pages = [
    "/",
    "/about",
    "/services",
    "/contact",
    "/faq",
];

async function generate() {
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    pages.forEach((url) => {
        sitemap.write({
            url,
            changefreq: "weekly",
            priority: 0.8,
        });
    });

    sitemap.end();

    const data = await streamToPromise(sitemap);

    fs.writeFileSync("./public/sitemap.xml", data.toString());

    console.log("✅ Sitemap generated successfully!");
}

generate();
