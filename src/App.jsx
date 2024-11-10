import { Hero, TechStacks, Projects, ContactMe } from './sections';
import { Nav } from './components';

const App = () => {
    return (
        <main className="relative bg-[#15141d]">
            <Nav />
            <section className = "xl:padding-1 wide:padding-r padding-b">
                <Hero />
            </section>
            <section className = "padding">
                <TechStacks />
            </section >
            <section className = "padding">
                <Projects />
            </section>
            <section className = "padding">
                <ContactMe />
            </section>
        </main>


    );
};

export default App;