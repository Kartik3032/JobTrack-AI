import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import About from "../components/about";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <main>
                <Hero />
                <Features />
                <Stats />
                <About />
            </main>

            <Footer />
        </>
    );
}

export default Home;