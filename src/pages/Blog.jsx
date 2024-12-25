import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import { motion } from "motion/react";

import image1 from "../assets/BlogAssets/MainPage/1.png";
import image2 from "../assets/BlogAssets/MainPage/2.png";
import image3 from "../assets/BlogAssets/MainPage/3.png";
import image4 from "../assets/BlogAssets/MainPage/4.png";
import image5 from "../assets/BlogAssets/MainPage/5.png";
import image6 from "../assets/BlogAssets/MainPage/6.png";
import profilePic from "../assets/profilePic-noBackground.png";
import {socialLinks} from "../constants/index.js";
import {Footer} from "../components/index.js";

const Blog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [hoveredBlog, setHoveredBlog] = useState(null);

    const footerContent = {
        profileImage: profilePic,
        Message: "All Rights Reserved By BrunoGG",
        links: socialLinks,
    };

    useEffect(() => {
        setBlogs([
            {
                id: 1,
                title: "How to use and Install TailwindCSS",
                image: image1,
            },
            {
                id: 2,
                title: "10 Tips for Better Web Design",
                image: image2,
            },
            {
                id: 3,
                title: "Understanding Blockchain",
                image: image3,
            },
            {
                id: 4,
                title: "AI in Everyday Life",
                image: image4,
            },
            {
                id: 5,
                title: "Web Design Best Practices",
                image: image5,
            },
            {
                id: 6,
                title: "The Blockchain Revolution",
                image: image6,
            },
        ]);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location]);

    const handleReadMore = (id) => {
        navigate(`/blog${id}`);
    };

    return (
        <main className="px-6 bg-black min-h-screen pt-20 text-white">
            <Nav />
            <div className="text-center my-10">
                <h1 className="text-4xl font-jetbrains md:text-6xl font-bold neon-orange">
                    Welcome to My Blog
                </h1>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-5 py-10 w-full">
                {blogs.map((blog) => (
                    <motion.div
                        key={blog.id}
                        className="bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#010101] rounded-3xl shadow-lg border border-gray-700 p-6 flex flex-col justify-between h-full relative overflow-hidden"
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#FFFFFF",
                            boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onMouseEnter={() => setHoveredBlog(blog.id)}
                        onMouseLeave={() => setHoveredBlog(null)}
                        onClick={() => handleReadMore(blog.id)}
                    >
                        <div className="mb-4 relative w-full h-56 rounded-xl overflow-hidden">
                            <motion.img
                                src={blog.image}
                                alt={blog.title}
                                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                                initial={{ opacity: 0.8 }}
                                animate={{ opacity: hoveredBlog === blog.id ? 1 : 0.8 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {hoveredBlog === blog.id && (
                            <motion.div
                                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-semibold rounded-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                Click to Read More
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </section>

            {/* Footer */}
            <Footer
                profileImage={footerContent.profileImage}
                footerMessage={footerContent.Message}
                links={footerContent.links}
            />
        </main>
    );
};

export default Blog;
