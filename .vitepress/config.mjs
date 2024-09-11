import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: "/",
  appearance: 'force-dark',
  title: "Thai ECU Remap",
  description: "รวมข้อมูลรีแมพ ECU มอเตอร์ไซค์",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "logo-mini.webp",

    nav: [
      { text: "หน้าแรก", link: "/" },
      { text: "การใช้งาน TunerPro", link: "/tunerpro-basic" },
      { text: "คลังรหัส ECU", link: "/ecu-data" },
    ],

    outlineTitle: "หัวข้อ",
    returnToTopLabel: "ไปที่ หัวข้อแรก",

    footer: {
      message: "",
      copyright: "Copyright © 2024 | Thai ECU Remap",
    },
  },

  head: [

    // Preconnect to Google's font domain
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    ],

    // Load Google Fonts asynchronously with fetchpriority
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap",
        media: "print",
        onload: "this.onload=null;this.removeAttribute('media');",
        fetchpriority: "high",
      },
    ],

    // Fallback for no-JS
    [
      "noscript",
      {},
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500&display=swap">',
    ],

    [
      "link",
      { rel: "shortcut icon", type: "image/webp", href: "/logo-mini.webp" },
    ],

  ],
});
