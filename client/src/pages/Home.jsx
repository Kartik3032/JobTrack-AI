import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
    return (
        <div
            id="home"
            className="min-h-screen bg-black text-white"
        >
            <Navbar />

            <Hero />

            <Features />

            <Stats />

            <About />

            <Footer />
        </div>
    );
}

export default Home;