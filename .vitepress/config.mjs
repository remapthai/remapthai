import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/',
  title: "Thai ECU Remap",
  description: "รวมข้อมูลรีแมพ ECU มอเตอร์ไซค์",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: 'logo-mini.svg',

    nav: [
      { text: "หน้าแรก", link: "/" },
      { text: "การใช้งาน TunerPro", link: "/tunerpro-basic" },
      { text: "คลังรหัส ECU", link: "/ecu-data" },
    ],

    outlineTitle: "หัวข้อ",

    appearance: "force-dark",

    footer: {
      message: "",
      copyright: "Copyright © 2024 | Thai ECU Remap",
    },
  },

  head: [['link', { rel: 'shortcut icon', href: 'logo-mini.svg' }]]
});