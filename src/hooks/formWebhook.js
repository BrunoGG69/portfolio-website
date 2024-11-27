import { useState } from "react";

const useFormWebhook = (formData, setFormData) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

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
                    phoneNumber: "",
                    message: "",
                });
            } else {
                alert("There was an error sending your message.");
            }
        } catch (error) {
            console.error("Error sending form data to Discord:", error);
            alert("Failed to send the message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, loading };
};

export default useFormWebhook;
