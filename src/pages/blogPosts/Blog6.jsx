import image6 from "../../assets/BlogAssets/Banner/6.png";

import profilePic from "../../assets/profilePic.png";
import { Footer, Nav } from "../../components/index.js";
import { socialLinks } from "../../constants/index.js";

const Blog6 = () => {
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
                    src={image6}
                    alt="Blog6"
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
                        The Art of Writing Reusable Code
                    </h1>

                    {/* Introduction */}
                    <div id="Initial Content">
                        <p className="mt-7 text-xl">
                            Writing reusable code is a key skill for developers. It not only saves time but also ensures consistency and reduces errors in the long run. In this blog, we will explore some best practices for creating reusable code, supported by examples.
                        </p>
                    </div>

                    <div id="Best Practices" className="mt-10">
                        <h2 className="text-3xl font-semibold">
                            1. Use Functions and Methods
                        </h2>
                        <p className="text-xl mt-2">
                            Functions allow you to encapsulate a block of code and reuse it multiple times. Keep them small and focused on a single task.
                        </p>
                        <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`def greet_user(name):\n  return f"Hello, {name}!"\n\n   # Reusing the function\n    greet_user("Bruno")\n   greet_user("John")`}</code>
              </pre>
                        </div>

                        <h2 className="text-3xl font-semibold mt-8">
                            2. Modularize Your Code
                        </h2>
                        <p className="text-xl mt-2">
                            Split your code into smaller modules or files that focus on specific functionalities. This makes your codebase easier to maintain.
                        </p>
                        <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`# File: math_utils.py\ndef add(a, b):\n  return a + b\n\ndef subtract(a, b):\n  return a - b\n\n# Main code\nfrom math_utils import add\nprint(add(10, 5))`}</code>
              </pre>
                        </div>

                        <h2 className="text-3xl font-semibold mt-8">
                            3. Use Constants and Config Files
                        </h2>
                        <p className="text-xl mt-2">
                            Store frequently used values or settings in constants or configuration files to avoid hardcoding them.
                        </p>
                        <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`# config.py\nDATABASE_URL = "localhost:5432"\n\n# main.py\nfrom config import DATABASE_URL\nprint(DATABASE_URL)`}</code>
              </pre>
                        </div>

                        <h2 className="text-3xl font-semibold mt-8">
                            4. Follow DRY (Don&#39;t Repeat Yourself)
                        </h2>
                        <p className="text-xl mt-2">
                            Avoid duplicating code by abstracting repetitive logic into reusable components.
                        </p>
                        <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`# Without DRY\nprint("Welcome, Bruno!")\nprint("Welcome, John!")\n\n# With DRY\ndef welcome_user(name):\n  print(f"Welcome, {name}!")\n\nwelcome_user("Bruno")\nwelcome_user("John")`}</code>
              </pre>
                        </div>

                        <h2 className="text-3xl font-semibold mt-8">
                            5. Document Your Code
                        </h2>
                        <p className="text-xl mt-2">
                            Proper documentation helps others (and your future self) understand how to use your code.
                        </p>
                        <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`def calculate_area(radius):\n  \"\"\"Calculate the area of a circle given its radius.\"\"\"\n  return 3.14 * radius ** 2`}</code>
              </pre>
                        </div>
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

export default Blog6;
