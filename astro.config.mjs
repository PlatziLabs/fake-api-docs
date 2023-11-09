import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const site = "https://fakeapi.platzi.com/";

// https://astro.build/config
export default defineConfig({
  site: "https://fakeapi.platzi.com/",
  integrations: [
    starlight({
      title: "Platzi Fake Store API",
      favicon: "/favicon.png",
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: site + "cover.png?v=1" },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: site + "cover-tw.png?v=1",
          },
        },
        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: true,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500&display=swap",
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://www.googletagmanager.com/gtag/js?id=G-TS6JSW87G9",
            async: true,
          },
        },
        {
          tag: "script",
          content: `window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-TS6JSW87G9');`,
        },
      ],
      logo: {
        src: "./src/assets/logo.png",
      },
      social: {
        github: "https://github.com/PlatziLabs/fake-api-backend",
      },
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
        },
      },
      sidebar: [
        {
          label: "About",
          items: [
            { label: "Introduction", link: "en/about/introduction/" },
            // { label: "Showcase", link: "en/about/showcase/" },
            // { label: "Open Source", link: "en/about/open-source/" },
          ],
        },
        {
          label: "REST API",
          items: [
            { label: "Products", link: "en/rest/products/" },
            { label: "Filter products", link: "en/rest/products-filter/" },
            { label: "Categories", link: "en/rest/categories/" },
            { label: "Users", link: "en/rest/users/" },
            { label: "Auth JWT", link: "en/rest/auth-jwt/" },
            { label: "Files", link: "en/rest/files/" },
            { label: "Swagger Docs", link: "en/rest/swagger/" },
          ],
        },
        {
          label: "GraphQL",
          items: [
            { label: "Products", link: "en/gql/products/" },
            { label: "Filter products", link: "en/gql/products-filter/" },
            { label: "Categories", link: "en/gql/categories/" },
            { label: "Users", link: "en/gql/users/" },
            { label: "Auth JWT", link: "en/gql/auth-jwt/" },
            { label: "Playground", link: "en/gql/playground/" },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "Postman", link: "en/resources/postman/" },
            { label: "Insomnia", link: "en/resources/insomnia/" },
          ],
        },
      ],
      customCss: [
        "@fontsource/ibm-plex-serif/400.css",
        "@fontsource/ibm-plex-serif/600.css",
        "./src/styles/custom.css",
      ],
    }),
  ],
});
