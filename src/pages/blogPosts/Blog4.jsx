import image4 from "../../assets/BlogAssets/Banner/4.png";

import profilePic from "../../assets/profilePic.png";
import { Footer, Nav } from "../../components/index.js";
import { socialLinks } from "../../constants/index.js";

const Blog4 = () => {
    const footerContent = {
        profileImage: profilePic,
        Message: "All Rights Reserved By BrunoGG",
        links: socialLinks,
    };
    return (
      <main className="bg-black min-h-screen text-white">
        <Nav />

        {/* Banner Image Section */}
        <div className="relative w-full h-[350px] overflow-hidden">
          <img
            src={image4}
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
                Date: 25/12/2024
              </span>
            </div>
          </div>

          {/* Blog Title */}
          <div id="Main Blog">
            <h1 className="text-6xl font-bold mb-6">
              How to Use Environment Variables in Python
            </h1>

            {/* Introduction */}
            <div id="Initial Content">
              <p className="mt-7 text-xl">
                Environment variables are an essential part of configuring and
                securing your applications. They allow you to manage sensitive
                data, like API keys and database credentials, without hardcoding
                them into your source code.
              </p>

              <h2 className="mt-7 text-3xl font-semibold">
                Key Benefits of Environment Variables
              </h2>
              <ul className="list-disc pl-6 mt-4 text-xl space-y-2">
                <li>
                  <strong className="underline">Security</strong>: Keeps
                  sensitive data like passwords and API keys out of your
                  codebase.
                </li>
                <li>
                  <strong className="underline">Portability</strong>: Allows
                  applications to adapt easily across development, staging, and
                  production environments.
                </li>
                <li>
                  <strong className="underline">Ease of Management</strong>:
                  Simplifies configuration by externalizing settings.
                </li>
              </ul>
            </div>

            <div id="Using Environment Variables" className="mt-10">
              <h2 className="text-3xl font-semibold">
                Using Environment Variables
              </h2>
              <ol className="list-decimal ml-6 mt-4 text-xl space-y-4">
                <li>
                  Create a `.env` file in your project directory to store your
                  variables:
                  <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                    <pre className="text-gray-400">
                      <code className="text-green-400">

    {`API_KEY=your-api-key
  DATABASE_URL=your-database-url`}
                      </code>
                    </pre>
                  </div>
                </li>

                <li>
                  Install the <strong>python-dotenv</strong> library to load the
                  `.env` file:
                  <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                    <pre data-prefix=">" className="text-gray-400">
                      <code className="text-blue-400">
                        pip install python-dotenv
                      </code>
                    </pre>
                  </div>
                </li>

                <li>
                  Use the following code to load and access environment
                  variables:
                  <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                    <pre className="text-gray-400">
                      <code className="text-orange-400">{`import os
  from dotenv import load_dotenv

  load_dotenv()  # Load environment variables from the .env file

  api_key = os.getenv("API_KEY")
  db_url = os.getenv("DATABASE_URL")

  print(f"API Key: {api_key}")
  print(f"Database URL: {db_url}")`}
                      </code>
                    </pre>
                  </div>
                </li>

                <li>
                  For more details on managing environment variables, visit the{" "}
                  <a
                    href="https://github.com/theskumar/python-dotenv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-400"
                  >
                    python-dotenv documentation
                  </a>
                  .
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

export default Blog4;
