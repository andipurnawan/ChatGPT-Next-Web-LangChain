import { BuiltinPlugin } from "./typing";

export const EN_PLUGINS: BuiltinPlugin[] = [
  {
    name: "[WIP] Google Search",
    toolName: "web-search",
    lang: "en",
    description: "Web search function tool for search engines.",
    builtin: true,
    createdAt: 1693744292000,
    enable: false,
  },
  {
    name: "DALL·E",
    toolName: "dalle_image_generator",
    lang: "en",
    description:
      "DALL·E is an AI system that can create realistic images and art from a description in natural language.",
    builtin: true,
    createdAt: 1694703673000,
    enable: true,
  },
  {
    name: "[WIP] Stable Diffusion",
    toolName: "stable_diffusion_image_generator",
    lang: "en",
    description:
      "Stable Diffusion text-to-image model.",
    builtin: true,
    createdAt: 1688899480510,
    enable: false,
  },
];
