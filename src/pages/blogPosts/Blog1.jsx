import image1 from "../../assets/BlogAssets/Banner/1.png";
import profilePic from "../../assets/profilePic.png";
import { Footer, Nav } from "../../components/index.js";
import { socialLinks } from "../../constants/index.js";

const Blog1 = () => {
  // Footer content configuration
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
              src={image1}
              alt="blog1"
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
              Date: 24/12/2024
            </span>
            </div>
          </div>

          {/* Blog Title */}
          <div id="Main Blog">
            <h1 className="text-6xl font-bold mb-6">
              How to Install and Use TailwindCSS for Your Next React Project
            </h1>

            {/* Introduction */}
            <div id="Initial Content">
              <p className="mt-7 text-xl">
                TailwindCSS is a Utility-First CSS framework that allows
                developers to style HTML without external CSS. It provides utility
                classes that can be combined to build custom designs.
              </p>

              <h2 className="mt-7 text-3xl font-semibold">
                Key Features of TailwindCSS
              </h2>
              <ul className="list-disc pl-6 mt-4 text-xl space-y-2">
                <li>
                  <strong className="underline">Utility-first approach</strong>:
                  Tailwind provides utility classes for building custom designs.
                </li>
                <li>
                  <strong className="underline">Responsive design</strong>:
                  TailwindCSS makes every design responsive by default, with
                  utility classes to enhance responsiveness.
                </li>
                <li>
                  <strong className="underline">Customizability</strong>:
                  Customize Tailwind easily through the `tailwind.config.js` file.
                </li>
                <li>
                  <strong className="underline">Utility-based design</strong>:
                  Minimize the need for custom CSS by using utility classes
                  directly in HTML or JSX.
                </li>
                <li>
                  <strong className="underline">Built-in plugins</strong>:
                  Tailwind offers plugins for forms, typography, and custom
                  colors, which are easily extendable.
                </li>
                <li>
                  <strong className="underline">Lightweight</strong>: Tailwind
                  removes unused CSS classes through its purge feature, keeping
                  build sizes small.
                </li>
                <li>
                  <strong className="underline">Focus on content</strong>:
                  Tailwind’s utilities focus on the content, enabling faster
                  development.
                </li>
              </ul>

              <p className="mt-7 text-xl">
                These features make TailwindCSS perfect for rapid development,
                while ensuring that your styles are modular, scalable, and easy to
                manage. It eliminates the hassle of external CSS files and
                improves the overall development process.
              </p>
            </div>

            {/* Installation Procedure */}
            <div id="Installation Procedure" className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">
                Installation Procedure
              </h2>

              <ol className="list-decimal ml-6 mt-4 text-xl space-y-4">
                <li>
                  Make a new project and rename it in the code editor of your
                  choice.
                </li>
                <li>Open the terminal in your project directory.</li>
                <li>Run the following command:</li>

                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre data-prefix=">" className="text-gray-400">
                  <code className="text-blue-400">
                    npm create vite@latest ./ -- --template react
                  </code>
                </pre>
                </div>

                <li>
                  You will be prompted to install Vite. Press <strong>Y</strong>{" "}
                  to proceed.
                </li>

                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre data-prefix="$" className="text-yellow-400">
                  <code className="text-yellow-400">
                    Need to install the following packages:
                  </code>
                </pre>
                  <pre data-prefix="$" className="text-yellow-400">
                  <code className="text-yellow-400">create-vite@6.1.1</code>
                </pre>
                  <pre data-prefix="$" className="text-yellow-400">
                  <code className="text-yellow-400">Ok to proceed? (y) y</code>
                </pre>
                </div>

                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre data-prefix="✓" className="text-green-400">
                  <code className="text-green-400">
                    Current directory is not empty. Please choose how to
                    proceed: » Remove existing files and continue
                  </code>
                </pre>
                  <pre data-prefix="✓" className="text-green-400">
                  <code className="text-green-400">
                    Select a framework: » React
                  </code>
                </pre>
                  <pre data-prefix="✓" className="text-green-400">
                  <code className="text-green-400">
                    Select a variant: » JavaScript + SWC
                  </code>
                </pre>
                </div>

                <li>After Performing the above steps, install TailwindCSS</li>
                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre data-prefix=">" className="text-gray-400">
                  <code className="text-blue-400">
                    npm install -D tailwindcss postcss autoprefixer
                  </code>
                </pre>
                  <pre data-prefix=">" className="text-gray-400">
                  <code className="text-blue-400">npx tailwindcss init -p</code>
                </pre>
                </div>

                <li>Now paste the given code in the file &#34;tailwind.config.js&#34;</li>
                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre className="text-gray-400">
                  <code className="text-orange-400">
                    {`/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}
                  </code>
                </pre>
                </div>

                <li>
                  Add the Tailwind directives to the CSS file (./src/index.css)
                </li>
                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre className="text-gray-400">
                  <code className="text-orange-400">
                    {`@tailwind base;
  @tailwind components;
  @tailwind utilities;`}
                  </code>
                </pre>
                </div>

                <li>
                  Start Using Tailwind in your Projects (App.jsx example below)
                </li>
                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre className="text-gray-400">
                  <code className="text-orange-400">{`export default function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    )
  }`}
                  </code>
                </pre>
                </div>

                <li>Run the Build Process</li>
                <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
                <pre data-prefix=">" className="text-gray-400">
                  <code className="text-blue-400">npm run dev</code>
                </pre>
                </div>
              </ol>
            </div>

            <div id="How to use TailwindCSS" className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">How to use TailwindCSS</h2>
              <p className="text-xl">
                For detailed instructions, visit the{" "}
                <a
                    href="https://tailwindcss.com/docs/installation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-400"
                >
                  TailwindCSS Documentation
                </a>.
              </p>
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

export default Blog1;