import image5 from "../../assets/BlogAssets/Banner/5.png";

import profilePic from "../../assets/profilePic.png";
import { Footer, Nav } from "../../components/index.js";
import { socialLinks } from "../../constants/index.js";

const Blog5 = () => {
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
          src={image5}
          alt="Blog5"
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
            Top 10 Built-in Functions in Python
          </h1>

          {/* Introduction */}
          <div id="Initial Content">
            <p className="mt-7 text-xl">
              Python has many Built-In Functions that it provides. Here are the
              top 10 used ones in my opinion
            </p>
          </div>

          <div id="Top Built-in Functions" className="mt-10">
            <h2 className="text-3xl font-semibold">
              1. <code>print()</code>
            </h2>
            <p className="text-xl mt-2">
              Used to print anything that is inside the parentheses. It can be a
              string, number, or any other object. With the f strings, its
              functionality can be improved even more.
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`n = 10 # assigning a random value`}</code>
              </pre>
              <pre className="text-gray-400">
                <code className="text-orange-400"></code>
              </pre>
              <pre className="text-gray-400">
                <code className="text-orange-400">{`print("Hello, World!") # can be used to print objects like this`}</code>
              </pre>
              <pre className="text-gray-400">
                <code className="text-orange-400">{`print(n) # For printing variables, remove " " `}</code>
              </pre>
              <pre className="text-gray-400">
                <code className="text-orange-400">{`print(f"The Number Assigned to the variable above is {n}") # For printing objects and then variables easily, use f strings`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`Hello, World`}</code>
              </pre>
              <pre className="text-gray-400">
                <code className="text-green-400">{`10`}</code>
              </pre>
              <pre className="text-gray-400">
                <code className="text-green-400">{`The Number Assigned to the variable above is 10`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              2. <code>len()</code>
            </h2>
            <p className="text-xl mt-2">
              Returns the number of elements in a collection (it can be a list, tuple, string, dictionary, etc.).
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`my_list = [1, 2, 3, 4]
  print(f"The Length of the list is {len(my_list))}"`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`4`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              3. <code>type()</code>
            </h2>
            <p className="text-xl mt-2">
              Returns the data type of the given object.
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`print(type(3.14))  # Output: <class 'float'>`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`<class 'float'>`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              4. <code>abs()</code>
            </h2>
            <p className="text-xl mt-2">
              Returns the absolute value of a number.
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`print(abs(-42))`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`42`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              5. <code>max()</code> and <code>min()</code>
            </h2>
            <p className="text-xl mt-2">
              Returns the maximum and minimum values in a collection.
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`numbers = [3, 9, 1]
  print(max(numbers))  # Output: 9
  print(min(numbers))  # Output: 1`}</code>
              </pre>
            </div><div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`9
  1`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              6. <code>sum()</code>
            </h2>
            <p className="text-xl mt-2">
              Calculates the sum of all items in an iterable.
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`numbers = [10, 20, 30]
  print(sum(numbers))  # Output: 60`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`60`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              7. <code>sorted()</code>
            </h2>
            <p className="text-xl mt-2">
              Returns a sorted list from the given iterable.
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`numbers = [3, 1, 4, 2]
  print(sorted(numbers))  # Output: [1, 2, 3, 4]`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`[1, 2, 3, 4]`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              8. <code>input()</code>
            </h2>
            <p className="text-xl mt-2">Accepts user input as a string.</p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`name = input("What's your name? ")
  print(f"Hello, {name}!")`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`What's your name? : BrunoGG
  Hello, BrunoGG`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              9. <code>round()</code>
            </h2>
            <p className="text-xl mt-2">
              Rounds a number to a specified number of decimal places.
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`print(round(3.14159, 2))  # Output: 3.14`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`3.14`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-semibold mt-8">
              10. <code>bool()</code>
            </h2>
            <p className="text-xl mt-2">
              Converts a value to a boolean (True or False).
            </p>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-orange-400">{`print(bool(0))  # Output: False
  print(bool(42))  # Output: True`}</code>
              </pre>
            </div>
            <div className="mockup-code bg-[#15151b] p-4 rounded-lg my-4">
              <pre className="text-gray-400">
                <code className="text-green-400">{`False
  True`}</code>
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

export default Blog5;
