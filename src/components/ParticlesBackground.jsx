import { useEffect } from "react";
import PropTypes from "prop-types";

const ParticlesBackground = ({ isMobile }) => {
  useEffect(() => {
    if (!isMobile && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
    return () => {
      const canvas = document.querySelector("#particles-js canvas");
      if (canvas) canvas.remove();
    };
  }, [isMobile]);

  return !isMobile ? (
    <div id="particles-js" className="absolute inset-0 -z-10"></div>
  ) : null;
};

ParticlesBackground.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default ParticlesBackground;
