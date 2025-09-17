import { defineConfig, presetIcons, presetWind4, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        mdi: () => import("@iconify-json/mdi/icons.json").then((i) => i.default),
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      background: "var(--vp-c-bg)",
      "background-block": "var(--vp-c-bg-soft)",
      text: "var(--vp-c-text-1)",
      "text-secondary": "var(--vp-c-text-2)",
      "text-tertiary": "var(--vp-c-text-3)",
      indigo: "var(--vp-c-indigo-2)",
      purple: "var(--vp-c-purple-1)",
      yellow: "var(--vp-c-yellow-1)",
      red: "var(--vp-c-red-1)",
      green: "var(--vp-c-green-1)",
      gray: "var(--vp-c-gray-1)",
    },
  },
});
