"use client";

import { useState } from "react";
import Image from "next/image";
import Replicate from "replicate";

export default function Home() {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const [currentView, setCurrentView] = useState(1);

  const [llavaOutput, setLlavaOutput] = useState(new Object());

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  async function changeHandler(event: any) {
    
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);

    console.log(event.target.files[0]);

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    const out = await replicate.run(
      "nateraw/video-llava:a494250c04691c458f57f2f8ef5785f25bc851e0c91fd349995081d4362322dd",
      {
        input: {
          // image_path: "<your_image_path>",
          video_path: "https://replicate.delivery/pbxt/JvUeO366GYGoMEHxfSwn39LYgScZh6hKNj2EuJ17SXO6aGER/archery.mp4",
          text_prompt: "Describe the products in this media.",
        },
      }
    );
    setLlavaOutput(out);
  }

  // let inactiveTabClasses =
  //   "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";
  // let activeTabClasses =
  //   "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";

  return (
    <main>
      {/* <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <button
            onClick={() => setCurrentView(1)}
            aria-current="page"
            className={
              currentView === 1 ? activeTabClasses : inactiveTabClasses
            }
          >
            Video
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setCurrentView(2)}
            className={
              currentView === 2 ? activeTabClasses : inactiveTabClasses
            }
          >
            Image
          </button>
        </li>
      </ul> */}

      <div className={currentView === 2 ? "hidden" : ""}>
        <h2 className="p-5">Describe products from a video or an image</h2>
        <div className="flex items-center justify-center w-full p-5">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-3"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Video File (MAX. 2mb)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => changeHandler(e)}
              accept="video/*, image/*"
            />
          </label>

          <div className="p-5">
            {selectedFile != null &&
            (selectedFile as File).type.includes("image") ? (
              <Image
                src={URL.createObjectURL(selectedFile)}
                alt="test"
                width="500"
                height="500"
              />
            ) : selectedFile != null &&
              (selectedFile as File).type.includes("video") ? (
              <video width="400" controls>
                <source
                  src={URL.createObjectURL(selectedFile)}
                  type={(selectedFile as File).type}
                />
                This browser does not support HTML video.
              </video>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div>{JSON.stringify(llavaOutput)}</div>
    </main>
  );
}
