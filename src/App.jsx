import { useEffect } from 'react';
import { HeroMain, TechStacksMain, ProjectsMain, ContactMeMain, AboutMeMain } from './sections';
import { Nav } from './components';

const App = () => {
    useEffect(() => {
        // Initialize particles.js with the new configuration
        window.particlesJS('particles-js', {
            particles: {
                number: { value: 35, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, out_mode: 'out' },
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, repulse: { distance: 200 } },
            },
            retina_detect: true,
        });
    }, []);

    return (
        <main className="relative overflow-hidden">
            <div id="particles-js" className="absolute inset-0 bg-[#15151b] -z-10"></div>
            <Nav />
            <div className="flex flex-col">
                <section className="xl:padding-1 wide:padding-r padding-b">
                    <HeroMain />
                </section>
                {/*<section className="padding">*/}
                {/*    <AboutMeMain />*/}
                {/*</section>*/}
                <section className="padding bg-[#15151b]">
                    <TechStacksMain />
                </section>
                <section className="padding">
                    <ProjectsMain />
                </section>
                <section className="padding">
                    <ContactMeMain />
                </section>
            </div>
        </main>
    );
};

export default App;
