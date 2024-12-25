import { useEffect, useState } from "react";
import image3 from "../../assets/BlogAssets/Banner/3.png";
import Step1 from "../../assets/BlogAssets/StepsBlog3/1.png";
import Step2 from "../../assets/BlogAssets/StepsBlog3/2.png";
import Step3 from "../../assets/BlogAssets/StepsBlog3/3.png";
import Step4 from "../../assets/BlogAssets/StepsBlog3/4.png";
import Step5 from "../../assets/BlogAssets/StepsBlog3/5.png";

import profilePic from "../../assets/profilePic.png";
import { Footer, Nav } from "../../components/index.js";
import { socialLinks } from "../../constants/index.js";

const Blog3 = () => {
  const footerContent = {
    profileImage: profilePic,
    Message: "All Rights Reserved By BrunoGG",
    links: socialLinks,
  };

  const [imageIndex, setImageIndex] = useState(0);
  const images = [Step1, Step2, Step3, Step4, Step5];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-black min-h-screen text-white">
      <Nav />

      {/* Banner Image Section */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <img
          src={image3}
          alt="Blog3"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto px-8 lg:px-32 py-8">
        {/* Author Section */}
        <div className="flex items-center mb-6">
          {/* Author Avatar */}
          <div className="avatar online mr-4">
            <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
              <img src={profilePic} alt="Author Avatar" />
            </div>
          </div>

          {/* Author Info */}
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Written by BrunoGG</span>
            <span className="text-md font-semibold text-gray-400">
              Date: 21/12/2024
            </span>
          </div>
        </div>

        {/* Blog Title */}
        <div id="Main Blog">
          <h1 className="text-6xl font-bold mb-6">
            How to Use Google Gemini API in Your Code
          </h1>

          {/* Introduction */}
          <div id="Initial Content">
            <p className="mt-7 text-xl">
              Google&#39;s Gemini is an AI-Powered assistant that can help with
              a variety of tasks. It is built into Gmail, Docs, Sheets and Meet.
            </p>

            <h2 className="mt-7 text-3xl font-semibold">
              Key Features of Gemini API
            </h2>
            <ul className="list-disc pl-6 mt-4 text-xl space-y-2">
              <li>
                <strong className="underline">Multimodal</strong>: Gemini
                supports interleaved sequences of audio, image, text, and video
                as inputs and can produce interleaved text and image outputs.
              </li>
              <li>
                <strong className="underline">Large language models</strong>:
                Gemini learns by &#34;reading&#34; trillions of words, which
                helps it pick up on patterns that make up language.
              </li>
              <li>
                <strong className="underline">Always learning</strong>: Gemini
                learns from your prompts, responses, and feedback.
              </li>
              <li>
                <strong className="underline">Outperforms human experts</strong>
                : Gemini Ultra is the first model to outperform human experts on
                MMLU (massive multitask language understanding).
              </li>
            </ul>

            <p className="mt-7 text-xl">
              Google has also made its API available so that these models can be
              used for making our own code AI powered. In this blog, we will see
              how to use the Gemini API in your code.
            </p>
          </div>

          <div id="How to get the API Key" className="mt-10">
            <h2 className="text-3xl font-semibold">How to get the API Key</h2>
            <ol className="list-decimal ml-6 mt-4 text-xl space-y-4">
              <li>
                Go to{" "}
                <a
                  href="https://ai.google.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-400"
                >
                  This Website
                </a>{" "}
                to get the API Key
              </li>
              <li>
                Click on <strong>Explore Models on Google AI Studio</strong>
              </li>
              <li>
                In Google AI Studio, click on <strong>Get API Key</strong> and
                then <strong>Create API key</strong> and follow the on screen
                instructions
              </li>
              <li>
                Now copy the generated API key and keep it securely somewhere.
                This key will be used to authenticate your requests to the
                Gemini API
              </li>

              <div className="flex items-center justify-center">
                <div className="mockup-window border-white border w-full h-auto max-h-[80vh]">
                  <div className="border-white flex justify-center border-t">
                    <img
                      src={images[imageIndex]}
                      alt="Step"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ol>
          </div>

          {/* Quick Start */}
          <div id="Installation Procedure" className="mt-10">
            <h2 className="text-3xl font-semibold">Quick Start (For Python)</h2>
            <h3 className="text-xl text-gray-400 mt-1">
              Here I will show you how to generate a simple text with a text
              only input
            </h3>
            <ol className="list-decimal ml-6 mt-4 text-xl space-y-4">
              <li>
                To Install Gemini API Library in Python, install the{" "}
                <strong>google-generativeai</strong> package from the following
                command
              </li>
              <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre data-prefix=">" className="text-gray-400">
                  <code className="text-blue-400">
                    pip install -q -U google-generativeai
                  </code>
                </pre>
              </div>

              <li>
                In your Python Code, configure the service with your API key
              </li>
              <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre className="text-gray-400">
                  <code className="text-orange-400">
                    {`  import os
    import google.generativeai as genai

    genai.configure(api_key=os.environ['API_KEY'])`}
                  </code>
                </pre>
              </div>
              <li>
                The simplest way to generate text using the Gemini API is to
                provide the model with a single text-only input, as shown in
                this example:
              </li>
              <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre className="text-gray-400">
                  <code className="text-orange-400">
                    {`  import google.generativeai as genai

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content("Write a story about a magic backpack.")
    print(response.text)`}
                  </code>
                </pre>
              </div>
              <li>
                For more information, go to{" "}
                <a
                  href="https://ai.google.dev/gemini-api/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-400"
                >
                  This Website
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        profileImage={footerContent.profileImage}
        footerMessage={footerContent.Message}
        links={footerContent.links}
      />
    </main>
  );
};

export default Blog3;
