import { BuiltinPlugin } from "./typing";

export const EN_PLUGINS: BuiltinPlugin[] = [

  {
    name: "DALL·E",
    toolName: "dalle_image_generator",
    lang: "en",
    description:
      "DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.",
    builtin: true,
    createdAt: 1694703673000,
    enable: false,
  },
  {
    name: "Stable Diffusion",
    toolName: "stable_diffusion_image_generator",
    lang: "en",
    description:
      "Stable Diffusion text-to-image model.",
    builtin: true,
    createdAt: 1688899480510,
    enable: false,
  },
];
