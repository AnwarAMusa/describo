import DescriboBox from "@/components/describo-box";
import Webcam from "@/components/webcam";
import { useState } from "react";

export default async function Describo() {
  // const replicate = new Replicate({
  //     auth: process.env.REPLICATE_API_TOKEN,
  //   });

  //   const [currentView, setCurrentView] = useState(1);

  //   const [llavaOutput, setLlavaOutput] = useState(new Object());

  //   const [selectedFile, setSelectedFile] = useState();
  //   const [isFilePicked, setIsFilePicked] = useState(false);

  //   async function changeHandler(event: any) {

  //     setSelectedFile(event.target.files[0]);
  //     setIsFilePicked(true);

  //     console.log(event.target.files[0]);

  //     let headers = new Headers();

  //     headers.append('Content-Type', 'application/json');
  //     headers.append('Accept', 'application/json');
  //     headers.append('Origin','http://localhost:3000');

  //     const out = await replicate.run(
  //       "nateraw/video-llava:a494250c04691c458f57f2f8ef5785f25bc851e0c91fd349995081d4362322dd",
  //       {
  //         input: {
  //           // image_path: "<your_image_path>",
  //           video_path: "https://replicate.delivery/pbxt/JvUeO366GYGoMEHxfSwn39LYgScZh6hKNj2EuJ17SXO6aGER/archery.mp4",
  //           text_prompt: "Describe the products in this media.",
  //         },
  //       }
  //     );
  //     setLlavaOutput(out);
  //   }

  const points = [
    {
      key: "test0",
      timestamp: "12/18/2024",
      name: "Product",
      description: "This is the description of this product",
    },
    {
      key: "test2",
      timestamp: "12/19/2024",
      name: "Product 2",
      description: "This is the description of this product",
    },
  ];

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
        <Webcam />
      </div>
      <div className="pt-6">
        <DescriboBox key="test" points={points} />
      </div>
    </section>
  );
}
