"use client";

import DescriboBox from "@/components/describo-box";
import React, { useState } from "react";
import Replicate from "replicate";
import Webcam from "react-webcam";

export default function Describo() {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const [points, setPoints] = useState([] as any);

  const webcamRef = React.useRef(null);

  setTimeout(async () => {
    if (webcamRef != null && webcamRef.current != null) {
      const imageSrc = (webcamRef.current as Webcam).getScreenshot();
      console.log(imageSrc);
      const description = "";

      // const description = await replicate.run(
      //   "nateraw/video-llava:a494250c04691c458f57f2f8ef5785f25bc851e0c91fd349995081d4362322dd",
      //   {
      //     input: {
      //       image_path: imageSrc,
      //       // video_path: "",
      //       text_prompt: "Describe the products in this media.",
      //     },
      //   }
      // );

      setPoints([
        {
          key: new Date().getMilliseconds() + "-describo-img",
          timestamp: new Date().toISOString(),
          thumbnail: imageSrc ?? "",
          description: description ?? "",
        },
        ...points,
      ]);
    }
  }, 10000);

  return (
    <section className="flex flex-col">
      {/* <div className="py-4">
        <label className="relative inline-flex items-center me-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Green
          </span>
        </label>
      </div> */}
      <div className="pt-6">
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      </div>
      <div className="pt-6">
        <DescriboBox key="describo-history" points={points} />
      </div>
    </section>
  );
}
