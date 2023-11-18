import { Tool } from "langchain/tools";
import S3FileStorage from "../../utils/r2_file_storage";

export class StableDiffusionWrapper extends Tool {
  name = "stable_diffusion_image_generator";

  constructor() {
    super();
  }

  /** @ignore */
  async _call(prompt: string) {
    let url = process.env.STABLE_DIFFUSION_API_URL;
    const data = {
      model_id: process.env.STABLE_DIFFUSION_MODEL,
      key: process.env.STABLE_DIFFUSION_API_KEY,
      prompt: prompt,
      negative_prompt:
        process.env.STABLE_DIFFUSION_NEGATIVE_PROMPT ??
        "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
      width: process.env.STABLE_DIFFUSION_WIDTH ?? 720,
      height: process.env.STABLE_DIFFUSION_HEIGHT ?? 720,
      samples: 1,
      num_inference_steps: process.env.STABLE_DIFFUSION_STEPS ?? 20,
      safety_checker: "no",
      enhance_prompt: "yes",
      seed: "None",
      guidance_scale: process.env.STABLE_DIFFUSION_CFG_SCALE ?? 7,
      multi_lingual: "no",
      panorama: "no",
      self_attention: "no",
      upscale: "no",
      embeddings: "embeddings_model_id",
      lora: "lora_model_id",
      webhook: "None",
      track_id: "None",
    };
    console.log(`[${this.name}]`, data);
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    let imageBase64 = json.images[0];
    if (!imageBase64) return "No image was generated";
    const buffer = Buffer.from(imageBase64, "base64");
    const filePath = await S3FileStorage.put(`${Date.now()}.png`, buffer);
    console.log(`[${this.name}]`, filePath);
    return filePath;
  }

  description = `stable diffusion is an ai art generation model similar to dalle-2.
    input requires english.
    output will be the image link url.
    use markdown to display images. like: ![img](/api/file/xxx.png)`;
}
