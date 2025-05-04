import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Alwib — Экосистема полезных сервисов",
  description: "Экосистема полезных сервисов",
  head: [["link", { rel: "icon", href: "/alwib.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "Главная", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    logo: "alwib.png",
    socialLinks: [{ icon: "telegram", link: "https://t.me/Qarimansur" }],
  },
});
