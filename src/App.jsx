import { useEffect } from 'react';
import { Hero, TechStacks, Projects, ContactMe } from './sections';
import { Nav } from './components';

const App = () => {
    useEffect(() => {
        // Initialize particles.js with the new configuration
        window.particlesJS('particles-js', {
            particles: {
                number: { value: 35, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: {
                    type: 'circle',
                    stroke: { width: 0, color: '#000000' },
                    polygon: { nb_sides: 5 },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                },
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true,
                },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                },
            },
            retina_detect: true,
        });
    }, []);

    return (
        <main className="relative">
            {/* Particles Background */}
            <div id="particles-js" className="absolute inset-0 bg-[#15151b] -z-10"></div>
            {/* Navigation and Sections */}
            <Nav />
            <section className="xl:padding-1 wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <TechStacks />
            </section>
            <section className="padding">
                <Projects />
            </section>
            <section className="padding">
                <ContactMe />
            </section>
        </main>
    );
};

export default App;
