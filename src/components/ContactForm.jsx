import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { motion } from "motion/react";
import "react-phone-number-input/style.css";
import useFormWebhook from "../hooks/formWebhook"; // Importing the form webhook handler

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const { handleSubmit } = useFormWebhook(formData, setFormData); // Using the webhook handler

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <form className="w-full lg:w-6/12 px-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
                {/* Name & Phone Number */}
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
                    <div className="w-full mb-3">
                        <label className="block font-medium mb-[2px] text-[#fc9170]" htmlFor="name">
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
                        <label className="block font-medium mb-[2px] text-[#fc9170]" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <PhoneInput
                            international
                            defaultCountry="IN"
                            value={formData.phoneNumber}
                            onChange={(phone) => setFormData({ ...formData, phoneNumber: phone })}
                            className="phone-input px-4 py-2 border w-full outline-teal-400 rounded-lg focus:border-teal-400"
                            placeholder="Enter phone number"
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="w-full mb-3">
                    <label className="block font-medium mb-[2px] text-[#fc9170]" htmlFor="email">
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
                    <label className="block font-medium mb-[2px] text-teal-700" htmlFor="message">
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
    );
};

export default ContactForm;
