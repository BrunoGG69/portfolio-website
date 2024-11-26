import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { motion } from "motion/react";
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

  // Simplified motion props for better performance
  const motionProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.4 }, // Reduce animation time
    viewport: { once: true },
  };

  return (
    <div className="flex items-center justify-center px-4 py-4">
      <motion.section {...motionProps} className="w-full lg:w-10/12 mb-32">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column: Text */}
          <div className="w-full lg:w-6/12 px-6 mb-8 lg:mb-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-4xl lg:text-6xl font-bold neon-blue">
                &lt;Contact Me&gt;
              </h3>
              <p className="text-white mt-4">Fill out the form </p>
              <p className="text-white">and I will contact ASAP</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <form className="w-full lg:w-6/12 px-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Name & Phone Number */}
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
                <div className="w-full mb-3">
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
                  />
                </div>

                <div className="w-full mb-3">
                  <label
                    className="block font-medium mb-[2px] text-[#fc9170]"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="IN"
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

              {/* Email */}
              <div className="w-full mb-3">
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
                />
              </div>

              {/* Message */}
              <div className="w-full mb-3">
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
                />
              </div>

              {/* Submit Button */}
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
