import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { motion } from "framer-motion";
import "react-phone-number-input/style.css";

const ContactMeMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fullName: "",
    discordId: "",
    message: "",
    phoneNumber: "", // Added for phone number
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookURL =
      "https://discord.com/api/webhooks/1309038074939965490/w5a2CwQThUoJCdrO4MN2JZfeJg75oTaYL4wSwpEi70MaCVOdZR1zCu-szMq3EEKQABke"; // Replace with your Discord Webhook URL
    const messageContent = {
      username: "brunogg.in", // The name of the webhook bot
      content: `New contact form submission:\n**Name**: ${formData.name}\n**Email**: ${formData.email}\n**Phone Number**: ${formData.phoneNumber}\n**Message**: ${formData.message}`,
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageContent),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        // Clear the form data
        setFormData({
          name: "",
          email: "",
          fullName: "",
          discordId: "",
          message: "",
          phoneNumber: "", // Reset phone number
        });
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error sending form data to Discord:", error);
      alert("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center px-2 md:px-4">
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-32 w-full lg:w-10/12"
      >
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 lg:px-6 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-6xl font-bold neon-blue">
                &lt;Contact Me&gt;
              </h3>
              <p className="text-white mt-4">Fill out the form </p>
              <p className="text-white">and I will contact ASAP</p>
            </div>
          </div>

          <form className="w-full lg:w-6/12 lg:px-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-5">
                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-[#fc9170]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    className="px-4 py-2 border w-full outline-none rounded-lg focus:border-teal-400"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileHover={{
                      borderColor: "white", // Border color turns white on hover
                      boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)", // Adds a glowing effect
                    }}
                    transition={{
                      duration: 0.3, // Smooth transition for the effect
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-[#fc9170]"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  {/* Phone Input with custom hover styles */}
                  <PhoneInput
                    international
                    defaultCountry="IN" // Optional, can change as needed
                    value={formData.phoneNumber}
                    onChange={(phone) =>
                      setFormData({ ...formData, phoneNumber: phone })
                    }
                    className="phone-input px-4 py-2 border w-full outline-teal-400 rounded-lg focus:border-teal-400"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-[#fc9170]"
                  htmlFor="email"
                >
                  Email
                </label>
                <motion.input
                  type="email"
                  className="px-4 py-2 border w-full outline-none rounded-lg"
                  id="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileHover={{
                    borderColor: "white", // Border color turns white on hover
                    boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)", // Adds a glowing effect
                  }}
                  transition={{
                    duration: 0.3, // Smooth transition for the effect
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <motion.textarea
                  className="px-4 py-4 border rounded-[5px] w-full outline-none h-64"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  whileHover={{
                    borderColor: "white", // Border color turns white on hover
                    boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)", // Adds a glowing effect
                  }}
                  transition={{
                    duration: 0.3, // Smooth transition for the effect
                    ease: "easeInOut",
                  }}
                />
              </div>

              <button
                type="submit"
                className="inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactMeMain;
