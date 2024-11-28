import { motion } from "motion/react";
import { ContactForm } from "../../components"; // Importing the form component

const ContactMeMain = () => {
  return (
      <div className="flex items-center justify-center px-4 py-4">
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 mb-32"
        >
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

            {/* Right Column: Contact Form */}
            <ContactForm />
          </div>
        </motion.section>
      </div>
  );
};

export default ContactMeMain;
