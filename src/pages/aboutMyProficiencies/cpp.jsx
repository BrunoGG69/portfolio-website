import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from "../../components";
import { FooterMain } from "../../sections/index.js";
import { motion } from "motion/react";

const Cpp = () => {
    const location = useLocation();

    // Information array for C++
    const information = [
        {
            features: [
                "Mid Level Programming Language",
                "Supports Object Oriented Programming",
                "Fast and Efficient",
                "Structured Programming",
                "Error and Exception Handling",
                "Rich Library"
            ],
            pros: [
                "Fast Speed",
                "Portable",
                "Scalable",
                "Low Energy Consumption",
                "Operator Overloading",
            ],
            cons: [
                "High Learning Curve",
                "Complexity",
                "Lacks of Built-In Support",
                "No Garbage Collection",
                "Less Flexible"
            ],
            codeEditors: ["CLion", "Arduino", "VSCode"]
        }
    ];

    // Icons for matching editors
    const icons = [
        { name: "CLion", url: "https://brunogg69.github.io/icons/logos/clion.svg" },
        { name: "Arduino", url: "https://brunogg69.github.io/icons/logos/arduino.svg" },
        { name: "VSCode", url: "https://brunogg69.github.io/icons/logos/vscode.svg" },
    ];

    // Fetching icon URL based on editor name
    const getEditorIcon = (editorName) => {
        const icon = icons.find(icon => icon.name === editorName);
        return icon ? icon.url : null;
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location]);

    return (
        <main className="px-6 bg-black min-h-screen pt-20 flex flex-col">
            <Nav />
            <motion.section
                className="sm:px-16 px-8 py-10 flex flex-col flex-grow items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* Title Section */}
                <div className="flex items-center space-x-4">
                    <img
                        src="https://brunogg69.github.io/icons/logos/c++.svg"
                        alt="C++ Logo"
                        width={50}
                        height={50}
                        className="transition-all hover:scale-110 hover:brightness-110"
                    />
                    <h1 className="py-5 font-bold font-jetbrains text-white text-2xl sm:text-4xl lg:text-5xl transition-all hover:scale-110 hover:brightness-110">
                        C++
                    </h1>
                </div>

                {/* Description Section */}
                <div className="flex flex-col lg:flex-row justify-center mt-8">
                    {/* Features Section */}
                    <div className="flex flex-col px-3 py-5 md:px-10 w-full lg:w-1/3">
                        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold transition-all hover:scale-110 hover:brightness-110">
                            Features
                        </h2>
                        <motion.ul
                            className="mt-6 text-white text-md sm:text-lg lg:text-xl space-y-2 "
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            {information[0].features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-purple-400 transition-all hover:scale-110 hover:brightness-110"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2, duration: 0.7 }}
                                >
                                    <svg
                                        className="w-5 h-5 mr-2 text-purple-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="5" />
                                    </svg>
                                    {feature}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Pros Section */}
                    <div className="flex flex-col px-3 py-5 md:px-10 w-full lg:w-1/3">
                        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold transition-all hover:scale-110 hover:brightness-110">
                            Pros
                        </h2>
                        <motion.ul
                            className="mt-6 text-white text-md sm:text-lg lg:text-xl space-y-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            {information[0].pros.map((pros, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-green-400 transition-all hover:scale-110 hover:brightness-110"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2, duration: 0.7 }}
                                >
                                    <svg
                                        className="w-5 h-5 mr-2 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 16.17l-3.59-3.58L4 14l5 5 12-12-1.41-1.41L9 16.17z" />
                                    </svg>
                                    {pros}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Cons Section */}
                    <div className="flex flex-col px-3 py-5 md:px-10 w-full lg:w-1/3">
                        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold transition-all hover:scale-110 hover:brightness-110">
                            Cons
                        </h2>
                        <motion.ul
                            className="mt-6 text-white text-md sm:text-lg lg:text-xl space-y-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            {information[0].cons.map((con, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-red-400 transition-all hover:scale-110 hover:brightness-110"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2, duration: 0.7 }}
                                >
                                    <svg
                                        className="w-5 h-5 mr-2 text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                    {con}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Code Editors Section */}
                    <div className="flex flex-col px-3 py-5 md:px-10 w-full lg:w-1/3">
                        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold transition-all hover:scale-110 hover:brightness-110">
                            Code Editors
                        </h2>
                        <div className="mt-6 flex space-x-4">
                            {information[0].codeEditors.map((editor, index) => {
                                const editorIcon = getEditorIcon(editor);
                                return (
                                    editorIcon && (
                                        <motion.img
                                            key={index}
                                            src={editorIcon}
                                            alt={editor}
                                            className="w-12 h-12 transition-all hover:scale-110 hover:brightness-110"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: index * 0.2, duration: 0.7 }}
                                        />
                                    )
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Footer Section */}
            <motion.section
                className="border-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <FooterMain />
            </motion.section>
        </main>
    );
};

export default Cpp;
