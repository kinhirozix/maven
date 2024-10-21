import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "en-US",
    base: "/maven/",
    title: "Kinhiro's Maven Repository",
    description: "Kinhiro's Maven Repository",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        socialLinks: [
            { icon: "github", link: "https://github.com/kinhirozix/maven" },
        ],
    },
    srcExclude: ["**/README.md"],
});
