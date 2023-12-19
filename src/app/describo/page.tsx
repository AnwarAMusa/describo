"use client";

import DescriboBox from "@/components/describo-box";
import React, { useState } from "react";
import Webcam from "react-webcam";
import { getProductDescrption } from "../actions";

function base64ImageToBlob(str: any) {
  // extract content type and base64 payload from original string
  var pos = str.indexOf(";base64,");
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);

  // decode base64
  var imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for (var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  var blob = new Blob([buffer], { type: type });

  return blob;
}

export default function Describo() {
  const [points, setPoints] = useState([] as any);

  const webcamRef = React.useRef(null);

  setTimeout(async () => {
    if (webcamRef != null && webcamRef.current != null) {
      const image64 = (webcamRef.current as Webcam).getScreenshot();

      if (image64 != null) {
        const imagePath = URL.createObjectURL(base64ImageToBlob(image64));

        let description = getProductDescrption(imagePath);

        console.log(description);
        setPoints([
          {
            key: new Date().valueOf() + "-describo-img",
            timestamp: new Date().toISOString(),
            thumbnail: image64 ?? "",
            description: description ?? "",
          },
          ...points,
        ]);
      }
    }
  }, 3000);

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
