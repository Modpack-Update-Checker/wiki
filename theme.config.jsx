import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

/** @type {import("nextra-theme-docs/.").DocsThemeConfig} */
export default {
  logo: (
    <span class="flex flex-row gap-4">
      <img
        class="align-baseline"
        width="24"
        height="24"
        src="/icon.png"
      />
      <span class="hide-logo-text">Modpack Update Checker Wiki</span>
    </span>
  ),
  project: {
    link: "https://github.com/Modpack-Update-Checker/wiki",
  },
  chat: {
    link: "https://discord.gg/s2AtrCEKCn",
  },
  docsRepositoryBase:
    "https://github.com/Modpack-Update-Checker/wiki/blob/main/",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/icon_full.png" />
    </>
  ),
  useNextSeoProps: () => {
    const { route } = useRouter();
    const { frontMatter } = useConfig();

    /** @type {import("next-seo").NextSeoProps} */
    let seoProps = {};

    if (route !== "/" || !frontMatter.title) {
      seoProps.title = `${frontMatter.title} - Modpack Update Checker Wiki`;
    } else {
      seoProps.title = "Modpack Update Checker Wiki";
    }

    seoProps.description =
      frontMatter.description ||
      "The official wiki for Modpack Update Checker.";

    seoProps.openGraph = {
      images: [
        {
          type: "image/png",
          alt: "Cover Image",
          url: `/icon_full.png`,
        },
      ],
    };

    seoProps.twitter = {
      cardType: "app",
    };

    return seoProps;
  },
  darkMode: true,
  nextThemes: {
    // forcedTheme: "dark"
  },
  primaryHue: {
    dark: 290
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
    extraContent: () => {
      return <></>;
    },
  },
  footer: {
    text: (
      <span>
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International{" "}
        {new Date().getFullYear()} ©{" "}
        <a href="https://jab125.dev/" target="_blank">
          Jab125
        </a>
        <br />
      </span>
    ),
  },
};
