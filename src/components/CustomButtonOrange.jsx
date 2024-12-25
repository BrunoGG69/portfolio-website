import { motion } from "motion/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CustomButtonOrange = ({ href, label, colorClass }) => {
    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <Link
                to={href}
                className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-bold rounded-full group ${colorClass} group-hover:${colorClass} hover:text-white text-white transition-all ease-out duration-300 shadow-[0_0_15px_#f98e6c]`}
            >
                <motion.span
                    className="relative px-6 py-2 transition-all ease-out duration-300 bg-[#15151b] rounded-full group-hover:bg-opacity-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    {label}
                </motion.span>
            </Link>
        </motion.div>
    );
};

CustomButtonOrange.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    colorClass: PropTypes.string.isRequired,
};

export default CustomButtonOrange;
