"use server";

import Replicate from "replicate";

export async function getProductDescrption(imagePath: any) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const description: any = await replicate.run(
    "nateraw/video-llava:a494250c04691c458f57f2f8ef5785f25bc851e0c91fd349995081d4362322dd",
    {
      input: {
        image_path: imagePath,
        // video_path: "",
        text_prompt: "Describe the products in this media.",
      },
    }
  );

  return description.title;

  // return 'sample description';
}
