import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { motion } from "motion/react";
import "react-phone-number-input/style.css";
import useFormWebhook from "../hooks/formWebhook";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        phoneNumber: "",
    });

    const { handleSubmit } = useFormWebhook(formData, setFormData); // Using the webhook handler

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handlePhoneChange = (phone) => {
        if (phone && !isValidPhoneNumber(phone)) {
            setErrors({ ...errors, phoneNumber: "Invalid phone number" });
        } else {
            setErrors({ ...errors, phoneNumber: "" });
        }
        setFormData({ ...formData, phoneNumber: phone });
    };

    const validateForm = () => {
        const phoneValid = isValidPhoneNumber(formData.phoneNumber);
        if (!phoneValid) {
            setErrors({ ...errors, phoneNumber: "Please enter a valid phone number" });
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(e); // Pass to the existing webhook handler
        }
    };

    return (
        <form className="w-full lg:w-6/12 px-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
                {/* Name */}
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

                    {/* Phone Number */}
                    <div className="w-full mb-3 focus:border-teal-400">
                        <label className="block font-medium mb-[2px] text-[#fc9170]" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <PhoneInput
                            international
                            defaultCountry="IN"
                            value={formData.phoneNumber}
                            onChange={handlePhoneChange}
                            className={`phone-input px-4 py-2 border w-full outline-teal-400 rounded-lg focus:border-teal-400 ${
                                errors.phoneNumber ? "border-red-500" : ""
                            }`}
                            placeholder="Enter phone number"
                            required
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="w-full mb-3">
                    <label className="block font-medium mb-[2px] text-[#fc9170]" htmlFor="email">
                        Email
                    </label>
                    <motion.input
                        type="email"
                        className="px-4 py-2 border w-full outline-none rounded-lg focus:border-teal-400"
                        id="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Message */}
                <div className="w-full mb-3">
                    <label className="block font-medium mb-[2px] text-[#fc9170]" htmlFor="message">
                        Message
                    </label>
                    <motion.textarea
                        className="px-4 py-4 border rounded-[5px] w-full outline-none h-64 focus:border-teal-400"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white transition-all hover:shadow-md hover:bg-teal-500"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
