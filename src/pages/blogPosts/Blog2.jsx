import { useEffect, useState } from "react";
import image2 from "../../assets/BlogAssets/Banner/2.png";
import Step1 from "../../assets/BlogAssets/StepsBlog2/1.png";
import Step2 from "../../assets/BlogAssets/StepsBlog2/2.png";
import Step3 from "../../assets/BlogAssets/StepsBlog2/3.png";
import Step4 from "../../assets/BlogAssets/StepsBlog2/4.png";
import Step5 from "../../assets/BlogAssets/StepsBlog2/5.png";
import Step6 from "../../assets/BlogAssets/StepsBlog2/6.png";
import Step7 from "../../assets/BlogAssets/StepsBlog2/7.png";
import Step8 from "../../assets/BlogAssets/StepsBlog2/8.png";

import profilePic from "../../assets/profilePic.png";
import { Footer, Nav } from "../../components/index.js";
import { socialLinks } from "../../constants/index.js";

const Blog1 = () => {
  const footerContent = {
    profileImage: profilePic,
    Message: "All Rights Reserved By BrunoGG",
    links: socialLinks,
  };

  const [imageIndex, setImageIndex] = useState(0);
  const images = [Step3, Step4, Step5, Step6];

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
              src={image2}
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
              Date: 21/12/2024
            </span>
            </div>
          </div>

          {/* Blog Title */}
          <div id="Main Blog">
            <h1 className="text-6xl font-bold mb-6">
              How to Set Up Home Assistant on a Raspberry Pi
            </h1>

            {/* Introduction */}
            <div id="Initial Content">
              <p className="mt-7 text-xl">
                Home Assistant is an open-source home automation platform that
                focuses on privacy and local control. It allows you to control all
                your devices from a single, mobile-friendly interface which can be
                accessed from anywhere in the world.
              </p>

              <h2 className="mt-7 text-3xl font-semibold">
                Key Features of Home Assistant
              </h2>
              <ul className="list-disc pl-6 mt-4 text-xl space-y-2">
                <li>
                  <strong className="underline">Open-source platform</strong>:
                  Home Assistant is an open-source platform for home automation,
                  constantly updated by a vibrant community.
                </li>
                <li>
                  <strong className="underline">Local control</strong>: Focuses on
                  local control and privacy, ensuring no reliance on cloud
                  services.
                </li>
                <li>
                  <strong className="underline">Extensive integrations</strong>:
                  Supports thousands of devices and services, including smart
                  bulbs, thermostats, and voice assistants.
                </li>
                <li>
                  <strong className="underline">Custom automations</strong>:
                  Create powerful automations using YAML or the built-in UI
                  automation editor.
                </li>
                <li>
                  <strong className="underline">Dashboard customizability</strong>
                  : Fully customizable Lovelace dashboards allow tailored user
                  experiences.
                </li>
                <li>
                  <strong className="underline">Energy management</strong>: Track
                  energy usage and optimize consumption for smart and sustainable
                  living.
                </li>
                <li>
                  <strong className="underline">Scene and script support</strong>:
                  Combine devices and services into scenes and reusable scripts
                  for seamless control.
                </li>
                <li>
                  <strong className="underline">
                    Voice assistant integration
                  </strong>
                  : Integrates easily with Amazon Alexa, Google Assistant, and
                  others for voice control.
                </li>
                <li>
                  <strong className="underline">Add-ons and backups</strong>:
                  Add-ons like Node-RED, Mosquitto MQTT, and automatic backups
                  simplify complex setups.
                </li>
                <li>
                  <strong className="underline">Active community</strong>: Benefit
                  from an active user community and detailed documentation for
                  troubleshooting and enhancements.
                </li>
              </ul>

              <p className="mt-7 text-xl">
                These features make Home Assistant a powerful tool for smart home
                automation, offering endless possibilities for customization and
                control. The platform is constantly evolving, with new
                integrations and features being added regularly.
              </p>
            </div>

            {/* Hardware Requirements */}
            <div id="Hardware Requirements" className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">
                Hardware Requirements
              </h2>
              <ol className="list-decimal ml-6 mt-4 text-xl space-y-4">
                <li>
                  <strong className="underline">
                    Raspberry Pi 5 or 4 (Avoid Raspberry Pi 3B)
                  </strong>
                  : Ideal hardware for running Home Assistant; offers excellent
                  performance and compatibility.
                </li>
                <li>
                  <strong className="underline">Any Old Computer</strong>: Home
                  Assistant can run on a variety of Hardware, including old
                  computers, laptops, and servers. There is also a version for
                  Docker available
                </li>
              </ol>
            </div>

            {/* Additional Requirements */}
            <div id="Additional Requirements" className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">
                Additional Requirements
              </h2>
              <ol className="list-decimal ml-6 mt-4 text-xl space-y-4">
                <li>
                  <strong className="underline">
                    Micro SD card (Ideally one having label of A2)
                  </strong>
                  : Check for the label A2 on the card. Application Class 2 cards
                  perform better especially on small read and write operations and
                  are better suited to host applications.
                </li>
                <li>
                  <strong className="underline">SD Card reader</strong>: Home This
                  is already part of most laptops, but you can purchase a
                  standalone USB adapter if you don’t have one. The brand doesn’t
                  matter, just pick the cheapest.
                </li>
                <li>
                  <strong className="underline">Ethernet cable</strong>: Required
                  for installation. After installation, Home Assistant can work
                  with Wi-Fi, but an Ethernet connection is more reliable and
                  highly recommended.
                </li>
              </ol>
            </div>

            {/* Installation Steps */}
            <div id="Installation Steps" className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">Installation Steps</h2>
              <ol className="list-decimal ml-6 mt-4 text-xl space-y-4">
                <li>
                  Download and install the{" "}
                  <a
                      href="https://www.raspberrypi.com/software/"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                  >
                    Raspberry Pi Imager
                  </a>
                </li>
                <li>
                  Open the Raspberry Pi Imager and select your Raspberry Pi
                  device.
                </li>

                <div className="flex items-center justify-center">
                  <div className="mockup-window border-white border w-[70vh] h-auto max-h-[80vh]">
                    <div className="border-white flex justify-center border-t">
                      <img
                          src={Step1}
                          alt="Step"
                          className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <li>
                  Select <strong>Choose OS</strong>
                </li>
                <div className="flex items-center justify-center">
                  <div className="mockup-window border-white border w-[70vh] h-auto max-h-[80vh]">
                    <div className="border-white flex justify-center border-t">
                      <img
                          src={Step2}
                          alt="Step2"
                          className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <li>
                  Select <strong>Other specific-purpose OS</strong> &gt;{" "}
                  <strong>Home assistants and home automation</strong> &gt;
                  <strong>Home Assistant</strong>.
                </li>

                <div className="flex items-center justify-center">
                  <div className="mockup-window border-white border w-[70vh] h-auto max-h-[80vh]">
                    <div className="border-white flex justify-center border-t">
                      <img
                          src={images[imageIndex]}
                          alt="Step"
                          className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <li>
                  Insert the SD card into your computer{" "}
                  <strong>(The contents of the card will be overwritten)</strong>{" "}
                  and <strong>select your SD card</strong>
                </li>

                <div className="flex items-center justify-center">
                  <div className="mockup-window border-white border w-[70vh] h-auto max-h-[80vh]">
                    <div className="border-white flex justify-center border-t">
                      <img
                          src={Step7}
                          alt="Step"
                          className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <li>
                  Write the installer onto the SD card by clicking the NEXT button and wait for it to be written
                </li>

                <div className="flex items-center justify-center">
                  <div className="mockup-window border-white border w-[70vh] h-auto max-h-[80vh]">
                    <div className="border-white flex justify-center border-t">
                      <img
                          src={Step8}
                          alt="Step"
                          className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <li>Eject the <strong>SD Card</strong></li>
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

export default Blog1;